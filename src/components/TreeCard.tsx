import React, { useState } from 'react';
import { TreeItem } from '../data/treesData';

interface TreeCardProps {
  tree: TreeItem;
}

export const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Helper to render tree name with parenthetical text on new line, smaller and not bold
  const renderTreeName = (name: string) => {
    const match = name.match(/^(.*?)\s*(\(.*?\))$/);
    if (match) {
      const mainName = match[1];
      const parenText = match[2];
      return (
        <span className="block">
          <span className="block font-bold">{mainName}</span>
          <span className="block text-sm sm:text-base font-normal text-emerald-200/90 mt-0.5 leading-tight">
            {parenText}
          </span>
        </span>
      );
    }
    return <span className="font-bold">{name}</span>;
  };

  return (
    <div
      className="perspective-1000 w-full h-56 sm:h-60 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Flip Card Container */}
      <div
        className={`relative w-full h-full duration-500 transform-style-3d transition-transform ease-out ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* MẶT TRƯỚC: XANH ĐẬM (Chữ không chân font-sans) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl p-4 bg-[#1b4332] text-white shadow-xs hover:shadow-md flex flex-col justify-between backface-hidden transition-all border-none">
          <div className="flex flex-col justify-between h-full">
            {/* Sequence Number */}
            <div className="mb-1">
              <span className="font-mono text-base sm:text-lg font-extrabold text-white bg-emerald-800/90 border border-emerald-600/50 px-3 py-0.5 rounded-lg shadow-2xs inline-block tracking-wider">
                {tree.stt}
              </span>
            </div>

            {/* Tree Name (Chữ không chân font-sans) */}
            <div className="my-auto">
              <h3 className="text-xl sm:text-2xl font-sans text-emerald-50 group-hover:text-white transition-colors leading-snug">
                {renderTreeName(tree.name)}
              </h3>
            </div>
          </div>
        </div>

        {/* MẶT SAU: NỀN XÁM 50% (Chữ màu trắng) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl p-4 bg-slate-700/60 backdrop-blur-xs text-white shadow-md flex items-center justify-center backface-hidden rotate-y-180 border-none">
          <div className="overflow-y-auto pr-1 h-full w-full flex items-center justify-center">
            <p className="text-xs sm:text-sm font-bold text-white leading-relaxed font-sans text-center drop-shadow-xs">
              {tree.reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
