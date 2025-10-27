import React from 'react';
import Spline from '@splinetool/react-spline';

const orange = '#ed7621';
const coral = '#cf3527';
const navy = '#121629';

function PromoBannerCard() {
  return (
    <div className="relative w-[360px] h-[130px] rounded-[14px] overflow-hidden flex-shrink-0 shadow-lg">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, ${orange}, ${coral})` }}
      />
      <div className="absolute inset-0 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.08)]" />

      <div className="relative z-10 w-full h-full flex">
        <div className="w-[60%] p-4 text-white flex flex-col justify-center">
          <div
            className="text-white text-[22px] font-bold leading-snug"
            style={{ fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
          >
            🎾 Book Courts & Win Big!
          </div>
          <div
            className="text-white/95 text-[14px] mt-1"
            style={{ fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
          >
            Get 20% OFF + Earn Rewards
          </div>
        </div>
        <div className="w-[40%] relative flex items-center justify-center">
          <div className="w-[110px] h-[110px] rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            {/* 3D-like sports equipment illustration using layered SVGs */}
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={orange} />
                  <stop offset="100%" stopColor={coral} />
                </linearGradient>
              </defs>
              {/* Tennis racket */}
              <ellipse cx="36" cy="36" rx="18" ry="22" fill="url(#g1)" opacity="0.95" />
              <rect x="33" y="52" width="6" height="20" rx="3" fill="url(#g1)" />
              <rect x="30" y="62" width="12" height="6" rx="3" fill="#fff" opacity="0.9" />
              {/* Football */}
              <circle cx="64" cy="28" r="12" fill="#fff" />
              <path d="M64 16 l4 6 -4 6 -4-6 4-6z" fill={navy} />
              <circle cx="64" cy="28" r="12" stroke={coral} strokeWidth="2" fill="transparent" />
              {/* Basketball */}
              <circle cx="58" cy="58" r="10" fill={orange} />
              <path d="M48 58 H68 M58 48 V68 M50 50 C66 54 50 62 66 66" stroke="#fff" strokeWidth="1.5" opacity="0.9" />
            </svg>
          </div>
          <div className="absolute top-2 right-2 bg-white text-[11px] text-[${navy}] px-2 py-1 rounded-full shadow-sm" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
            HOT DEAL
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickCategories() {
  const cats = [
    { name: 'Tennis', bg: orange, icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white"><circle cx="12" cy="12" r="9" fill="currentColor" /><path d="M4 12c6 0 6-6 16-6" stroke="#121629" strokeWidth="1.5" fill="none"/></svg>
    )},
    { name: 'Football', bg: coral, icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white"><circle cx="12" cy="12" r="9" fill="currentColor" /><path d="M12 7l3 2-1 3h-4l-1-3 3-2z" fill={navy} /></svg>
    )},
    { name: 'Basketball', bg: navy, icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" style={{ color: orange }}><circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15"/><circle cx="12" cy="12" r="9" stroke={orange} strokeWidth="2" fill="none"/><path d="M3 12h18M12 3v18M5 6c7 3 7 9 14 12" stroke={orange} strokeWidth="1.5" /></svg>
    )},
    { name: 'Cricket', bg: 'linear-gradient(180deg, #ff8f54, #ed7621)', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white"><rect x="10" y="4" width="3" height="12" rx="1.5" fill="currentColor"/><circle cx="12" cy="18" r="3" fill="#fff" opacity="0.9"/></svg>
    )},
    { name: 'Badminton', bg: 'linear-gradient(180deg, #ff6a5a, #cf3527)', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white"><path d="M8 4l8 8-2 2-8-8 2-2z" fill="currentColor"/><rect x="5" y="16" width="14" height="2" rx="1" fill="#fff" opacity="0.9"/></svg>
    )},
    { name: 'Swimming', bg: navy, icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" style={{ color: orange }}><path d="M4 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" stroke="currentColor" strokeWidth="1.8" fill="none"/><circle cx="8" cy="10" r="2" fill="currentColor"/></svg>
    )},
  ];
  return (
    <div className="w-full bg-white px-6 py-3">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[18px] font-semibold" style={{ color: navy, fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Explore Sports</div>
        <button className="text-[14px]" style={{ color: orange, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>View All</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-[10px] pr-6">
          {cats.map((c) => (
            <div key={c.name} className="w-[90px] flex-shrink-0 flex flex-col items-center">
              <div
                className="w-[75px] h-[75px] rounded-full flex items-center justify-center shadow-sm"
                style={{ background: c.bg }}
              >
                {c.icon}
              </div>
              <div className="mt-2 text-[11px]" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>{c.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full" style={{ background: orange }} />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default function PromoArea() {
  return (
    <div className="w-full relative">
      {/* Hero cover with Spline */}
      <div className="relative w-full h-[180px]">
        <Spline scene="https://prod.spline.design/1MH5ijGQRnLRtVUF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(18,22,41,0.0) 0%, rgba(18,22,41,0.0) 100%)' }} />
      </div>

      {/* Promotional banner */}
      <div className="mt-4 px-6">
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-4 pr-6">
            <PromoBannerCard />
            <PromoBannerCard />
            <PromoBannerCard />
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="mt-3">
        <QuickCategories />
      </div>
    </div>
  );
}
