import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const IPhoneFrame = ({ children, className = '' }: IPhoneFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone 16 Pro frame */}
      <div className="relative rounded-[2.8rem] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden">
        {/* Dynamic Island - floating pill, not connected to top */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[24px] bg-black rounded-full" />
        {/* Screen content */}
        <div className="relative rounded-[2rem] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IPhoneFrame;
