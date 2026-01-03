import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="w-[276px] h-[190px] bg-white border border-neutral-400 rounded-xl p-[16px]">
      <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center mb-[16px]">
        {icon}
      </div>
      <h3 className="font-inter font-semibold text-[18px] leading-[28px] text-neutral-900 mb-[9px]">
        {title}
      </h3>
      <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
        {description}
      </p>
    </div>
  );
}
