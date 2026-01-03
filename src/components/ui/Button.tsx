import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon = false,
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-2 font-inter font-semibold rounded-xl transition-all';

  const variantStyles = {
    primary: 'bg-button-gradient text-black hover:shadow-lg',
    secondary: 'bg-button-gradient text-[#0F1729] hover:shadow-[0px_4px_14px_rgba(245,159,10,0.3)]',
    outline: 'border-2 border-[rgba(248,250,252,0.3)] text-neutral-100 hover:bg-[rgba(248,250,252,0.1)]',
  };

  const sizeStyles = {
    sm: 'h-[40px] px-[19px] text-[14px] leading-[17px]',
    md: 'h-[48px] px-[30px] text-[16px] leading-[19px]',
    lg: 'h-[56px] px-[38px] text-[18px] leading-[28px]',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} className={variant === 'outline' ? 'text-neutral-100' : 'text-[#0F1729]'} />}
    </button>
  );
}
