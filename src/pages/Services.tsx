import { Check, FileText, Calculator, Building2, Shield, Award, FileCheck } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';

export default function Services() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="relative h-[450px] bg-gradient-to-r from-[#141F38] to-[#2D3853] mt-[69px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-[52px] z-10">
            <Badge>Our Services</Badge>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 top-[104px] w-[803px] font-inter font-bold text-[48px] leading-[58px] text-center text-neutral-100 z-10">
            Comprehensive Business & Tax
            <br />
            Solutions
          </h1>

          <p className="absolute left-1/2 -translate-x-1/2 top-[234px] w-[720px] font-inter font-normal text-[18px] leading-[22px] text-center text-[rgba(248,250,252,0.7)] z-10">
            From tax filing to business registration, we provide end-to-end services to help your business stay compliant and grow.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-[160px] z-0">
            <WaveDivider />
          </div>
        </section>

        {/* Services Detail Sections */}
        <section className="pt-[84px] pb-[68px]">
          {/* GST Services */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[28px]">
                <FileText size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                GST Services
              </h2>
              <p className="w-[485px] font-inter font-normal text-[16px] leading-[22px] text-neutral-500 mb-[14px]">
                Complete GST solutions from registration to return filing and compliance management.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="absolute left-[683px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'GST Registration',
                  'GST Return Filing (GSTR-1, GSTR-3B, Annual)',
                  'GST Reconciliation',
                  'GST Audit & Assessment',
                  'E-Way Bill Generation',
                  'Input Tax Credit Management',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Income Tax Services */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'Income Tax Return Filing',
                  'Tax Planning & Advisory',
                  'TDS Filing & Compliance',
                  'Tax Assessment Support',
                  'Capital Gains Calculation',
                  'Form 16 Generation',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-[833px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Calculator size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Income Tax Services
              </h2>
              <p className="w-[494px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                Comprehensive income tax services for individuals, businesses, and corporations.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Business Registration */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Building2 size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Business Registration Services
              </h2>
              <p className="w-[453.51px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                End-to-end business registration and incorporation services.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="absolute left-[683px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'Company Incorporation',
                  'Partnership Firm Registration',
                  'LLP Registration',
                  'Trade License',
                  'MSME Registration',
                  'Startup India Registration',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Licensing & Compliance */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'ROC Compliance',
                  'Annual Filings',
                  'FSSAI License',
                  'Import Export Code',
                  'Professional Tax Registration',
                  'Shops & Establishment License',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-[833px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Shield size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Licensing & Compliance Services
              </h2>
              <p className="w-[467px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                Stay compliant with all statutory and regulatory requirements.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Trademark Services */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Award size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Trademark & IP Services
              </h2>
              <p className="w-[489.48px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                Protect your brand identity with our intellectual property services.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="absolute left-[683px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'Trademark Registration',
                  'Trademark Search',
                  'Logo Design Assistance',
                  'Trademark Renewal',
                  'Opposition Handling',
                  'Copyright Registration',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accounting Services */}
          <div className="relative mb-[94px]">
            <div className="absolute left-[113px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'Bookkeeping Services',
                  'Financial Statements',
                  'MIS Reporting',
                  'Payroll Processing',
                  'Cash Flow Management',
                  'Budget Preparation',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-[813px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <Calculator size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Accounting Services
              </h2>
              <p className="w-[508.31px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                Professional accounting and bookkeeping services for your business.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Audit Services */}
          <div className="relative">
            <div className="absolute left-[113px] top-0">
              <div className="w-[64px] h-[64px] bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-[24px]">
                <FileCheck size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-[30px] leading-[36px] text-neutral-900 mb-[16px]">
                Audit Services
              </h2>
              <p className="w-[478px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mb-[14px]">
                Comprehensive audit services by certified professionals.
              </p>
              <button className="w-[135.16px] h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px]">
                <span className="font-inter font-semibold text-[14px] leading-[17px] text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="absolute left-[683px] top-0 w-[644px] h-[234px] bg-white border-[0.8px] border-neutral-400 shadow-[0px_2px_2px_-2px_rgba(15,23,41,0.1),0px_4px_6px_-1px_rgba(15,23,41,0.1)] rounded-2xl p-[30px]">
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-neutral-900 mb-[22px]">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
                {[
                  'Statutory Audit',
                  'Internal Audit',
                  'Tax Audit',
                  'GST Audit',
                  'Stock Audit',
                  'Management Audit',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check size={20} className="text-accent-yellow flex-shrink-0" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-[14px] leading-[17px] text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-[380px] pb-[68px]">
          <div className="text-center">
            <h2 className="w-[462px] font-inter font-bold text-[36px] leading-[44px] text-neutral-900 mx-auto">
              Need a Custom Solution?
            </h2>
            <p className="w-[840px] font-inter font-normal text-[16px] leading-[19px] text-neutral-500 mx-auto mt-[24px]">
              Every business is unique. Contact us to discuss your specific requirements and get a tailored solution.
            </p>
            <button className="w-[307px] h-[48px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-[8px] mx-auto mt-[32px]">
              <span className="font-inter font-semibold text-[16px] leading-[19px] text-neutral-900">
                Schedule a Consultation
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
