import { useEffect, useRef, useCallback } from 'react';

const HeroWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width: number, height: number;
    const SCALE = 6; // Higher scale = less pixels = better perf

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 1); // Cap at 1x for perf
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const startTime = performance.now();

    // Precompute sin/cos table
    const TABLE_SIZE = 512;
    const SIN = new Float32Array(TABLE_SIZE);
    const COS = new Float32Array(TABLE_SIZE);
    for (let i = 0; i < TABLE_SIZE; i++) {
      const angle = (i / TABLE_SIZE) * Math.PI * 2;
      SIN[i] = Math.sin(angle);
      COS[i] = Math.cos(angle);
    }

    const MASK = TABLE_SIZE - 1;
    const INV_TAU = TABLE_SIZE / (Math.PI * 2);

    const fastSin = (x: number) => SIN[((x * INV_TAU) | 0) & MASK];
    const fastCos = (x: number) => COS[((x * INV_TAU) | 0) & MASK];

    let imageData: ImageData;
    let data: Uint8ClampedArray;
    let lastFrame = 0;
    const TARGET_FPS = 24;
    const FRAME_TIME = 1000 / TARGET_FPS;

    const frame = (now: number) => {
      if (now - lastFrame < FRAME_TIME) {
        animationId = requestAnimationFrame(frame);
        return;
      }
      lastFrame = now;

      // Recreate imageData if size changed
      if (!imageData || imageData.width !== width || imageData.height !== height) {
        imageData = ctx.createImageData(width, height);
        data = imageData.data;
      }

      const time = (now - startTime) * 0.0008;
      const invH = 1 / height;

      for (let y = 0; y < height; y++) {
        const uy = (2 * y - height) * invH;
        for (let x = 0; x < width; x++) {
          const ux = (2 * x - width) * invH;

          let a = 0, d = 0;
          // Reduce iterations from 4 to 3
          for (let i = 0; i < 3; i++) {
            a += fastCos(i - d + time * 0.5 - a * ux);
            d += fastSin(i * uy + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          const intensity = 0.3 + 0.4 * wave;
          const baseVal = 0.1 + 0.15 * fastCos(ux + uy + time * 0.3);
          const blueAccent = 0.2 * fastSin(a * 1.5 + time * 0.2);
          const purpleAccent = 0.15 * fastCos(d * 2 + time * 0.1);

          const r = Math.max(0, Math.min(1, baseVal * 0.4 + purpleAccent * 0.3)) * intensity;
          const g = Math.max(0, Math.min(1, baseVal * 0.8 + blueAccent * 0.9 + purpleAccent * 0.2)) * intensity;
          const b = Math.max(0, Math.min(1, baseVal * 0.7 + blueAccent * 1.0 + purpleAccent * 0.5)) * intensity;

          const idx = (y * width + x) * 4;
          data[idx] = r * 255;
          data[idx + 1] = g * 255;
          data[idx + 2] = b * 255;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'low';
      ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(frame);
    };

    animationId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const cleanup = render();
    return cleanup;
  }, [render]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ willChange: 'contents' }}
    />
  );
};

export default HeroWave;
