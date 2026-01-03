import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full h-[485px] bg-gradient-to-r from-[#141F38] to-[#2D3853] relative">
      <div className="w-[1440px] mx-auto h-full relative">
        <div className="absolute left-[113px] top-[107px] w-[313px]">
          <p className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
            Your trusted partner for comprehensive tax, accounting, and business consulting services. We help businesses grow with expert financial guidance.
          </p>
        </div>

        <div className="absolute left-[113px] top-[230px] flex gap-[12px]">
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[rgba(248,250,252,0.1)] rounded-xl flex items-center justify-center"
          >
            <Facebook size={20} className="text-neutral-100" />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[rgba(248,250,252,0.1)] rounded-xl flex items-center justify-center"
          >
            <Twitter size={20} className="text-neutral-100" />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[rgba(248,250,252,0.1)] rounded-xl flex items-center justify-center"
          >
            <Linkedin size={20} className="text-neutral-100" />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[rgba(248,250,252,0.1)] rounded-xl flex items-center justify-center"
          >
            <Instagram size={20} className="text-neutral-100" />
          </a>
        </div>

        <div className="absolute left-[539px] top-[71px]">
          <h4 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-100 mb-[27px]">
            Our Services
          </h4>
          <nav className="flex flex-col gap-[18px]">
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              GST Services
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Income Tax Services
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Business Registration
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Accounting Services
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Audit Services
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Trademark Services
            </Link>
          </nav>
        </div>

        <div className="absolute left-[805px] top-[71px]">
          <h4 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-100 mb-[27px]">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-[18px]">
            <Link to="/" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Home
            </Link>
            <Link to="/services" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Services
            </Link>
            <Link to="/about" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              About Us
            </Link>
            <Link to="/contact" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
              Contact
            </Link>
          </nav>
        </div>

        <div className="absolute left-[1069px] top-[71px]">
          <h4 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-100 mb-[27px]">
            Contact Us
          </h4>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-start gap-[12px]">
              <MapPin size={20} className="text-accent-yellow mt-[2px]" />
              <p className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)] w-[226px]">
                123 Business Center, Anna Nagar, Chennai - 600040
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <Phone size={20} className="text-accent-yellow" />
              <p className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
                +91 98765 43210
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <Mail size={20} className="text-accent-yellow" />
              <p className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
                info@taxpro.com
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <Clock size={20} className="text-accent-yellow" />
              <p className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.7)]">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-[113px] right-[113px] top-[371px] h-[0.8px] bg-neutral-100" />

        <div className="absolute left-[113px] top-[399px]">
          <p className="font-inter font-normal text-[14px] leading-[20px] text-[rgba(248,250,252,0.6)]">
            © 2025 TaxPro. All rights reserved.
          </p>
        </div>

        <div className="absolute right-[113px] top-[399px] flex gap-[20px]">
          <a href="#" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.6)]">
            Privacy Policy
          </a>
          <a href="#" className="font-inter font-normal text-[14px] leading-[17px] text-[rgba(248,250,252,0.6)]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
