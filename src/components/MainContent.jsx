import React from 'react';
import { Play, ShoppingCart, MapPin, GraduationCap, Star } from 'lucide-react';

const orange = '#ed7621';
const coral = '#cf3527';
const navy = '#121629';
const lightGray = '#F5F5F5';

function FeatureCard({ title, subtitle, bgUrl, overlay, topTextColor = '#FFFFFF', buttonColor = orange, icon }) {
  return (
    <div className="relative w-[170px] h-[200px] rounded-[16px] overflow-hidden shadow-[0_4px_14px_rgba(237,118,33,0.15)]">
      <img src={bgUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      {overlay && (
        <div className="absolute inset-0" style={{ background: overlay }} />
      )}
      <div className="relative z-10 p-3">
        <div
          className="text-[20px] font-semibold"
          style={{ color: topTextColor, fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
        >
          {title}
        </div>
        <div
          className="text-[11px] mt-1"
          style={{ color: topTextColor, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
        >
          {subtitle}
        </div>
      </div>
      <div className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center" style={{ background: buttonColor }}>
        {icon}
      </div>
    </div>
  );
}

function SuggestCard() {
  return (
    <div className="relative w-[360px] h-[120px] rounded-[14px] overflow-hidden flex items-stretch shadow-[0_0_0_1px_rgba(237,118,33,0.2)]" style={{ background: 'linear-gradient(90deg, #ed76211A, #cf35271A)' }}>
      <div className="w-[4px] h-full" style={{ background: orange }} />
      <div className="flex-1 p-4">
        <div className="text-[22px] font-semibold" style={{ color: orange, fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Let's Suggest</div>
        <div className="text-[14px] mt-1" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Recommend & Get Rewarded</div>
        <div className="text-[10px] mt-1" style={{ color: '#9CA3AF', fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Know a great venue? Share it with us!</div>
      </div>
      <div className="w-[35%] relative flex items-center justify-center pr-3">
        {/* Isometric 3D football field illustration */}
        <svg width="120" height="100" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#18a558" />
              <stop offset="100%" stopColor="#1ecf73" />
            </linearGradient>
          </defs>
          <g transform="skewY(-12) translate(10,10)">
            <rect x="0" y="20" width="160" height="90" rx="8" fill="url(#grass)" stroke="#ffffff" strokeWidth="3" />
            <line x1="80" y1="20" x2="80" y2="110" stroke="#ffffff" strokeWidth="2" />
            <circle cx="80" cy="65" r="10" stroke="#ffffff" strokeWidth="2" fill="none" />
            {/* Orange goal posts */}
            <rect x="-4" y="48" width="4" height="34" fill="#ed7621" />
            <rect x="160" y="48" width="4" height="34" fill="#ed7621" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FeaturedVenues() {
  const venues = [
    { name: 'Greenfield Arena', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop', rating: '4.8', dist: '1.2 km' },
    { name: 'CourtX Downtown', img: 'https://images.unsplash.com/photo-1544911770-4cce4f0b3d40?q=80&w=600&auto=format&fit=crop', rating: '4.7', dist: '2.0 km' },
    { name: 'City Sports Hub', img: 'https://images.unsplash.com/photo-1521417531039-94a4b1bab2f8?q=80&w=600&auto=format&fit=crop', rating: '4.9', dist: '2.5 km' },
  ];
  return (
    <div className="mt-6">
      <div className="px-6 text-[18px] font-semibold" style={{ color: navy, fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Popular Near You</div>
      <div className="mt-3 px-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pr-6">
          {venues.map((v) => (
            <div key={v.name} className="w-[140px] h-[160px] rounded-[12px] overflow-hidden shadow-md flex-shrink-0 bg-white">
              <div className="w-full h-[100px] relative">
                <img src={v.img} alt={v.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <div className="text-[12px] font-medium truncate" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>{v.name}</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1 text-[11px]" style={{ color: orange }}>
                    <Star size={12} fill={orange} color={orange} /> {v.rating}⭐
                  </div>
                  <div className="text-[11px] text-gray-500" style={{ fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>{v.dist}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="w-full" style={{ background: lightGray }}>
      <div className="px-6 pt-4">
        <div className="text-[20px] font-semibold" style={{ color: navy, fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>What Do You Want to Do?</div>

        {/* Grid 2x2 of Feature Cards */}
        <div className="mt-4 grid grid-cols-2 gap-[10px]" style={{ width: '360px' }}>
          <FeatureCard
            title="Let's Play"
            subtitle="Book Courts Easily"
            bgUrl="https://images.unsplash.com/photo-1512418490979-92798cec1383?q=80&w=1200&auto=format&fit=crop"
            overlay={`linear-gradient(180deg, rgba(237,118,33,0.25), rgba(237,118,33,0.25))`}
            topTextColor="#FFFFFF"
            buttonColor={orange}
            icon={<Play size={22} color="#FFFFFF" className="drop-shadow-[0_0_8px_rgba(237,118,33,0.7)]" />}
          />

          <FeatureCard
            title="Let's Shop"
            subtitle="Top Brands, Best Deals"
            bgUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
            overlay={`linear-gradient(180deg, rgba(207,53,39,0.20), rgba(207,53,39,0.20))`}
            topTextColor="#FFFFFF"
            buttonColor={coral}
            icon={<ShoppingCart size={22} color="#FFFFFF" className="drop-shadow-[0_0_8px_rgba(207,53,39,0.7)]" />}
          />

          <FeatureCard
            title="Let's Visit"
            subtitle="Trusted Sports Clinics"
            bgUrl="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop"
            overlay={`linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.0))`}
            topTextColor={navy}
            buttonColor={orange}
            icon={<MapPin size={22} color="#FFFFFF" className="drop-shadow-[0_0_8px_rgba(237,118,33,0.7)]" />}
          />

          <FeatureCard
            title="Let's Learn"
            subtitle="Expert Coaching"
            bgUrl="https://images.unsplash.com/photo-1587385789096-033f4d23c2b0?q=80&w=1200&auto=format&fit=crop"
            overlay={`linear-gradient(180deg, rgba(237,118,33,0.20), rgba(237,118,33,0.20))`}
            topTextColor="#FFFFFF"
            buttonColor={coral}
            icon={<GraduationCap size={22} color="#FFFFFF" className="drop-shadow-[0_0_8px_rgba(207,53,39,0.7)]" />}
          />
        </div>

        {/* Suggest Card */}
        <div className="mt-4" style={{ width: '360px' }}>
          <SuggestCard />
        </div>

        {/* Featured Venues */}
        <FeaturedVenues />
      </div>
      <div className="h-[90px]" />
    </div>
  );
}
