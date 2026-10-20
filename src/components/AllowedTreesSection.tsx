import React from 'react';
import { Droplets, TreePine } from 'lucide-react';

export const AllowedTreesSection: React.FC = () => {
  const streetTrees = [
    "Ban trắng", "Ban tím (ban hoàng hậu)", "Bàng lá nhỏ (bàng Đài Loan)", "Bằng lăng", "Chà là",
    "Chiêu liêu", "Chuông vàng", "Cọ dầu", "Dầu rái", "Giáng hương cầu gai (hương vườn)",
    "Hoàng lan", "Kèn hồng", "Lát hoa", "Lộc vừng", "Long não", "Muồng hoàng yến", "Muồng hoa đào",
    "Muồng ngủ", "Ngọc lan", "Nhội", "Osaka (đậu san hô đỏ)", "Phong linh", "Phượng vĩ",
    "Quếch (gội trắng)", "Sang lẻ", "Sảng nhung (sang)", "Sao đen", "Sấu", "Cơm nguội (sếu)",
    "Sưa đỏ", "Thàn mát", "Vàng anh", "Xoài"
  ];

  const aquaticTrees = [
    "Bụt mọc", "Gáo trắng", "Tràm gió", "Trâm nước", "Sanh", "Xi", "Bằng lăng", "Lộc vừng",
    "Ô rô", "Trang đỏ", "Cỏ năn", "Cói", "Lau sậy", "Thủy trúc", "Dành dành", "Bèo tây", "Súng", "Sen"
  ];

  // Helper to format name if it has parenthetical text
  const formatName = (item: string) => {
    const match = item.match(/^(.*?)\s*(\(.*?\))$/);
    if (match) {
      return (
        <span>
          <strong className="font-bold text-sm sm:text-base">{match[1]}</strong>{" "}
          <span className="text-xs font-normal opacity-80">{match[2]}</span>
        </span>
      );
    }
    return <strong className="font-bold text-sm sm:text-base">{item}</strong>;
  };

  return (
    <section className="space-y-8 pt-6 sm:pt-10 border-t border-slate-700/20 relative">
      {/* Main Section Title Container (Optimized for Mobile so Text is Never Cover) */}
      <div className="relative bg-white/90 backdrop-blur-md p-4 sm:p-7 rounded-2xl border border-slate-300 shadow-xs flex items-center justify-between overflow-visible min-h-[90px] sm:min-h-[110px]">
        {/* Title Text on Left (pr-28 on mobile gives safe clear space) */}
        <div className="pr-24 sm:pr-64 md:pr-80 z-10">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-sans text-slate-950 uppercase tracking-wide leading-snug">
            DANH MỤC CÂY XANH ĐƯỢC PHÉP TRỒNG
          </h2>
        </div>

        {/* Vector Image: Compact on Mobile (h-28 -top-6), Large on Desktop (sm:h-52 md:h-64) */}
        <img
          src="/assets/aistudio/image_d2536976.png"
          alt="Minh họa trồng cây"
          className="absolute right-1 sm:right-6 -top-6 sm:-top-16 md:-top-20 h-28 sm:h-52 md:h-64 object-contain pointer-events-none z-20 drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Grid: Card 1 increased width 20% (col-span-7), Card 2 narrowed width 20% (col-span-5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* CARD 1: 33 CÂY XANH ĐÔ THỊ (Width +20% -> lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-800/15 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-extrabold font-sans text-slate-950 uppercase tracking-wide">
                    33 CÂY XANH TRỒNG TRÊN ĐƯỜNG VÀ KHU VỰC CÔNG CỘNG
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Áp dụng cho vỉa hè, dải phân cách, công viên và không gian công cộng
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold bg-emerald-800 text-white px-2.5 py-1 rounded-lg shrink-0">
                33 loài
              </span>
            </div>

            {/* List Tags */}
            <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
              {streetTrees.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-900/10 text-slate-900 transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  {formatName(item)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 2: 18 CÂY NGẬP NƯỚC (Nền có màu nước nhẹ cyan/sky blue gradient) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-cyan-50/95 via-sky-50/90 to-blue-50/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-cyan-300/70 shadow-sm flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Water Wave Pattern Accent in background */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-cyan-800">
            <Droplets className="w-40 h-40" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-cyan-200/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-100/90 text-cyan-800 border border-cyan-200">
                  <Droplets className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold font-sans text-cyan-950 uppercase tracking-wide">
                    18 LOÀI CÂY NGẬP NƯỚC VÀ SỐNG TRÊN MẶT NƯỚC
                  </h3>
                  <p className="text-xs text-cyan-800/80 mt-0.5">
                    Áp dụng cho bờ hồ, kênh rạch, vùng bán ngập
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold bg-cyan-800 text-white px-2.5 py-1 rounded-lg shrink-0 shadow-2xs">
                18 loài
              </span>
            </div>

            {/* List Tags (Màu nước nhẹ) */}
            <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
              {aquaticTrees.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 hover:bg-cyan-100/80 border border-cyan-200/90 text-cyan-950 transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                  {formatName(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
