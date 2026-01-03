import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Service' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-[113px] h-[80px] flex items-center justify-between">

        {/* Mobile: Hamburger Button */}
        <button
          className="lg:hidden p-2 text-current z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center justify-center h-[40px] px-[20px] rounded-xl transition-colors ${isActive(link.path)
                  ? (isScrolled ? 'bg-[#F3F5F7]' : 'bg-[rgba(248,250,252,0.1)]')
                  : 'hover:bg-black/5'
                }`}
            >
              <span className={`font-inter font-normal text-[16px] leading-[24px] ${isScrolled ? 'text-black' : 'text-white'}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden lg:flex w-[168px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-[15px] items-center justify-center">
          <span className="font-inter font-semibold text-[14px] leading-[20px] text-black">
            Get Free Consultation
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 right-0 bg-white shadow-lg lg:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-2 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center h-[48px] px-4 rounded-lg ${isActive(link.path) ? 'bg-[#F3F5F7] font-semibold' : 'hover:bg-gray-50'
                    }`}
                >
                  <span className="text-black text-lg font-inter">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
            <button className="w-full h-[48px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center mt-2">
              <span className="font-inter font-semibold text-[16px] text-black">
                Get Free Consultation
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
