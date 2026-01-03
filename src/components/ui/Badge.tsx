interface BadgeProps {
  children: string;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center justify-center px-[14px] h-[36px] bg-[rgba(245,159,10,0.1)] rounded-full">
      <span className="font-inter font-medium text-[14px] leading-[17px] text-accent-yellow">
        {children}
      </span>
    </div>
  );
}
