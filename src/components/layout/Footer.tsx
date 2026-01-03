import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-hero-gradient text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-[113px]">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 lg:gap-0">

          {/* Brand & Social */}
          <div className="w-full lg:w-[313px] flex flex-col gap-6">
            <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)] leading-relaxed">
              Your trusted partner for comprehensive tax, accounting, and business consulting services. We help businesses grow with expert financial guidance.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-[rgba(248,250,252,0.1)] rounded-xl flex items-center justify-center hover:bg-[rgba(248,250,252,0.2)] transition-colors">
                  <Icon size={20} className="text-neutral-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-lg">Our Services</h4>
            <nav className="flex flex-col gap-4">
              {['GST Services', 'Income Tax Services', 'Business Registration', 'Accounting Services', 'Audit Services', 'Trademark Services'].map((item) => (
                <Link key={item} to="/services" className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)] hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link key={link.label} to={link.path} className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-lg">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-yellow mt-[2px] shrink-0" />
                <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)] w-[226px]">
                  123 Business Center, Anna Nagar, Chennai - 600040
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent-yellow shrink-0" />
                <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)]">
                  +91 98765 43210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent-yellow shrink-0" />
                <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)]">
                  info@taxconsult.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-accent-yellow shrink-0" />
                <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.7)]">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-[rgba(248,250,252,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter font-normal text-sm text-[rgba(248,250,252,0.5)] text-center md:text-left">
            © 2024 TaxConsult. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-inter font-normal text-sm text-[rgba(248,250,252,0.5)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter font-normal text-sm text-[rgba(248,250,252,0.5)] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
