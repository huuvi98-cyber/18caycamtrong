import React, { useState } from 'react';
import { TREES_DATA, LIST_TITLE } from '../data/treesData';
import { Search, Copy, Check, FileDown, ShieldCheck } from 'lucide-react';

export const TableView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredTrees = TREES_DATA.filter((tree) => {
    const matchesSearch =
      tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tree.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tree.stt.toString().includes(searchTerm);
    return matchesSearch;
  });

  const handleCopyText = () => {
    const textContent = `${LIST_TITLE}\n\nSTT\tTên loài cây\tLý do cấm trồng\n` +
      TREES_DATA.map((t) => `${t.stt}\t${t.name}\t${t.reason}`).join('\n');
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['STT', 'Ten loai cay', 'Ly do cam trong'],
      ...TREES_DATA.map((t) => [t.stt, `"${t.name}"`, `"${t.reason}"`])
    ];
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Danh_Muc_18_Loai_Cay_Cam_Trong_Ha_Noi.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-900/10 shadow-xs overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-4 sm:p-5 bg-emerald-50/50 border-b border-emerald-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 no-print">
        <div>
          <h2 className="text-xl font-bold font-serif-title text-emerald-950 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            {LIST_TITLE}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Bảng tra cứu gồm tên loài cây và lý do cấm trồng.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Search box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm loài cây hoặc lý do..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-emerald-900/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            />
          </div>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-white border border-emerald-900/20 rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
            title="Sao chép toàn bộ bảng"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shrink-0"
            title="Tải bảng CSV"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Tải CSV</span>
          </button>
        </div>
      </div>

      {/* Official Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase border-b border-emerald-950">
              <th className="py-3.5 px-4 sm:px-6 w-16 text-center border-r border-emerald-800">STT</th>
              <th className="py-3.5 px-4 sm:px-6 w-64 sm:w-72 border-r border-emerald-800">Tên loài cây</th>
              <th className="py-3.5 px-4 sm:px-6">Lý do cấm trồng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm text-slate-800">
            {filteredTrees.length > 0 ? (
              filteredTrees.map((tree) => (
                <tr
                  key={tree.stt}
                  className="hover:bg-emerald-50/60 transition-colors group"
                >
                  <td className="py-4 px-4 sm:px-6 font-mono text-center font-bold text-slate-700 border-r border-slate-100 group-hover:text-emerald-900">
                    {tree.stt}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-bold font-serif-title text-base sm:text-lg text-slate-900 border-r border-slate-100 group-hover:text-emerald-950">
                    {tree.name}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-800 leading-relaxed font-sans font-medium">
                    {tree.reason}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-8 text-center text-slate-500 text-sm">
                  Không tìm thấy loài cây phù hợp với từ khóa "{searchTerm}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-emerald-50/30 border-t border-emerald-900/10 text-xs text-slate-500 flex items-center justify-between">
        <span>Hiển thị {filteredTrees.length} / 18 loài cây cấm trồng</span>
        <span>UBND Thành phố Hà Nội</span>
      </div>
    </div>
  );
};
