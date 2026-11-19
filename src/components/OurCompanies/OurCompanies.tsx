import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Pill, FlaskConical, ArrowRight, CheckCircle2, ShieldCheck, Factory } from 'lucide-react';

import heroReactorCleanroom from '../../assets/hero_reactor_cleanroom.jpg';
import plantAreaEnhanced from '../../assets/03_plant_area_enhanced.png';

const companies = [
  {
    name: 'Quest Pharma',
    legalName: 'Quest Pharma (A Division of Quest Group)',
    tagline: 'Active Pharmaceutical Ingredients (APIs) & Bulk Drug Synthesis',
    description:
      'Quest Pharma is the core API manufacturing arm of Quest Group. Operating under strict cGMP and WHO-GMP protocols, Quest Pharma delivers high-purity Active Pharmaceutical Ingredients across diverse therapeutic categories with rigorous impurity profiling, micronization, and complete regulatory support.',
    highlights: [
      'Commercial API batch manufacturing & cGMP scale-up',
      'Cleanroom processing suites & micronization technology',
      'Comprehensive DMF & technical regulatory packages',
      'Manufacturing facility in Hyderabad, Telangana',
    ],
    link: '/quest-pharma',
    icon: Pill,
    gradient: 'from-teal-500 to-cyan-600',
    accentColor: 'text-teal-600',
    badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
    borderColor: 'border-teal-200/80 hover:border-teal-400',
    bgCard: 'bg-gradient-to-br from-white via-teal-50/20 to-white',
    image: heroReactorCleanroom,
  },
  {
    name: 'Quest ChemTech',
    legalName: 'Quest ChemTech (A Division of Quest Group)',
    tagline: 'Advanced Pharmaceutical Intermediates & Custom Chemical Synthesis',
    description:
      'Quest ChemTech is the specialty chemical and intermediate synthesis division of Quest Group. Specializing in complex multi-step organic chemistry, advanced Bulk Drug APIs, and custom synthesis (CRAMS), Quest ChemTech provides high-yield chemical synthesis for pharmaceutical innovators globally.',
    highlights: [
      'Multi-step organic intermediate synthesis & KSMs',
      'Heavy reactor trains (Glass-Lined & SS-316 up to 50,000+ L)',
      'Cryogenic, catalytic hydrogenation & hazardous reactions',
      'Contract Research & Manufacturing Services (CRAMS)',
    ],
    link: '/quest-chemtech',
    icon: FlaskConical,
    gradient: 'from-blue-500 to-indigo-600',
    accentColor: 'text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
    borderColor: 'border-blue-200/80 hover:border-blue-400',
    bgCard: 'bg-gradient-to-br from-white via-blue-50/20 to-white',
    image: plantAreaEnhanced,
  },
];

export default function OurCompanies() {
  return (
    <section id="companies" className="relative py-14 sm:py-20 lg:py-24 bg-slate-50/70 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span>Our Group Companies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Our Companies:{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Quest Pharma &amp; Quest ChemTech
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating under the <strong>Quest Group</strong> umbrella, our two dedicated organizations provide a fully integrated pharmaceutical chemical pipeline — from key starting materials and advanced intermediates to commercial cGMP Active Pharmaceutical Ingredients.
          </p>
        </motion.div>

        {/* Company Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-3xl border ${company.borderColor} ${company.bgCard} p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top card bar with image preview & icon */}
                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden mb-6 border border-slate-200/60 shadow-inner">
                    <img
                      src={company.image}
                      alt={company.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm`}>
                        <Icon className={`w-3.5 h-3.5 ${company.accentColor}`} />
                        {company.name}
                      </span>
                    </div>

                    {/* Bottom tagline */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                        {company.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      {company.legalName}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {company.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-200/60">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Core Specializations:
                    </p>
                    {company.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 ${company.accentColor} shrink-0 mt-0.5`} />
                        <span className="text-xs font-medium text-slate-700 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Factory className="w-3.5 h-3.5 text-slate-400" />
                    <span>WHO-GMP / cGMP Standards</span>
                  </div>
                  <Link
                    to={company.link}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs tracking-wide shadow-md group-hover:scale-105 transition-all duration-200"
                  >
                    <span>Explore {company.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
