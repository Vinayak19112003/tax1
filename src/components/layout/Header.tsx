import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
          ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(15,23,41,0.1),0px_2px_2px_-2px_rgba(15,23,41,0.1)]'
          : 'bg-transparent'
        }`}
    >
      <div className="w-[1440px] h-[80px] mx-auto flex items-center justify-between px-[113px]">
        {/* Navigation Links */}
        <nav className="flex items-center gap-[40px]">
          <Link
            to="/"
            className={`flex items-center justify-center h-[40px] px-[20px] rounded-xl transition-colors ${isActive('/')
                ? (isScrolled ? 'bg-[#F3F5F7]' : 'bg-[rgba(248,250,252,0.1)]')
                : 'hover:bg-black/5'
              }`}
          >
            <span className={`font-inter font-normal text-[16px] leading-[24px] ${isScrolled ? 'text-black' : 'text-white'}`}>
              Home
            </span>
          </Link>

          <Link
            to="/services"
            className={`flex items-center justify-center h-[40px] px-[20px] rounded-xl transition-colors ${isActive('/services')
                ? (isScrolled ? 'bg-[#F3F5F7]' : 'bg-[rgba(248,250,252,0.1)]')
                : 'hover:bg-black/5'
              }`}
          >
            <span className={`font-inter font-normal text-[16px] leading-[24px] ${isScrolled ? 'text-black' : 'text-white'}`}>
              Service
            </span>
          </Link>

          <Link
            to="/about"
            className={`flex items-center justify-center h-[40px] px-[20px] rounded-xl transition-colors ${isActive('/about')
                ? (isScrolled ? 'bg-[#F3F5F7]' : 'bg-[rgba(248,250,252,0.1)]')
                : 'hover:bg-black/5'
              }`}
          >
            <span className={`font-inter font-normal text-[16px] leading-[24px] ${isScrolled ? 'text-black' : 'text-white'}`}>
              About Us
            </span>
          </Link>

          <Link
            to="/contact"
            className={`flex items-center justify-center h-[40px] px-[20px] rounded-xl transition-colors ${isActive('/contact')
                ? (isScrolled ? 'bg-[#F3F5F7]' : 'bg-[rgba(248,250,252,0.1)]')
                : 'hover:bg-black/5'
              }`}
          >
            <span className={`font-inter font-normal text-[16px] leading-[24px] ${isScrolled ? 'text-black' : 'text-white'}`}>
              Contact
            </span>
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="w-[168px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-[15px] flex items-center justify-center">
          <span className="font-inter font-semibold text-[14px] leading-[20px] text-black">
            Get Free Consultation
          </span>
        </button>
      </div>
    </header>
  );
}
