import React from 'react';
import StatusAndHeader from './components/StatusAndHeader';
import PromoArea from './components/PromoArea';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="relative w-[1080px] h-[2340px] bg-white shadow-xl overflow-hidden rounded-[28px] border border-[#ececec]">
        <StatusAndHeader />
        <PromoArea />
        <MainContent />
        <BottomNav />
      </div>
    </div>
  );
}
