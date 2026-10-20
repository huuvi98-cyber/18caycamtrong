import React, { useState } from 'react';
import { SOURCE_DOCUMENTS } from '../data/treesData';
import { FileSearch, ZoomIn, X, ExternalLink, ShieldCheck } from 'lucide-react';

export const SourceDocViewer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-xs">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold font-serif-title text-slate-900 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-emerald-700" />
              Tài Liệu Văn Bản Gốc Từ UBND Thành Phố Hà Nội
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Hình ảnh chụp bảng danh mục văn bản gốc được đối chiếu và trích xuất nguyên văn.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 text-emerald-900 text-xs font-semibold rounded-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            2 Trang Văn Bản
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOURCE_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-600 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="p-4 bg-emerald-900/5 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800">{doc.title}</span>
                <button
                  onClick={() => setSelectedImage(doc.path)}
                  className="p-1.5 rounded-lg bg-white text-emerald-800 hover:bg-emerald-100 transition-colors shadow-xs"
                  title="Phóng to xem tài liệu"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              <div
                onClick={() => setSelectedImage(doc.path)}
                className="relative cursor-pointer bg-white p-2 overflow-hidden flex items-center justify-center min-h-[360px]"
              >
                <img
                  src={doc.path}
                  alt={doc.title}
                  className="max-h-[500px] w-auto object-contain transition-transform group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4" /> Phóng to tài liệu
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-500">
                {doc.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-2 pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-800">
                Ảnh chụp văn bản gốc chính thức - UBND TP. Hà Nội
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto p-2 flex items-center justify-center max-h-[80vh]">
              <img
                src={selectedImage}
                alt="Document Full View"
                className="max-w-full max-h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
