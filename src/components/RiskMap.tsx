import React, { useState } from 'react';
import { TREES_DATA, TreeItem } from '../data/treesData';
import { Skull, Flame, Wind, Trash2, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface RiskMapProps {
  onSelectTree: (tree: TreeItem) => void;
}

export const RiskMap: React.FC<RiskMapProps> = ({ onSelectTree }) => {
  const [selectedRisk, setSelectedRisk] = useState<'toxic' | 'thorns' | 'brittle' | 'sanitation'>('toxic');

  const riskClusters = [
    {
      id: 'toxic' as const,
      title: 'Nhóm 1: Chứa Độc Tố',
      icon: Skull,
      color: 'bg-rose-50 border-rose-200 text-rose-900 hover:bg-rose-100/70',
      activeColor: 'bg-rose-800 text-white shadow-sm',
      badgeColor: 'bg-rose-100 text-rose-800',
      description: 'Nhựa, lá, hoa, quả hoặc hạt có chứa các chất độc sinh học, độc tố tim, alkaloid hoặc chất gây nghiện nguy hiểm cho người và động vật.',
      trees: TREES_DATA.filter((t) => t.categories.includes('toxic'))
    },
    {
      id: 'thorns' as const,
      title: 'Nhóm 2: Thân & Cành Nhiều Gai',
      icon: Flame,
      color: 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100/70',
      activeColor: 'bg-amber-800 text-white shadow-sm',
      badgeColor: 'bg-amber-100 text-amber-800',
      description: 'Thân cây và cành nhánh có nhiều gai nhọn to cứng, dễ gây tổn thương cho người đi đường, trẻ em và phương tiện giao thông.',
      trees: TREES_DATA.filter((t) => t.categories.includes('thorns'))
    },
    {
      id: 'brittle' as const,
      title: 'Nhóm 3: Cành Giòn, Dễ Gãy Đổ',
      icon: Wind,
      color: 'bg-orange-50 border-orange-200 text-orange-900 hover:bg-orange-100/70',
      activeColor: 'bg-orange-800 text-white shadow-sm',
      badgeColor: 'bg-orange-100 text-orange-800',
      description: 'Cành nhánh giòn, rễ nông, gỗ yếu dễ gãy đổ bất ngờ trong mùa mưa bão gây nguy hiểm cho tính mạng và tài sản.',
      trees: TREES_DATA.filter((t) => t.categories.includes('brittle'))
    },
    {
      id: 'sanitation' as const,
      title: 'Nhóm 4: Mất Vệ Sinh Môi Trường',
      icon: Trash2,
      color: 'bg-teal-50 border-teal-200 text-teal-900 hover:bg-teal-100/70',
      activeColor: 'bg-teal-800 text-white shadow-sm',
      badgeColor: 'bg-teal-100 text-teal-800',
      description: 'Quả chín rụng, bông gòn phát tán, hạt có lông gây mất vệ sinh đường phố, gây dị ứng hoặc thu hút rủi ro trèo hái.',
      trees: TREES_DATA.filter((t) => t.categories.includes('sanitation'))
    }
  ];

  const currentCluster = riskClusters.find((r) => r.id === selectedRisk)!;

  return (
    <div className="space-y-6">
      {/* Category selector grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {riskClusters.map((cluster) => {
          const IconComp = cluster.icon;
          const isActive = selectedRisk === cluster.id;
          return (
            <button
              key={cluster.id}
              onClick={() => setSelectedRisk(cluster.id)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? cluster.activeColor
                  : 'bg-white border-emerald-900/10 text-slate-800 hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : cluster.badgeColor}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {cluster.trees.length} loài
                </span>
              </div>

              <div className="mt-3">
                <div className="font-bold text-sm sm:text-base font-serif-title">{cluster.title}</div>
                <div className={`text-[11px] mt-1 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                  {Math.round((cluster.trees.length / 18) * 100)}% tổng danh mục
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Group Detailed View */}
      <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-xs">
        <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
          <div className={`p-3 rounded-xl shrink-0 ${currentCluster.badgeColor}`}>
            <currentCluster.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif-title text-slate-900">
              {currentCluster.title} ({currentCluster.trees.length} loài cây)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {currentCluster.description}
            </p>
          </div>
        </div>

        {/* Tree List Grid for this category */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCluster.trees.map((tree) => (
            <div
              key={tree.stt}
              onClick={() => onSelectTree(tree)}
              className="p-4 rounded-xl bg-emerald-50/40 hover:bg-emerald-100/60 border border-emerald-900/10 transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-200/80 px-2 py-0.5 rounded-md">
                    STT {tree.stt < 10 ? `0${tree.stt}` : tree.stt}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">{tree.summaryBadge}</span>
                </div>
                <h4 className="text-lg font-bold font-serif-title text-slate-900 mt-2">
                  {tree.name}
                </h4>
                <p className="text-xs text-slate-700 mt-2 font-sans leading-relaxed line-clamp-3">
                  "{tree.reason}"
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-emerald-900/10 text-[11px] text-emerald-800 font-semibold flex items-center justify-between">
                <span>Bộ phận: {tree.affectedParts || 'Toàn bộ'}</span>
                <span>Chi tiết →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
