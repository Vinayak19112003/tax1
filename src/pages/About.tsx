import { Users, HeartHandshake, Target, Shield } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';

export default function About() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[450px] bg-hero-gradient pt-28 pb-32 px-4 flex flex-col items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <Badge>About Us</Badge>

          <h1 className="w-full max-w-[791px] font-inter font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] text-neutral-100 mt-6 mb-8">
            Your Trusted Partner Since 2008
          </h1>

          <p className="w-full max-w-[738px] font-inter font-normal text-base md:text-lg text-[rgba(248,250,252,0.7)]">
            Over 15 years of excellence in tax consulting, accounting, and business advisory services.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[160px] z-0 pointer-events-none">
          <WaveDivider />
        </div>
      </section>

      <div className="container mx-auto max-w-[1440px] px-4 lg:px-[113px]">
        {/* Our Story Section */}
        <section className="py-12 lg:py-[68px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1">
              <Badge>Our Story</Badge>
              <h2 className="w-full max-w-[609px] font-inter font-bold text-3xl lg:text-[36px] leading-tight lg:leading-[44px] text-neutral-900 mt-4 mb-6">
                Building Trust Through Excellence
              </h2>
              <div className="space-y-6 text-neutral-500 font-inter font-normal text-base leading-relaxed">
                <p>
                  Founded in 2008, TaxPro began with a simple mission: to simplify business compliance for Indian entrepreneurs. What started as a small practice has grown into a comprehensive consulting firm serving over 5000 clients across India.
                </p>
                <p>
                  Our team of experienced Chartered Accountants and tax professionals brings together decades of expertise in taxation, accounting, and business advisory. We understand the challenges faced by businesses and provide tailored solutions that drive growth.
                </p>
                <p>
                  Today, we continue to uphold our commitment to excellence, integrity, and client satisfaction. Our technology-driven approach ensures efficient service delivery while maintaining the personal touch that sets us apart.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:mt-12">
              <div className="flex flex-wrap gap-8">
                <div className="flex-1 min-w-[140px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center p-4">
                  <div className="font-inter font-bold text-3xl lg:text-[36px] text-accent-yellow">15+</div>
                  <div className="font-inter font-normal text-sm text-neutral-500 mt-2 text-center">Years Experience</div>
                </div>
                <div className="flex-1 min-w-[140px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center p-4">
                  <div className="font-inter font-bold text-3xl lg:text-[36px] text-accent-yellow">5000+</div>
                  <div className="font-inter font-normal text-sm text-neutral-500 mt-2 text-center">Happy Clients</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8">
                <div className="flex-1 min-w-[140px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center p-4">
                  <div className="font-inter font-bold text-3xl lg:text-[36px] text-accent-yellow">25+</div>
                  <div className="font-inter font-normal text-sm text-neutral-500 mt-2 text-center">Team Members</div>
                </div>
                <div className="flex-1 min-w-[140px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center p-4">
                  <div className="font-inter font-bold text-3xl lg:text-[36px] text-accent-yellow">50K+</div>
                  <div className="font-inter font-normal text-sm text-neutral-500 mt-2 text-center">Fillings Done</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 lg:py-[68px]">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge>Our Values</Badge>
            <h2 className="font-inter font-bold text-3xl lg:text-[36px] text-neutral-900 mt-4 mb-4">
              What Drives Us
            </h2>
            <p className="font-inter font-normal text-base text-neutral-500 max-w-[515px]">
              Our core values guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-neutral-400 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-3">
                Excellence
              </h3>
              <p className="font-inter font-normal text-sm text-neutral-500">
                We strive for excellence in every service we provide, ensuring the highest quality standards.
              </p>
            </div>

            <div className="bg-white border border-neutral-400 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-3">
                Client-Centric
              </h3>
              <p className="font-inter font-normal text-sm text-neutral-500">
                Your success is our priority. We work closely with you to understand and meet your needs.
              </p>
            </div>

            <div className="bg-white border border-neutral-400 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-3">
                Integrity
              </h3>
              <p className="font-inter font-normal text-sm text-neutral-500">
                We maintain the highest ethical standards and transparency in all our dealings.
              </p>
            </div>

            <div className="bg-white border border-neutral-400 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-3">
                Commitment
              </h3>
              <p className="font-inter font-normal text-sm text-neutral-500">
                We are committed to delivering timely solutions and building long-term relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-12 lg:py-[68px]">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge>Our Journey</Badge>
            <h2 className="font-inter font-bold text-3xl lg:text-[36px] text-neutral-900 mt-4 mb-4">
              Milestones We're Proud Of
            </h2>
          </div>

          <div className="relative max-w-[800px] mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {[
                { year: '2008', title: 'Founded', desc: 'Started with a vision to simplify business compliance.' },
                { year: '2012', title: '500+ Clients', desc: 'Reached our first major client milestone.' },
                { year: '2016', title: 'Pan-India Expansion', desc: 'Extended services across multiple states.' },
                { year: '2020', title: 'Digital Transformation', desc: 'Launched online consultation and filing services.' },
                { year: '2024', title: '5000+ Clients', desc: 'Trusted by businesses across India.' },
              ].map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Content */}
                  <div className={`w-full md:w-[50%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter font-normal text-sm text-neutral-500">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-[rgba(245,159,10,0.1)] border-4 border-white rounded-full flex items-center justify-center z-10 shrink-0">
                    <span className="font-inter font-bold text-sm text-accent-yellow">{item.year}</span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[50%]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
