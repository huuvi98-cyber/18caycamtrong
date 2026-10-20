import React from 'react';
import { TreeItem } from '../data/treesData';
import { X, ShieldAlert } from 'lucide-react';

interface TreeDetailModalProps {
  tree: TreeItem | null;
  onClose: () => void;
}

export const TreeDetailModal: React.FC<TreeDetailModalProps> = ({ tree, onClose }) => {
  if (!tree) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-emerald-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-emerald-900/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-emerald-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold px-3 py-1 rounded-lg bg-emerald-800 text-emerald-100 border border-emerald-700">
              {tree.stt}
            </span>
            <span className="text-xs font-semibold text-emerald-200">
              Danh mục cấm trồng
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-emerald-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Tree Name */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Tên loài cây
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-slate-900">
              {tree.name}
            </h2>
          </div>

          {/* Reason */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-900">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-700" />
              Lý do cấm trồng
            </div>
            <p className="text-base font-medium leading-relaxed text-slate-800">
              {tree.reason}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">UBND TP. Hà Nội</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
