interface StatCardProps {
  value: string;
  label: string;
  width?: string;
}

export default function StatCard({ value, label, width = '190px' }: StatCardProps) {
  return (
    <div
      className="h-[92px] w-full bg-white shadow-[0px_2px_4px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-xl flex flex-col items-center justify-center"
      style={{ maxWidth: width }}
    >
      <div className="font-inter font-bold text-[30px] leading-[36px] text-accent-yellow">
        {value}
      </div>
      <div className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 text-center mt-[4px]">
        {label}
      </div>
    </div>
  );
}
