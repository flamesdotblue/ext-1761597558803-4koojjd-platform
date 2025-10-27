import React from 'react';
import { Wifi, Signal, Battery, Search, Bell } from 'lucide-react';

const navy = '#121629';
const orange = '#ed7621';
const coral = '#cf3527';
const lightGray = '#F5F5F5';

export default function StatusAndHeader() {
  return (
    <div className="w-full">
      {/* Status Bar */}
      <div className="w-full h-[50px] flex items-center justify-between px-6" style={{ color: '#FFFFFF' }}>
        <div className="text-white" style={{ fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>9:41</div>
        <div className="flex items-center gap-3 text-white">
          <Signal size={18} />
          <Wifi size={18} />
          <Battery size={20} />
        </div>
      </div>

      {/* Header */}
      <div className="w-full h-[140px] relative">
        <div className="absolute inset-0" style={{ backgroundColor: navy }} />
        {/* Bottom accent gradient strip 2px */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${orange}, ${coral})` }} />

        <div className="relative z-10 h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
              alt="User"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div
                className="text-white text-[20px] font-semibold leading-tight"
                style={{ fontFamily: 'Logotype Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
              >
                Hello, Emily!
              </div>
              <div
                className="text-[#D1D5DB] text-[13px] mt-1"
                style={{ fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}
              >
                Shams, Rabat Street, Abu Dhabi, UAE
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="p-2 rounded-full" style={{ color: orange }}>
              <Search size={26} className="drop-shadow-[0_0_10px_rgba(237,118,33,0.8)]" />
            </div>
            <div className="p-2 rounded-full" style={{ color: orange }}>
              <Bell size={26} className="drop-shadow-[0_0_10px_rgba(237,118,33,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
