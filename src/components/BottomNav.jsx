import React from 'react';
import { Home, Calendar, User, MoreHorizontal } from 'lucide-react';

const orange = '#ed7621';
const navy = '#121629';

export default function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[70px] bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] flex items-center justify-around">
      <div className="flex flex-col items-center">
        <Home size={26} color={orange} />
        <div className="h-[3px] w-6 rounded-full mt-1" style={{ background: orange }} />
        <span className="text-[10px] mt-1" style={{ color: orange, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <Calendar size={26} color={navy} />
        <div className="h-[3px] w-6 rounded-full mt-1 bg-transparent" />
        <span className="text-[10px] mt-1" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Bookings</span>
      </div>
      <div className="flex flex-col items-center">
        <User size={26} color={navy} />
        <div className="h-[3px] w-6 rounded-full mt-1 bg-transparent" />
        <span className="text-[10px] mt-1" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>Profile</span>
      </div>
      <div className="flex flex-col items-center">
        <MoreHorizontal size={26} color={navy} />
        <div className="h-[3px] w-6 rounded-full mt-1 bg-transparent" />
        <span className="text-[10px] mt-1" style={{ color: navy, fontFamily: 'Bingo Regular, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>More</span>
      </div>
    </div>
  );
}
