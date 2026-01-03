import { Check, FileText, Calculator, Building2, Shield, Award, FileCheck, Users, Clock, Target, DollarSign, HeartHandshake } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import ServiceCard from '../components/ui/ServiceCard';
import StatCard from '../components/ui/StatCard';
import FeatureCard from '../components/ui/FeatureCard';
import Badge from '../components/ui/Badge';


export default function Home() {
  return (
    <div className="w-full bg-neutral-50 overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative min-h-[600px] lg:h-[900px] bg-hero-gradient flex items-center pt-20 lg:pt-0">
          <div className="container mx-auto px-4 lg:px-[113px] z-10 flex flex-col justify-center h-full">

            <div className="w-fit mb-6 lg:mb-8">
              <div className="px-4 py-2 bg-[rgba(245,159,10,0.2)] rounded-[30px] flex items-center justify-center">
                <span className="font-inter font-medium text-sm text-accent-yellow">
                  Trusted Tax & Business Consultants
                </span>
              </div>
            </div>

            <h1 className="font-inter font-bold text-3xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[73px] text-white max-w-[818px] mb-6">
              Your Partner for <span className="text-accent-yellow">Financial Success</span> & Business Growth
            </h1>

            <p className="font-inter font-normal text-base md:text-lg lg:text-[20px] leading-relaxed text-[rgba(248,250,252,0.7)] max-w-[782px] mb-8 lg:mb-12">
              Comprehensive tax, accounting, and business registration services tailored for startups, SMEs, and enterprises. Let our experts handle your compliance while you focus on growth.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8 lg:mb-12">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-[1.67px] border-accent-yellow flex items-center justify-center">
                  <Check size={12} className="text-accent-yellow" strokeWidth={2.5} />
                </div>
                <span className="font-inter font-medium text-sm text-white">
                  Expert CA & Tax Consultants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-[1.67px] border-accent-yellow flex items-center justify-center">
                  <Check size={12} className="text-accent-yellow" strokeWidth={2.5} />
                </div>
                <span className="font-inter font-medium text-sm text-white">
                  15+ Years of Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-[1.67px] border-accent-yellow flex items-center justify-center">
                  <Check size={12} className="text-accent-yellow" strokeWidth={2.5} />
                </div>
                <span className="font-inter font-medium text-sm text-white">
                  5000+ Happy Clients
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-[294px] h-[56px] bg-button-gradient rounded-[15px] flex items-center justify-center gap-2">
                <span className="font-inter font-semibold text-lg text-black">
                  Get Free Consultation
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="w-full sm:w-[224px] h-[56px] border-2 border-[rgba(248,250,252,0.3)] rounded-xl flex items-center justify-center">
                <span className="font-['DM_Sans'] font-medium text-lg text-neutral-100">
                  Explore Services
                </span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[160px] z-0 pointer-events-none">
            <WaveDivider />
          </div>
        </section>

        {/* Services Section */}
        <section className="pt-[60px] lg:pt-[112px] pb-[68px] px-4">
          <div className="flex flex-col items-center">
            <Badge>Our Services</Badge>
            <h2 className="w-full max-w-[581px] font-inter font-bold text-3xl lg:text-[36px] leading-[1.2] lg:leading-[44px] text-center text-neutral-900 mt-[16px]">
              Comprehensive Business Solutions
            </h2>
            <p className="w-full max-w-[659px] font-inter font-normal text-base lg:text-[16px] leading-[19px] text-center text-neutral-500 mt-[16px]">
              From tax filing to business registration, we provide end-to-end services to help your business thrive.
            </p>
          </div>

          <div className="mt-[68px] flex flex-wrap gap-x-[23px] gap-y-[32px] justify-center">
            <ServiceCard
              icon={<FileText size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="GST Services"
              description="Complete GST registration, filing, and compliance services for businesses of all sizes."
            />
            <ServiceCard
              icon={<Calculator size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="Income Tax Services"
              description="Expert income tax planning, filing, and advisory services for individuals and businesses."
            />
            <ServiceCard
              icon={<Building2 size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="Business Registration"
              description="Company incorporation, trade license, and all business registration requirements."
            />
            <ServiceCard
              icon={<Shield size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="Licensing & Compliance"
              description="Statutory licenses, ROC compliance, and regulatory requirements management."
            />
            <ServiceCard
              icon={<Award size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="Trademark Services"
              description="Trademark registration and intellectual property protection for your brand."
            />
            <ServiceCard
              icon={<FileCheck size={28} className="text-accent-yellow" strokeWidth={2.33} />}
              title="Audit Services"
              description="Statutory, internal, tax, and GST audit services by certified professionals."
            />
          </div>

          <div className="flex justify-center mt-[48px]">
            <button className="w-[218px] h-[48px] bg-button-gradient rounded-xl flex items-center justify-center gap-[9px]">
              <span className="font-inter font-semibold text-[16px] leading-[24px] text-black">
                View All Services
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-[68px] px-4">
          <div className="flex flex-col items-center">
            <Badge>Why Choose Us</Badge>
            <h2 className="w-full max-w-[610px] font-inter font-bold text-3xl lg:text-[36px] leading-[1.2] lg:leading-[44px] text-center text-black mt-[16px]">
              Your Trusted Partner For Business Success
            </h2>
            <p className="w-full max-w-[597px] font-inter font-normal text-base lg:text-[16px] leading-[19px] text-center text-neutral-500 mt-[20px]">
              With over 15 years of experience in tax consulting and business advisory, we have helped thousands of businesses navigate complex regulatory requirements while focusing on their growth.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[24px] mt-[64px] px-4">
            <StatCard value="15+" label="Years Experience" />
            <StatCard value="5000+" label="Happy Clients" />
            <StatCard value="100%" label="Satisfaction" />
          </div>

          <div className="mt-[48px] flex flex-wrap gap-[24px] lg:gap-[75px] justify-center">
            <FeatureCard
              icon={<Award size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="Expert Team"
              description="Certified Chartered Accountants with 15+ years of industry experience."
            />
            <FeatureCard
              icon={<Clock size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="Timely Delivery"
              description="We ensure all filings and registrations are completed on schedule."
            />
            <FeatureCard
              icon={<Target size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="100% Compliance"
              description="Stay worry-free with our comprehensive compliance management."
            />
            <FeatureCard
              icon={<DollarSign size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="Cost Effective"
              description="Premium services at competitive prices tailored to your budget."
            />
            <FeatureCard
              icon={<Users size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="5000+ Clients"
              description="Trusted by thousands of businesses across India."
            />
            <FeatureCard
              icon={<HeartHandshake size={24} className="text-accent-yellow" strokeWidth={2.67} />}
              title="Dedicated Support"
              description="Personal account manager for all your queries and concerns."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-[1440px] text-center">
            <h2 className="w-full max-w-[775px] mx-auto font-inter font-bold text-3xl lg:text-[48px] leading-[1.2] lg:leading-[58px] text-neutral-100">
              Ready to Simplify Your <span className="text-accent-yellow">Business</span>
              <br className="hidden md:block" />
              <span className="text-accent-yellow"> Compliance?</span>
            </h2>
            <p className="w-full max-w-[763px] mx-auto font-inter font-normal text-base lg:text-[18px] leading-[22px] text-[rgba(248,250,252,0.7)] mt-[24px] lg:mt-[40px]">
              Get a free consultation with our expert team. We'll analyze your requirements and provide tailored solutions for your business.
            </p>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-[30px] justify-center mt-[32px] lg:mt-[44px]">
              <button className="w-full md:w-auto px-8 h-[56px] bg-button-gradient shadow-[0px_4px_14px_rgba(245,159,10,0.3)] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-['DM_Sans'] font-semibold text-[18px] leading-[28px] text-neutral-900">
                  Schedule Free Consultation
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="w-full md:w-auto px-8 h-[56px] border-2 border-[rgba(248,250,252,0.3)] rounded-xl flex items-center justify-center gap-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.63 13.2134 14.6133C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56666C2.33336 6.82745 1.6322 4.84731 1.41337 2.78666C1.39671 2.60229 1.41862 2.41649 1.4777 2.24107C1.53679 2.06564 1.63175 1.90444 1.75655 1.76773C1.88134 1.63102 2.03324 1.52179 2.20256 1.44698C2.37189 1.37216 2.55493 1.33349 2.74004 1.33333H4.74004C5.06357 1.33013 5.37723 1.4447 5.62254 1.65568C5.86786 1.86665 6.02809 2.15961 6.07337 2.48C6.15779 3.12003 6.31434 3.74847 6.54004 4.35333C6.62973 4.59193 6.64915 4.85127 6.59597 5.10058C6.5428 5.34989 6.41928 5.57873 6.24004 5.76L5.39337 6.60666C6.34241 8.27568 7.72436 9.65763 9.39337 10.6067L10.24 9.76C10.4213 9.58076 10.6501 9.45724 10.8994 9.40406C11.1488 9.35089 11.4081 9.37031 11.6467 9.46C12.2516 9.6857 12.88 9.84225 13.52 9.92666C13.8439 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.9533 14.6667 11.28Z" stroke="#F8FAFC" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['DM_Sans'] font-medium text-[18px] leading-[28px] text-neutral-100">
                  Call +91 98765 43210
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
