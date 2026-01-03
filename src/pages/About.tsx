import { Users, HeartHandshake, Target, Shield } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';


export default function About() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="relative h-[450px] bg-gradient-to-r from-[#141F38] to-[#2D3853]">
          <div className="absolute left-1/2 -translate-x-1/2 top-[94px] z-10">
            <Badge>About Us</Badge>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 top-[154px] w-[791px] font-inter font-bold text-[48px] leading-[58px] text-center text-neutral-100 z-10">
            Your Trusted Partner Since 2008
          </h1>

          <p className="absolute left-1/2 -translate-x-1/2 top-[226px] w-[738.78px] font-inter font-normal text-[18px] leading-[22px] text-center text-[rgba(248,250,252,0.7)] z-10">
            Over 15 years of excellence in tax consulting, accounting, and business advisory services.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-[160px] z-0">
            <WaveDivider />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="pt-[21px] pb-[68px]">
          <div className="flex">
            <div className="w-[657px]">
              <div className="ml-[113px]">
                <Badge>Our Story</Badge>
                <h2 className="w-[609px] font-inter font-bold text-[36px] leading-[44px] text-neutral-900 mt-[16px]">
                  Building Trust Through Excellence
                </h2>
                <p className="w-[657px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mt-[26px]">
                  Founded in 2008, TaxPro began with a simple mission: to simplify business compliance for Indian entrepreneurs. What started as a small practice has grown into a comprehensive consulting firm serving over 5000 clients across India.
                </p>
                <p className="w-[657px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mt-[21px]">
                  Our team of experienced Chartered Accountants and tax professionals brings together decades of expertise in taxation, accounting, and business advisory. We understand the challenges faced by businesses and provide tailored solutions that drive growth.
                </p>
                <p className="w-[648px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mt-[21px]">
                  Today, we continue to uphold our commitment to excellence, integrity, and client satisfaction. Our technology-driven approach ensures efficient service delivery while maintaining the personal touch that sets us apart.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] ml-auto mr-[113px]">
              <div className="flex gap-[32px]">
                <div className="w-[230px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center">
                  <div className="font-inter font-bold text-[36px] leading-[44px] text-accent-yellow">15+</div>
                  <div className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mt-[8px]">Years Experience</div>
                </div>
                <div className="w-[230px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center">
                  <div className="font-inter font-bold text-[36px] leading-[44px] text-accent-yellow">5000+</div>
                  <div className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mt-[8px]">Happy Clients</div>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <div className="w-[230px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center">
                  <div className="font-inter font-bold text-[36px] leading-[44px] text-accent-yellow">25+</div>
                  <div className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mt-[8px]">Team Members</div>
                </div>
                <div className="w-[230px] h-[116px] bg-[#F8F6F2] border border-neutral-400 rounded-xl flex flex-col items-center justify-center">
                  <div className="font-inter font-bold text-[36px] leading-[44px] text-accent-yellow">50K+</div>
                  <div className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 mt-[8px]">Fillings Done</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-[68px]">
          <div className="flex flex-col items-center">
            <Badge>Our Values</Badge>
            <h2 className="w-[275px] font-inter font-bold text-[36px] leading-[44px] text-center text-neutral-900 mt-[16px]">
              What Drives Us
            </h2>
            <p className="w-[515px] font-inter font-normal text-[16px] leading-[19px] text-center text-neutral-500 mt-[16px]">
              Our core values guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="flex gap-[22px] justify-center mt-[64px]">
            <div className="w-[289px] h-[254px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_4px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[24px]">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Users size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 text-center mb-[13px]">
                Excellence
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 text-center">
                We strive for excellence in every service we provide, ensuring the highest quality standards.
              </p>
            </div>

            <div className="w-[289px] h-[254px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_4px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[24px]">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <HeartHandshake size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 text-center mb-[13px]">
                Client-Centric
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 text-center">
                Your success is our priority. We work closely with you to understand and meet your needs.
              </p>
            </div>

            <div className="w-[289px] h-[254px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_4px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[24px]">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Target size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 text-center mb-[13px]">
                Integrity
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 text-center">
                We maintain the highest ethical standards and transparency in all our dealings.
              </p>
            </div>

            <div className="w-[289px] h-[254px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_4px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[24px]">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Shield size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 text-center mb-[13px]">
                Commitment
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500 text-center">
                We are committed to delivering timely solutions and building long-term relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-[68px]">
          <div className="flex flex-col items-center">
            <Badge>Our Journey</Badge>
            <h2 className="w-[474px] font-inter font-bold text-[36px] leading-[44px] text-center text-neutral-900 mt-[16px]">
              Milestones We're Proud Of
            </h2>
          </div>

          <div className="relative mt-[64px] ml-[113px] mr-[113px]">
            <div className="absolute left-[280px] top-0 bottom-[293px] w-[2px] bg-neutral-300" />

            {/* Timeline Items */}
            <div className="space-y-[96px]">
              <div className="relative">
                <div className="absolute left-[248px] w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] border-4 border-neutral-50 rounded-full flex items-center justify-center">
                  <span className="font-inter font-bold text-[14px] leading-[17px] text-accent-yellow">2008</span>
                </div>
                <div className="ml-[336px]">
                  <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mb-[8px]">Founded</h3>
                  <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                    Started with a vision to simplify business compliance
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[248px] w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] border-4 border-neutral-50 rounded-full flex items-center justify-center">
                  <span className="font-inter font-bold text-[14px] leading-[17px] text-accent-yellow">2012</span>
                </div>
                <div className="ml-[336px]">
                  <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mb-[8px]">500+ Clients</h3>
                  <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                    Reached our first major client milestone
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[248px] w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] border-4 border-neutral-50 rounded-full flex items-center justify-center">
                  <span className="font-inter font-bold text-[14px] leading-[17px] text-accent-yellow">2016</span>
                </div>
                <div className="ml-[336px]">
                  <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mb-[8px]">Pan-India Expansion</h3>
                  <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                    Extended services across multiple states
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[248px] w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] border-4 border-neutral-50 rounded-full flex items-center justify-center">
                  <span className="font-inter font-bold text-[14px] leading-[17px] text-accent-yellow">2020</span>
                </div>
                <div className="ml-[336px]">
                  <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mb-[8px]">Digital Transformation</h3>
                  <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                    Launched online consultation and filing services
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[248px] w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] border-4 border-neutral-50 rounded-full flex items-center justify-center">
                  <span className="font-inter font-bold text-[14px] leading-[17px] text-accent-yellow">2024</span>
                </div>
                <div className="ml-[336px]">
                  <h3 className="font-inter font-semibold text-[20px] leading-[24px] text-neutral-900 mb-[8px]">5000+ Clients</h3>
                  <p className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                    Trusted by businesses across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full h-[332px] bg-gradient-to-r from-[#141F38] to-[#2D3853] -mx-[calc((100vw-1440px)/2)] flex items-center justify-center">
          <div className="text-center">
            <h2 className="w-[442px] font-inter font-bold text-[36px] leading-[44px] text-neutral-100 mx-auto">
              Ready to Work With Us?
            </h2>
            <p className="w-[621px] font-inter font-normal text-[18px] leading-[22px] text-[rgba(248,250,252,0.7)] mx-auto mt-[24px]">
              Join thousands of businesses who trust us with their compliance needs.
            </p>
            <button className="w-[184.5px] h-[48px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] shadow-[0px_4px_14px_rgba(245,159,10,0.3)] rounded-xl flex items-center justify-center gap-[8px] mx-auto mt-[32px]">
              <span className="font-inter font-semibold text-[16px] leading-[19px] text-neutral-900">
                Get in Touch
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
