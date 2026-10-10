import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'modules' && (
          <g fill="none" stroke={a}>
            {[[196, 48], [286, 48], [196, 112], [286, 112]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="76" height="52" rx="9" strokeWidth="2" strokeOpacity={0.55 + (i % 2) * 0.3} fill={i === 3 ? a : 'none'} fillOpacity="0.22" />
                <path d={`M${x + 12} ${y + 16} h30`} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
                <path d={`M${x + 12} ${y + 30} h48`} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />
                <path d={`M${x + 12} ${y + 40} h36`} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.25" />
              </g>
            ))}
            <path d="M272 74 h14 M272 138 h14 M234 100 v12 M324 100 v12" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" />
            <g transform="translate(196 190)">
              <path d="M0 18 h54 l12 -14 l14 28 l12 -14 h74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
              <circle cx="166" cy="18" r="6" fill={a} fillOpacity="0.7" stroke="none" />
            </g>
          </g>
        )}
        {project.motif === 'dashboard' && (
          <g fill="none" stroke={a}>
            <rect x="196" y="44" width="170" height="110" rx="10" strokeWidth="2" strokeOpacity="0.85" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={212 + i * 30} y={134 - [28, 52, 38, 70, 46][i]} width="18" height={[28, 52, 38, 70, 46][i]} rx="3" fill={a} fillOpacity={0.2 + i * 0.1} strokeOpacity="0.7" />
            ))}
            <g transform="translate(300 176)">
              <path d="M16 0 C7 0 0 7 0 16 C0 28 16 44 16 44 C16 44 32 28 32 16 C32 7 25 0 16 0 Z" strokeWidth="2" strokeOpacity="0.85" />
              <circle cx="16" cy="16" r="6" fill={a} fillOpacity="0.6" stroke="none" />
            </g>
            <path d="M196 214 h90" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M196 228 h60" strokeWidth="1" strokeOpacity="0.3" />
          </g>
        )}
        {project.motif === 'scatter' && (
          <g fill="none" stroke={a}>
            <path d="M200 50 V190 H370" strokeWidth="2" strokeOpacity="0.8" />
            {[[222, 160, 5], [240, 144, 7], [258, 150, 4], [272, 120, 8], [292, 128, 5], [308, 98, 9], [326, 108, 5], [344, 78, 7], [236, 172, 4], [284, 142, 4], [318, 126, 6]].map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill={a} fillOpacity={0.25 + (i % 4) * 0.12} strokeOpacity="0.7" />
            ))}
            <path d="M210 168 L360 70" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="6 6" />
            <path d="M200 214 h170" strokeWidth="1" strokeOpacity="0.3" />
          </g>
        )}
        {project.motif === 'pulse' && (
          <g fill="none" stroke={a}>
            <path d="M184 120 H236 L250 84 L270 168 L288 60 L304 130 L318 120 H376" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
            {[[200, 196], [236, 214], [272, 192], [308, 212], [344, 194]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="7" fill={a} fillOpacity="0.35" strokeOpacity="0.7" />
                {i < 4 && <path d={`M${x + 7} ${y} L${[236, 272, 308, 344][i] - 7} ${[214, 192, 212, 194][i]}`} strokeOpacity="0.4" />}
              </g>
            ))}
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
