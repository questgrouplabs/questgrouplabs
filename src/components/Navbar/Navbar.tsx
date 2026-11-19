import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown, Pill, FlaskConical } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const companiesList = [
  {
    name: 'Quest Pharma',
    role: 'APIs & Bulk Drug Manufacturing',
    path: '/quest-pharma',
    icon: Pill,
    badge: 'cGMP / WHO-GMP',
  },
  {
    name: 'Quest ChemTech',
    role: 'Advanced Intermediates & Custom Synthesis',
    path: '/quest-chemtech',
    icon: FlaskConical,
    badge: '50,000+ L GLR / SS',
  },
];

const standardNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'R&D', path: '/research' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isCompanyActive =
    location.pathname === '/quest-pharma' || location.pathname === '/quest-chemtech';

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white shadow-sm border-b border-slate-100"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[70px] items-center justify-between">
            {/* Logo */}
            <Link to="/" aria-label="Quest Group Home" className="shrink-0 flex items-center">
              <div className="p-1 rounded-xl transition-all">
                <img src="/logo.webp" alt="Quest Group" className="h-12 lg:h-14 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === '/' ? 'text-teal-600' : 'text-slate-800 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>

              <Link
                to="/about"
                className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === '/about' ? 'text-teal-600' : 'text-slate-800 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                About
                {location.pathname === '/about' && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>

              {/* Companies Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                    isCompanyActive ? 'text-teal-600' : 'text-slate-800 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  <span>Companies</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'
                    }`}
                  />
                  {isCompanyActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-72 rounded-2xl bg-white border border-slate-200/90 shadow-xl p-2 z-50 mt-1"
                    >
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Our Operating Companies
                      </div>
                      {companiesList.map((c) => {
                        const Icon = c.icon;
                        const active = location.pathname === c.path;
                        return (
                          <Link
                            key={c.path}
                            to={c.path}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                              active
                                ? 'bg-teal-50 text-teal-800'
                                : 'hover:bg-slate-50 text-slate-800 hover:text-teal-700'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold leading-none mb-1 flex items-center gap-1.5">
                                {c.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug">
                                {c.role}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining standard links */}
              {standardNavLinks.slice(2).map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                      active
                        ? 'text-teal-600'
                        : 'text-slate-800 hover:text-teal-600 hover:bg-teal-50'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-[13px]"
              >
                Request an Enquiry <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-white shadow-2xl border-l border-slate-100 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <div className="p-1 rounded-lg">
                    <img src="/logo.webp" alt="Quest Group" className="h-11 w-auto object-contain" />
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="px-4 py-4 space-y-1">
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      location.pathname === '/' ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Home
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/about"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      location.pathname === '/about' ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    About Us
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  {/* Operating Companies Group in Mobile Drawer */}
                  <div className="pt-2 pb-1">
                    <div className="px-4 text-[10px] font-bold uppercase tracking-wider text-teal-700 mb-1">
                      Our Companies
                    </div>
                    {companiesList.map((c) => {
                      const Icon = c.icon;
                      const active = location.pathname === c.path;
                      return (
                        <Link
                          key={c.path}
                          to={c.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            active
                              ? 'bg-teal-50 text-teal-800'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-teal-600" />
                          <span>{c.name}</span>
                          <span className="ml-auto text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            {c.path === '/quest-pharma' ? 'APIs' : 'Intermediates'}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {standardNavLinks.slice(2).map((link) => {
                    const active = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          active ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer CTA */}
              <div className="p-5 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 btn-primary w-full"
                >
                  Request an Enquiry
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
