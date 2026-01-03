import { Check, FileText, Calculator, Building2, Shield, Award, FileCheck } from 'lucide-react';
import WaveDivider from '../components/sections/WaveDivider';
import Badge from '../components/ui/Badge';

export default function Services() {
  const services = [
    {
      title: "GST Services",
      description: "Complete GST solutions from registration to return filing and compliance management.",
      icon: FileText,
      items: [
        'GST Registration',
        'GST Return Filing (GSTR-1, GSTR-3B, Annual)',
        'GST Reconciliation',
        'GST Audit & Assessment',
        'E-Way Bill Generation',
        'Input Tax Credit Management',
      ]
    },
    {
      title: "Income Tax Services",
      description: "Comprehensive income tax services for individuals, businesses, and corporations.",
      icon: Calculator,
      items: [
        'Income Tax Return Filing',
        'Tax Planning & Advisory',
        'TDS Filing & Compliance',
        'Tax Assessment Support',
        'Capital Gains Calculation',
        'Form 16 Generation',
      ]
    },
    {
      title: "Business Registration Services",
      description: "End-to-end business registration and incorporation services.",
      icon: Building2,
      items: [
        'Company Incorporation',
        'Partnership Firm Registration',
        'LLP Registration',
        'Trade License',
        'MSME Registration',
        'Startup India Registration',
      ]
    },
    {
      title: "Licensing & Compliance Services",
      description: "Stay compliant with all statutory and regulatory requirements.",
      icon: Shield,
      items: [
        'ROC Compliance',
        'Annual Filings',
        'FSSAI License',
        'Import Export Code',
        'Professional Tax Registration',
        'Shops & Establishment License',
      ]
    },
    {
      title: "Trademark & IP Services",
      description: "Protect your brand identity with our intellectual property services.",
      icon: Award,
      items: [
        'Trademark Registration',
        'Trademark Search',
        'Logo Design Assistance',
        'Trademark Renewal',
        'Opposition Handling',
        'Copyright Registration',
      ]
    },
    {
      title: "Accounting Services",
      description: "Professional accounting and bookkeeping services for your business.",
      icon: Calculator,
      items: [
        'Bookkeeping Services',
        'Financial Statements',
        'MIS Reporting',
        'Payroll Processing',
        'Cash Flow Management',
        'Budget Preparation',
      ]
    },
    {
      title: "Audit Services",
      description: "Comprehensive audit services by certified professionals.",
      icon: FileCheck,
      items: [
        'Statutory Audit',
        'Internal Audit',
        'Tax Audit',
        'GST Audit',
        'Stock Audit',
        'Management Audit',
      ]
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[450px] bg-gradient-to-r from-[#141F38] to-[#2D3853] pt-28 pb-32 px-4 flex flex-col items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <Badge>Our Services</Badge>

          <h1 className="w-full max-w-[803px] font-inter font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] text-neutral-100 mt-6 mb-8">
            Comprehensive Business & Tax
            <br className="hidden md:block" />
            Solutions
          </h1>

          <p className="w-full max-w-[720px] font-inter font-normal text-base md:text-lg text-[rgba(248,250,252,0.7)]">
            From tax filing to business registration, we provide end-to-end services to help your business stay compliant and grow.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[160px] z-0 pointer-events-none">
          <WaveDivider />
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[113px] py-16 lg:py-[84px]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-[66px] mb-16 lg:mb-24 last:mb-0`}
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="w-16 h-16 bg-[rgba(245,159,10,0.1)] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <service.icon size={32} className="text-accent-yellow" strokeWidth={2.67} />
              </div>
              <h2 className="font-inter font-bold text-2xl lg:text-[30px] leading-tight text-neutral-900 mb-4">
                {service.title}
              </h2>
              <p className="font-inter font-normal text-base text-neutral-500 mb-6 max-w-[500px] mx-auto lg:mx-0">
                {service.description}
              </p>
              <button className="w-full sm:w-auto px-6 h-[40px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl flex items-center justify-center gap-2 mx-auto lg:mx-0">
                <span className="font-inter font-semibold text-sm text-neutral-900">
                  Get Started
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Content Card */}
            <div className="w-full lg:w-[644px] bg-white border border-neutral-200 shadow-sm rounded-2xl p-6 lg:p-[30px]">
              <h3 className="font-inter font-semibold text-lg text-neutral-900 mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-accent-yellow flex-shrink-0 mt-0.5" strokeWidth={1.67} />
                    <span className="font-inter font-normal text-sm text-neutral-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Custom Solution Section */}
        <section className="pt-24 pb-8 space-y-8 text-center">
          <h2 className="font-inter font-bold text-3xl lg:text-[36px] text-neutral-900">
            Need a Custom Solution?
          </h2>
          <p className="font-inter font-normal text-base text-neutral-500 max-w-[840px] mx-auto">
            Every business is unique. Contact us to discuss your specific requirements and get a tailored solution.
          </p>
          <button className="w-full sm:w-auto px-8 h-[48px] bg-gradient-to-r from-[#F59F0A] to-[#FBC02D] rounded-xl inline-flex items-center justify-center gap-2">
            <span className="font-inter font-semibold text-base text-neutral-900">
              Schedule a Consultation
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33337 8H12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="#0F1729" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </section>
      </div>
    </div>
  );
}
