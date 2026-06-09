import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

/**
 * Pixel-styled iPhone 16 Pro frame: titanium bezel with gradient, Dynamic Island,
 * side buttons, diagonal glass reflection, optional teal glow beneath.
 */
const IPhoneFrame = ({ children, className = '', glow = true }: IPhoneFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Teal/cyan glow beneath the device */}
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[78%] h-10 rounded-[50%] blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(0,194,168,0.45) 0%, rgba(0,229,255,0.18) 55%, transparent 80%)' }}
        />
      )}

      {/* Side buttons — left: action, volume up, volume down */}
      <div aria-hidden="true" className="absolute -left-[2px] top-[16%] w-[3px] h-[3.5%] rounded-l bg-gradient-to-b from-[#4a4a50] to-[#2a2a2e]" />
      <div aria-hidden="true" className="absolute -left-[2px] top-[24%] w-[3px] h-[6%] rounded-l bg-gradient-to-b from-[#4a4a50] to-[#2a2a2e]" />
      <div aria-hidden="true" className="absolute -left-[2px] top-[32%] w-[3px] h-[6%] rounded-l bg-gradient-to-b from-[#4a4a50] to-[#2a2a2e]" />
      {/* Right: power */}
      <div aria-hidden="true" className="absolute -right-[2px] top-[26%] w-[3px] h-[9%] rounded-r bg-gradient-to-b from-[#4a4a50] to-[#2a2a2e]" />

      {/* Titanium outer bezel */}
      <div
        className="relative rounded-[2.9rem] p-[3px] shadow-[0_24px_70px_-18px_rgba(0,0,0,0.85)]"
        style={{ background: 'linear-gradient(145deg, #5b5e66 0%, #2c2e33 28%, #17181c 55%, #3d4046 82%, #565960 100%)' }}
      >
        <div className="relative rounded-[2.7rem] border-[6px] border-[#0c0c0e] bg-[#0c0c0e] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[34%] h-[22px] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.08)]" />

          {/* Screen content */}
          <div className="relative rounded-[2.2rem] overflow-hidden bg-white">
            {children}

            {/* Diagonal glass reflection */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 28%, transparent 42%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneFrame;
