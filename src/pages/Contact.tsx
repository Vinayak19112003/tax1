import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';

export default function Contact() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="relative h-[450px] bg-gradient-to-r from-[#141F38] to-[#2D3853] mt-[48px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-[77px] z-10">
            <Badge>Contact Us</Badge>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 top-[137px] w-[634px] font-inter font-bold text-[48px] leading-[58px] text-center text-neutral-100 z-10">
            Let's Start a Conversation
          </h1>

          <p className="absolute left-1/2 -translate-x-1/2 top-[209px] w-[700px] font-inter font-normal text-[18px] leading-[22px] text-center text-[rgba(248,250,252,0.7)] z-10">
            Get in touch with our expert team for a free consultation on your business needs.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-[160px] z-0">
            <WaveDivider />
          </div>
        </section>

        {/* Contact Section */}
        <section className="pt-[64px] pb-[68px]">
          <div className="flex">
            {/* Left Column - Contact Info */}
            <div className="w-1/2">
              <div className="ml-[113px]">
                <h2 className="font-inter font-bold text-[24px] leading-[29px] text-neutral-900 mb-[25px]">
                  Get in Touch
                </h2>
                <p className="w-[415px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[35px]">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="space-y-[28px]">
                  <div className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-accent-yellow" strokeWidth={1.67} />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-[16px] leading-[19px] text-neutral-900 mb-[7px]">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="font-['DM_Sans'] font-normal text-[14px] leading-[18px] text-neutral-500"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-accent-yellow" strokeWidth={1.67} />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-[16px] leading-[19px] text-neutral-900 mb-[7px]">
                        Email
                      </h3>
                      <a
                        href="mailto:info@taxpro.com"
                        className="font-['DM_Sans'] font-normal text-[14px] leading-[18px] text-neutral-500"
                      >
                        info@taxpro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-accent-yellow" strokeWidth={1.67} />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-[16px] leading-[19px] text-neutral-900 mb-[4px]">
                        Address
                      </h3>
                      <p className="w-[351px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                        123 Business Center, Anna Nagar, Chennai - 600040
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-accent-yellow" strokeWidth={1.67} />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-[16px] leading-[19px] text-neutral-900 mb-[4px]">
                        Working Hours
                      </h3>
                      <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-1/2">
              <div className="ml-[47px] mr-[113px]">
                <div className="flex items-center gap-[12px] mb-[8px]">
                  <div className="w-[48px] h-[48px] bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center">
                    <Send size={20} className="text-accent-yellow" strokeWidth={1.67} />
                  </div>
                  <h2 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900">
                    Send us a Message
                  </h2>
                </div>
                <p className="w-[400px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mb-[32px]">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-[24px]">
                  <div className="flex gap-[30px]">
                    <div className="flex-1">
                      <label className="block font-inter font-medium text-[14px] leading-[17px] text-neutral-900 mb-[8px]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full h-[48px] bg-neutral-50 border border-neutral-300 rounded-[10px] px-[13px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500 focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block font-inter font-medium text-[14px] leading-[17px] text-neutral-900 mb-[8px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full h-[48px] bg-neutral-50 border border-neutral-300 rounded-[10px] px-[13px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500 focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                  </div>

                  <div className="flex gap-[30px]">
                    <div className="flex-1">
                      <label className="block font-inter font-medium text-[14px] leading-[17px] text-neutral-900 mb-[8px]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full h-[48px] bg-neutral-50 border border-neutral-300 rounded-[10px] px-[13px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500 focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block font-inter font-medium text-[14px] leading-[17px] text-neutral-900 mb-[8px]">
                        Service Interested In
                      </label>
                      <select className="w-full h-[48px] bg-neutral-50 border border-neutral-300 rounded-xl px-[20px] font-inter font-normal text-[16px] leading-[19px] text-neutral-900 focus:outline-none focus:border-accent-yellow appearance-none cursor-pointer">
                        <option>Select a service</option>
                        <option>GST Services</option>
                        <option>Income Tax Services</option>
                        <option>Business Registration</option>
                        <option>Licensing & Compliance</option>
                        <option>Trademark Services</option>
                        <option>Accounting Services</option>
                        <option>Audit Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-['DM_Sans'] font-medium text-[14px] leading-[18px] text-neutral-900 mb-[8px]">
                      Message *
                    </label>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="w-full h-[118px] bg-neutral-50 border border-neutral-300 rounded-[10px] px-[12px] py-[9px] font-inter font-normal text-[14px] leading-[17px] text-neutral-500 focus:outline-none focus:border-accent-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[48px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]"
                  >
                    <span className="font-inter font-semibold text-[16px] leading-[19px] text-neutral-900">
                      Send Message
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#0F1729" strokeWidth="1.33"/>
                      <path d="M5.33337 10.6667L10.6667 5.33337M10.6667 5.33337H5.33337M10.6667 5.33337V10.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
