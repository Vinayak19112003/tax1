import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0px_4px_6px_-1px_rgba(15,23,41,0.1),0px_2px_2px_-2px_rgba(15,23,41,0.1)]">
      <div className="w-[1440px] h-[80px] mx-auto relative">
        <Link
          to="/"
          className={`absolute left-[113px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[70px] h-[40px] ${
            isActive('/') ? 'bg-[rgba(248,250,252,0.1)]' : ''
          } rounded-xl`}
        >
          <span className="font-inter font-normal text-[20px] leading-[24px] text-black">
            Home
          </span>
        </Link>

        <Link
          to="/services"
          className={`absolute left-[610px] top-1/2 -translate-y-1/2 flex items-center justify-center h-[40px] px-[10px] ${
            isActive('/services') ? 'bg-[#F3F5F7]' : ''
          } rounded-xl`}
        >
          <span className="font-inter font-normal text-[20px] leading-[24px] text-black">
            Service
          </span>
        </Link>

        <Link
          to="/about"
          className={`absolute left-[755px] top-1/2 -translate-y-1/2 flex items-center justify-center h-[44px] px-[10px] ${
            isActive('/about') ? 'bg-[#F3F5F7]' : ''
          } rounded-xl`}
        >
          <span className="font-inter font-normal text-[20px] leading-[24px] text-black">
            About Us
          </span>
        </Link>

        <Link
          to="/contact"
          className={`absolute left-[907px] top-1/2 -translate-y-1/2 flex items-center justify-center h-[44px] px-[10px] ${
            isActive('/contact') ? 'bg-[#F3F5F7]' : ''
          } rounded-xl`}
        >
          <span className="font-inter font-normal text-[20px] leading-[24px] text-black">
            Contact
          </span>
        </Link>

        <button className="absolute left-[1159px] top-[20px] w-[168px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-[15px] flex items-center justify-center">
          <span className="font-inter font-semibold text-[14px] leading-[20px] text-black">
            Get Free Consultation
          </span>
        </button>
      </div>
    </header>
  );
}
