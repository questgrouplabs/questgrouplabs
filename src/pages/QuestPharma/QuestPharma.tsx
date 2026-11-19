import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Pill,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Factory,
  Beaker,
  FileText,
  Microscope,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { company } from '../../data/company';

import heroReactorCleanroom from '../../assets/hero_reactor_cleanroom.jpg';
import heroCinematic from '../../assets/hero_cinematic.png';

const capabilities = [
  {
    icon: Factory,
    title: 'Commercial Scale API Manufacturing',
    desc: 'Validated batch processing across multi-kilogram to commercial metric-ton campaigns adhering to strict cGMP guidelines.',
  },
  {
    icon: Microscope,
    title: 'Cleanroom Suites & Particle Engineering',
    desc: 'State-of-the-art ISO Class cleanroom suites equipped with specialized isolation, filtration, and micronization units.',
  },
  {
    icon: FileText,
    title: 'Complete Regulatory Dossiers & DMFs',
    desc: 'In-house regulatory affairs team providing technical packages, Drug Master Files (DMFs), stability data, and CoAs.',
  },
  {
    icon: Beaker,
    title: 'Rigorous Impurity Profiling',
    desc: 'Comprehensive analytical testing ensuring purity ≥ 99.8% with complete characterization of residual solvents and elemental impurities.',
  },
];

const highlights = [
  'cGMP & WHO-GMP standard operating protocols',
  'Commercial batches with comprehensive batch records',
  'Full backward integration through Quest ChemTech',
  'Zero Liquid Discharge (ZLD) environmental responsibility',
  'Prompt technical evaluation & sample distribution',
  'Audit-ready facilities for domestic & multinational clients',
];

export default function QuestPharma() {
  return (
    <PageWrapper
      title="Quest Pharma | Active Pharmaceutical Ingredients (APIs) Manufacturer India"
      fullTitle="Quest Pharma | Active Pharmaceutical Ingredients (APIs) Manufacturer India - Quest Group"
      description="Quest Pharma, a division of Quest Group, is a premier manufacturer of Active Pharmaceutical Ingredients (APIs) and bulk drugs in India with cGMP compliance."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(20, 184, 166, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6, 182, 212, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Division Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                <Pill className="w-3.5 h-3.5 text-teal-600" />
                <span>Quest Pharma • A Division of Quest Group</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Manufacturer of{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Active Pharmaceutical Ingredients (APIs)
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                <strong>Quest Pharma</strong> operates as the specialized API manufacturing division of <strong>Quest Group</strong>. We deliver high-purity Active Pharmaceutical Ingredients and bulk drugs manufactured under strict cGMP and WHO-GMP compliance across our facilities in Hyderabad, Telangana, India.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  WHO-GMP &amp; cGMP Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Factory className="w-3.5 h-3.5 text-teal-600" />
                  ISO Class Cleanroom Suites
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <FileText className="w-3.5 h-3.5 text-teal-600" />
                  Complete Regulatory DMFs
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full shadow-lg shadow-teal-500/25 text-sm font-bold hover:scale-105 active:scale-95 transition-all"
                >
                  <span>View API Product List</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-sm shadow-xs hover:border-slate-300 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Request Technical Package</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src={heroCinematic}
                  alt="Quest Pharma API Manufacturing Facility"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm border-white/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    cGMP Certified Plant
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-300 mb-1">
                    Hyderabad, Telangana
                  </p>
                  <h4 className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    Commercial API Production Suites
                  </h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. Key Pillars & Overview ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold tracking-[0.18em] text-teal-600 uppercase">
                API Manufacturing Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Empowering Global Healthcare with Rigorous API Quality
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>Quest Pharma</strong>, our mission is to ensure patients worldwide receive safe, reliable, and efficacious medications. Our manufacturing operations combine deep synthetic chemistry talent with modern production technology, allowing us to consistently produce APIs with exceptionally low impurity thresholds.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Working in tight synergy with <strong>Quest ChemTech</strong>, our sister company handling starting materials and intermediate synthesis, Quest Pharma guarantees uninterrupted supply continuity and pricing stability for our global formulating partners.
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={heroReactorCleanroom}
                  alt="Quest Pharma API Manufacturing Facility"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/90 text-slate-950 text-xs font-black uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    WHO-GMP &amp; cGMP Compliant
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Integrated API Manufacturing Unit
                  </h3>
                  <p className="text-xs text-slate-300">
                    Hyderabad, Telangana manufacturing facility serving domestic and international pharma partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Capabilities Grid ─── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.18em] text-teal-600 uppercase">
              Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Quest Pharma Technical Capabilities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 border border-teal-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. Contact & Inquiries CTA ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white shadow-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-300 mb-3">
              Commercial &amp; Technical Desk
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Connect With Quest Pharma
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Looking for commercial pricing, API availability, DMF status, or to schedule a physical audit of our manufacturing plant? Our technical sales desk responds within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:knreddy@questgrouplabs.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs tracking-wide shadow-md hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email: knreddy@questgrouplabs.com</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs tracking-wide backdrop-blur-md hover:scale-105 transition-all"
              >
                <span>Official Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
