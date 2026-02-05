import { motion } from 'framer-motion';

interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  delay?: number;
  isCenter?: boolean;
  className?: string;
}

const PhoneMockup = ({ screenshot, alt, delay = 0, isCenter = false, className = '' }: PhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative ${className}`}
      style={{
        transform: isCenter ? 'translateZ(40px)' : 'translateZ(0)',
      }}
    >
      {/* iPhone 16 Pro Frame - Titanium finish */}
      <div 
        className={`relative ${isCenter ? 'w-[180px] md:w-[220px] lg:w-[280px]' : 'w-[150px] md:w-[180px] lg:w-[230px]'}`}
        style={{
          filter: isCenter ? 'drop-shadow(0 40px 60px rgba(0,0,0,0.25))' : 'drop-shadow(0 30px 50px rgba(0,0,0,0.2))',
        }}
      >
        {/* Phone Frame - Titanium bezel */}
        <div 
          className="relative rounded-[2.5rem] md:rounded-[3rem] p-[3px] md:p-[4px]"
          style={{
            background: 'linear-gradient(145deg, #8a8a8a 0%, #b8b8b8 25%, #9a9a9a 50%, #c4c4c4 75%, #a0a0a0 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)',
          }}
        >
          {/* Inner bezel edge */}
          <div 
            className="rounded-[2.3rem] md:rounded-[2.8rem] p-[2px]"
            style={{
              background: 'linear-gradient(145deg, #6a6a6a, #8a8a8a)',
            }}
          >
            {/* Screen container */}
            <div className="relative rounded-[2.2rem] md:rounded-[2.6rem] overflow-hidden bg-black">
              {/* Dynamic Island */}
              <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-20 w-[60px] md:w-[80px] h-[18px] md:h-[24px] bg-black rounded-full" />
              
              {/* Screen with screenshot */}
              <div className="relative aspect-[9/19.5]">
                <img
                  src={screenshot}
                  alt={alt}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Glass reflection overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(165deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 25%, transparent 40%, transparent 100%)',
                  }}
                />
                
                {/* Subtle edge highlight */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-[2.2rem] md:rounded-[2.6rem]"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Side buttons - Volume */}
        <div 
          className="absolute left-0 top-[20%] w-[2px] h-[8%] rounded-l-sm"
          style={{
            background: 'linear-gradient(180deg, #a0a0a0, #808080, #a0a0a0)',
          }}
        />
        <div 
          className="absolute left-0 top-[30%] w-[2px] h-[12%] rounded-l-sm"
          style={{
            background: 'linear-gradient(180deg, #a0a0a0, #808080, #a0a0a0)',
          }}
        />
        <div 
          className="absolute left-0 top-[44%] w-[2px] h-[12%] rounded-l-sm"
          style={{
            background: 'linear-gradient(180deg, #a0a0a0, #808080, #a0a0a0)',
          }}
        />
        
        {/* Side button - Power */}
        <div 
          className="absolute right-0 top-[28%] w-[2px] h-[15%] rounded-r-sm"
          style={{
            background: 'linear-gradient(180deg, #a0a0a0, #808080, #a0a0a0)',
          }}
        />
      </div>
      
      {/* Contact shadow underneath */}
      <div 
        className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${isCenter ? 'w-[70%] h-8' : 'w-[60%] h-6'} rounded-[100%] blur-xl`}
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default PhoneMockup;
