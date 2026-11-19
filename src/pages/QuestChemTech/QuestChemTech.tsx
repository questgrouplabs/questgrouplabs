import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Zap,
  Atom,
  Layers,
  Mail,
  Workflow,
} from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import plantAreaEnhanced from '../../assets/03_plant_area_enhanced.png';
import factoryBuilding from '../../assets/02_factory_building_enhanced.png';

const chemistryCompetencies = [
  {
    title: 'Alkylation & Acylation',
    desc: 'High-selectivity Friedel-Crafts and catalytic alkylation/acylation reactions under controlled temperature regimens.',
  },
  {
    title: 'Catalytic Hydrogenation',
    desc: 'Dedicated high-pressure hydrogenation autoclaves handling precious metal catalysts (Pd/C, Pt/C, Raney Nickel).',
  },
  {
    title: 'Halogenation & Chlorination',
    desc: 'Specialized handling of thionyl chloride, sulfuryl chloride, and bromine reagents in corrosion-resistant glass-lined reactors.',
  },
  {
    title: 'Cryogenic Chemistry (-40°C)',
    desc: 'Low-temperature lithiation and organometallic coupling reactions with chillers supporting down to -40°C.',
  },
  {
    title: 'Condensation & Cyclization',
    desc: 'Multi-step heterocyclic ring formations for advanced active pharmaceutical heterocyclic scaffolds.',
  },
  {
    title: 'Process Route Scouting & CRAMS',
    desc: 'Cost-effective synthetic route development, solvent recovery optimization, and contract manufacturing scale-up.',
  },
];

const highlights = [
  'Over 50,000+ Litres total reactor capacity (Glass-Lined & SS-316)',
  'Multi-step organic synthesis of complex Bulk Drug Intermediates',
  'Primary intermediate supplier to Quest Pharma API lines',
  '100% Zero Liquid Discharge (ZLD) environmental compliance',
  'Scalable from multi-kilogram pilot batches to multi-ton commercial orders',
  'Advanced analytical in-process controls (HPLC, GC, wet chemistry)',
];

export default function QuestChemTech() {
  return (
    <PageWrapper
      title="Quest ChemTech | Advanced Pharmaceutical Intermediates India"
      fullTitle="Quest ChemTech | Advanced Pharmaceutical Intermediates & Custom Chemical Synthesis India - Quest Group"
      description="Quest ChemTech, a division of Quest Group, specializes in advanced pharmaceutical intermediates, bulk drug chemicals, and custom synthesis solutions in India."
    >
      {/* ─── 1. Breathtaking Hero Section ─── */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Soft Silk Gradient Blooms */}
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% -10%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6, 182, 212, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(37, 99, 235, 0.06) 0%, transparent 60%)
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
                <span>Quest ChemTech • A Division of Quest Group</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
                Advanced Intermediates &amp;{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  Custom Chemical Synthesis
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                <strong>Quest ChemTech</strong> is the specialty fine chemical and advanced intermediate synthesis division of <strong>Quest Group</strong>. We engineer high-yield, complex organic synthesis routes and scale Bulk Drug Intermediates from kilogram to metric tons for global pharmaceutical innovators.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Gauge className="w-3.5 h-3.5 text-blue-600" />
                  50,000+ Litres Reaction Capacity
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  Cryogenic &amp; High-Pressure Autoclaves
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <Atom className="w-3.5 h-3.5 text-blue-600" />
                  Multi-Step Organic Chemistry
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/capabilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explore Plant Infrastructure</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-sm shadow-xs hover:border-slate-300 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Request Custom Synthesis Quote</span>
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
                  src={factoryBuilding}
                  alt="Quest ChemTech Chemical Synthesis Facility"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm border-white/40">
                    <Gauge className="w-3.5 h-3.5 text-blue-600" />
                    50,000+ L Reactor Volume
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 mb-1">
                    Hyderabad, Telangana
                  </p>
                  <h4 className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    Advanced Fine Chemical Synthesis Block
                  </h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. Division Capabilities & Infrastructure ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">
                Synthetic Chemistry Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                High-Yield Chemical Synthesis for Complex Intermediate Cascades
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Modern pharmaceutical APIs require increasingly complex, multi-step synthetic pathways. <strong>Quest ChemTech</strong> specializes in unlocking these difficult chemistries by combining deep process chemistry experience with heavy-duty chemical reactor trains.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By producing core intermediates internally, Quest ChemTech provides backward integration for <strong>Quest Pharma</strong>, giving our clients a resilient, cost-competitive, and transparent supply chain located in Hyderabad, Telangana.
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-1 gap-2.5 pt-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
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
                  src={plantAreaEnhanced}
                  alt="Quest ChemTech Chemical Synthesis Facility"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-black uppercase tracking-wider mb-2">
                    <Gauge className="w-3.5 h-3.5" />
                    50,000+ Litres Capacity
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Advanced Reaction Infrastructure
                  </h3>
                  <p className="text-xs text-slate-300">
                    Glass-Lined (GLR) and Stainless Steel (SS-316) reactors engineered for corrosive, cryogenic, and high-pressure chemistries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Reaction Competencies ─── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">
              Reaction Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Synthetic Reaction Competencies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our synthetic chemists routinely optimize and scale high-hazard and low-temperature chemical processes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chemistryCompetencies.map((chem) => (
              <div
                key={chem.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                  <Atom className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {chem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Contact & Inquiries CTA ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white shadow-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3">
              CRAMS &amp; Synthesis Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Partner With Quest ChemTech
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Have a key intermediate requirement or custom synthesis route to scale? Our chemical process engineering team will review your specifications under strict NDA.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:knreddy@questgrouplabs.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide shadow-md hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email: knreddy@questgrouplabs.com</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs tracking-wide backdrop-blur-md hover:scale-105 transition-all"
              >
                <span>Submit Technical Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
