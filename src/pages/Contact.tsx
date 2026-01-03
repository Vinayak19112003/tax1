import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';

export default function Contact() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[450px] bg-hero-gradient pt-28 pb-32 px-4 flex flex-col items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <Badge>Contact Us</Badge>

          <h1 className="w-full max-w-[634px] font-inter font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] text-neutral-100 mt-6 mb-8">
            Let's Start a Conversation
          </h1>

          <p className="w-full max-w-[700px] font-inter font-normal text-base md:text-lg text-[rgba(248,250,252,0.7)]">
            Get in touch with our expert team for a free consultation on your business needs.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[160px] z-0 pointer-events-none">
          <WaveDivider />
        </div>
      </section>

      <div className="container mx-auto max-w-[1440px] px-4 lg:px-[113px]">
        {/* Contact Section */}
        <section className="py-12 lg:py-[68px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-inter font-bold text-2xl lg:text-[24px] text-neutral-900 mb-6">
                Get in Touch
              </h2>
              <p className="font-inter font-normal text-base text-neutral-500 mb-8 max-w-[415px]">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-yellow" strokeWidth={1.67} />
                  </div>
                  <div>
                    <h3 className="font-inter font-medium text-base text-neutral-900 mb-1">
                      Phone
                    </h3>
                    <a href="tel:+919876543210" className="font-['DM_Sans'] font-normal text-sm text-neutral-500 hover:text-accent-yellow transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-yellow" strokeWidth={1.67} />
                  </div>
                  <div>
                    <h3 className="font-inter font-medium text-base text-neutral-900 mb-1">
                      Email
                    </h3>
                    <a href="mailto:info@taxpro.com" className="font-['DM_Sans'] font-normal text-sm text-neutral-500 hover:text-accent-yellow transition-colors">
                      info@taxpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-yellow" strokeWidth={1.67} />
                  </div>
                  <div>
                    <h3 className="font-inter font-medium text-base text-neutral-900 mb-1">
                      Address
                    </h3>
                    <p className="font-inter font-normal text-sm text-neutral-500 max-w-[350px]">
                      123 Business Center, Anna Nagar, Chennai - 600040
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgba(245,159,10,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-accent-yellow" strokeWidth={1.67} />
                  </div>
                  <div>
                    <h3 className="font-inter font-medium text-base text-neutral-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="font-inter font-normal text-sm text-neutral-500">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-1/2">
              <form className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block font-inter font-medium text-sm text-neutral-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-inter font-medium text-sm text-neutral-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block font-inter font-medium text-sm text-neutral-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="mobile" className="block font-inter font-medium text-sm text-neutral-900 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="+91 98765 43210"
                    className="w-full h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-colors"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block font-inter font-medium text-sm text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full h-32 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-button-gradient rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <span className="font-inter font-semibold text-base text-neutral-900">
                    Send Message
                  </span>
                  <Send size={18} className="text-neutral-900" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
