import React from 'react';
import { Leaf, FileText, LayoutGrid, Image as ImageIcon, Printer, ShieldAlert, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: 'infographic' | 'table' | 'risks' | 'source';
  setActiveTab: (tab: 'infographic' | 'table' | 'risks' | 'source') => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onPrint }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#f2f7f4]/95 backdrop-blur-md border-b border-emerald-900/10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 text-emerald-50 flex items-center justify-center shadow-sm">
              <Leaf className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-emerald-950 whitespace-nowrap block leading-none">
                HÀ NỘI · CÂY CẤM TRỒNG
              </span>
              <span className="text-[11px] font-medium text-emerald-700/80 whitespace-nowrap flex items-center gap-1 mt-0.5">
                <ShieldAlert className="w-3 h-3 text-emerald-600" /> 18 Loài theo quy định chính thức
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-1 bg-emerald-900/5 p-1 rounded-xl border border-emerald-900/10">
            <button
              onClick={() => setActiveTab('infographic')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'infographic'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-800/10'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Infographic
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'table'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-800/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Bảng Văn Bản Gốc
            </button>
            <button
              onClick={() => setActiveTab('risks')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'risks'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-800/10'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Phân Loại Nguy Cơ
            </button>
            <button
              onClick={() => setActiveTab('source')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'source'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-800/10'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Ảnh Văn Bản Gốc
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-950 bg-emerald-200/80 hover:bg-emerald-300/80 border border-emerald-400/30 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
              title="Xuất file / In Infographic"
            >
              <Printer className="w-4 h-4 text-emerald-800" />
              <span className="hidden sm:inline">In / Tải PDF</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Tabs */}
        <div className="md:hidden flex items-center justify-between gap-1 pb-3 overflow-x-auto no-scrollbar border-t border-emerald-900/10 pt-2">
          <button
            onClick={() => setActiveTab('infographic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'infographic' ? 'bg-emerald-800 text-white' : 'text-emerald-900/80 bg-emerald-100/50'
            }`}
          >
            Infographic
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'table' ? 'bg-emerald-800 text-white' : 'text-emerald-900/80 bg-emerald-100/50'
            }`}
          >
            Bảng Văn Bản
          </button>
          <button
            onClick={() => setActiveTab('risks')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'risks' ? 'bg-emerald-800 text-white' : 'text-emerald-900/80 bg-emerald-100/50'
            }`}
          >
            Phân Loại Nguy Cơ
          </button>
          <button
            onClick={() => setActiveTab('source')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'source' ? 'bg-emerald-800 text-white' : 'text-emerald-900/80 bg-emerald-100/50'
            }`}
          >
            Tài Liệu Gốc
          </button>
        </div>
      </div>
    </header>
  );
};
