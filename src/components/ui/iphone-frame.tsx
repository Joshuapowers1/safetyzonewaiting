import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const IPhoneFrame = ({ children, className = '' }: IPhoneFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone 16 Pro frame */}
      <div className="relative rounded-[3rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[28px] bg-[#1a1a1a] rounded-b-[18px]" />
        {/* Screen content */}
        <div className="relative rounded-[2.4rem] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IPhoneFrame;
