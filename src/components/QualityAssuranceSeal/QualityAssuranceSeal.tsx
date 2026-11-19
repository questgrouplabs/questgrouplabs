import { motion } from 'framer-motion';

export default function QualityAssuranceSeal() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-teal-400/25 via-emerald-400/20 to-amber-300/25 blur-2xl animate-pulse" />

      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
        initial={{ rotate: -2, scale: 0.95 }}
        animate={{ rotate: 0, scale: 1 }}
        whileHover={{ scale: 1.04, rotate: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          {/* Radial Metallic Gradient for the Orb */}
          <radialGradient id="sphereGrad" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="25%" stopColor="#0d9488" />
            <stop offset="60%" stopColor="#0f766e" />
            <stop offset="90%" stopColor="#115e59" />
            <stop offset="100%" stopColor="#042f2e" />
          </radialGradient>

          {/* Golden Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="25%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="75%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Platinum / Slate Rim */}
          <linearGradient id="platRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
          </linearGradient>

          {/* Emerald / Teal Ribbon Gradient */}
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="20%" stopColor="#047857" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="80%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          {/* Glass Highlight */}
          <linearGradient id="glassShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Text Arc Path */}
          <path
            id="textArcTop"
            d="M 68,200 A 132,132 0 1,1 332,200"
            fill="none"
          />
          <path
            id="textArcBottom"
            d="M 332,200 A 132,132 0 0,1 68,200"
            fill="none"
          />

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Fluted Gold Medallion Sunburst Ring */}
        <g opacity="0.95">
          {Array.from({ length: 36 }).map((_, idx) => (
            <line
              key={idx}
              x1="200"
              y1="22"
              x2="200"
              y2="36"
              stroke="url(#goldRim)"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${idx * 10} 200 200)`}
            />
          ))}
        </g>

        {/* Outer Gold Border */}
        <circle cx="200" cy="200" r="168" fill="none" stroke="url(#goldRim)" strokeWidth="3" />
        <circle cx="200" cy="200" r="162" fill="#042f2e" stroke="url(#goldRim)" strokeWidth="1.5" />

        {/* Outer Circular Ring Text */}
        <text
          fill="#fef08a"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="4"
          className="uppercase select-none"
        >
          <textPath href="#textArcTop" startOffset="50%" textAnchor="middle">
            ★ QUEST GROUP PHARMA ★ cGMP COMPLIANCE
          </textPath>
        </text>

        <text
          fill="#a7f3d0"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="3.5"
          className="uppercase select-none"
        >
          <textPath href="#textArcBottom" startOffset="50%" textAnchor="middle">
            ★ WHO-GMP CERTIFIED EXCELLENCE ★
          </textPath>
        </text>

        {/* Inner Gold Inset Circle */}
        <circle cx="200" cy="200" r="128" fill="none" stroke="url(#goldRim)" strokeWidth="2.5" />

        {/* Central Core Metallic Orb */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="url(#sphereGrad)"
          stroke="url(#platRim)"
          strokeWidth="3"
        />

        {/* Ambient Top Spherical Specular Light */}
        <ellipse
          cx="175"
          cy="130"
          rx="65"
          ry="38"
          fill="url(#glassShine)"
          transform="rotate(-15 175 130)"
        />

        {/* Molecular Grid Orbit Lines */}
        <ellipse
          cx="200"
          cy="200"
          rx="95"
          ry="32"
          fill="none"
          stroke="#5eead4"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.6"
          transform="rotate(-25 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="95"
          ry="32"
          fill="none"
          stroke="#5eead4"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.6"
          transform="rotate(35 200 200)"
        />

        {/* Center Shield Crest */}
        <g transform="translate(200, 192)">
          {/* Shield Base */}
          <path
            d="M 0 -44 L 38 -28 C 38 18, 22 46, 0 58 C -22 46, -38 18, -38 -28 Z"
            fill="url(#goldRim)"
            stroke="#fef08a"
            strokeWidth="2"
            filter="url(#softGlow)"
          />
          <path
            d="M 0 -39 L 32 -25 C 32 14, 18 39, 0 50 C -18 39, -32 14, -32 -25 Z"
            fill="#0f766e"
            stroke="#fde047"
            strokeWidth="1"
          />

          {/* Bold Centered Checkmark */}
          <path
            d="M -14 2 L -4 13 L 16 -12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 5 Quality Stars on top of shield */}
          <g transform="translate(0, -56)">
            {[-24, -12, 0, 12, 24].map((offset, idx) => (
              <path
                key={idx}
                d="M 0 -5 L 1.5 -1.5 L 5 -1.5 L 2.2 0.8 L 3.2 4.5 L 0 2.2 L -3.2 4.5 L -2.2 0.8 L -5 -1.5 L -1.5 -1.5 Z"
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="0.5"
                transform={`translate(${offset}, ${Math.abs(offset) * 0.15}) scale(${idx === 2 ? 1.2 : 0.9})`}
              />
            ))}
          </g>
        </g>

        {/* 3D Flowing Green & Gold Ribbon Banner */}
        <g transform="translate(0, 4)">
          {/* Ribbon Shadow */}
          <path
            d="M 28 274 Q 200 304 372 274 L 368 290 Q 200 320 32 290 Z"
            fill="#022c22"
            opacity="0.5"
          />

          {/* Ribbon Back Fold Left */}
          <path
            d="M 32 258 L 12 240 L 40 236 L 44 260 Z"
            fill="#064e3b"
            stroke="url(#goldRim)"
            strokeWidth="1"
          />
          {/* Ribbon Back Fold Right */}
          <path
            d="M 368 258 L 388 240 L 360 236 L 356 260 Z"
            fill="#064e3b"
            stroke="url(#goldRim)"
            strokeWidth="1"
          />

          {/* Ribbon Main Body */}
          <path
            d="M 28 252 Q 200 286 372 252 L 366 288 Q 200 322 34 288 Z"
            fill="url(#ribbonGrad)"
            stroke="url(#goldRim)"
            strokeWidth="2.5"
          />

          {/* Ribbon Inner Gold Pin-stripes */}
          <path
            d="M 32 256 Q 200 290 368 256"
            fill="none"
            stroke="#fef08a"
            strokeWidth="1.2"
            opacity="0.8"
          />
          <path
            d="M 38 284 Q 200 318 362 284"
            fill="none"
            stroke="#fef08a"
            strokeWidth="1.2"
            opacity="0.8"
          />

          {/* Ribbon Text: QUALITY ASSURANCE */}
          <text
            x="200"
            y="283"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="18"
            fontWeight="900"
            letterSpacing="3"
            className="uppercase select-none"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            QUALITY ASSURANCE
          </text>
        </g>
      </motion.svg>
    </div>
  );
}

