import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="w-[391px] h-[270px] bg-white border border-neutral-400 rounded-2xl p-[20px] relative">
      <div className="w-[56px] h-[56px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mt-[24px] mb-[14px]">
        {title}
      </h3>
      <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mb-[21px]">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-[8px] font-inter font-medium text-[14px] leading-[20px] text-accent-yellow hover:underline"
      >
        Learn More
        <ArrowRight size={16} className="text-accent-yellow" />
      </a>
    </div>
  );
}
