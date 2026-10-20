import React, { useState } from 'react';
import { HeroBanner } from './components/HeroBanner';
import { TreeCard } from './components/TreeCard';
import { AllowedTreesSection } from './components/AllowedTreesSection';
import { TREES_DATA } from './data/treesData';
import { Search, ShieldAlert } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter logic
  const filteredTrees = TREES_DATA.filter((tree) => {
    const matchesSearch =
      tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tree.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tree.stt.toString().includes(searchTerm);
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col text-slate-800 font-sans pb-12 relative bg-emerald-950">
      {/* Full Page Emerald Wave Graphic Canvas Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-95"
        style={{ backgroundImage: `url('/assets/aistudio/8840374_0a2c7e9c.jpg')` }}
      />
      {/* Soft Ambient Contrast Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-emerald-950/20 backdrop-brightness-95" />

      {/* Main App Workspace */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Title Banner */}
        <HeroBanner />

        {/* Main Workspace Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
          {/* Section Header & Search Toolbar */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-900/30 pb-4 bg-white/85 backdrop-blur-md p-4 rounded-2xl shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold font-sans text-slate-950 uppercase tracking-wide flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-[#ea580c] shrink-0" />
                <span>DANH MỤC CÂY <strong className="text-[#ea580c] font-black">CẤM TRỒNG</strong> TRÊN ĐỊA BÀN HÀ NỘI</span>
              </h2>

              <div className="relative w-full sm:w-72 no-print">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm loài cây hoặc lý do..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Flip Cards Grid: Mobile 2 boxes per row (grid-cols-2), PC 6 boxes per row (lg:grid-cols-6) */}
            {filteredTrees.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {filteredTrees.map((tree) => (
                  <TreeCard key={tree.stt} tree={tree} />
                ))}
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
                <p className="text-slate-600 text-sm">
                  Không tìm thấy loài cây nào khớp với từ khóa "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 text-xs font-semibold text-emerald-800 hover:underline"
                >
                  Xóa bộ lọc tìm kiếm
                </button>
              </div>
            )}
          </div>

          {/* Section for 33 Urban Trees & 18 Aquatic Trees Allowed */}
          <AllowedTreesSection />
        </main>
      </div>
    </div>
  );
}
