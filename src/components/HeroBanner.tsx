import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Info } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  // Leaf rustling positions & settings
  const leaves = [
    { top: '10%', left: '5%', size: 'w-10 h-10', duration: 3.5, delay: 0 },
    { top: '15%', right: '8%', size: 'w-12 h-12', duration: 4.2, delay: 0.5 },
    { top: '65%', left: '8%', size: 'w-14 h-14', duration: 3.8, delay: 1.2 },
    { top: '70%', right: '12%', size: 'w-11 h-11', duration: 4.5, delay: 0.8 },
    { top: '25%', left: '20%', size: 'w-8 h-8', duration: 3.2, delay: 1.5 },
    { top: '30%', right: '22%', size: 'w-9 h-9', duration: 3.9, delay: 0.3 },
  ];

  return (
    <div className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center overflow-hidden border-b border-emerald-900/10">
      {/* Full Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/assets/aistudio/image_7ef2b294.png"
          alt="Nền bìa Hà Nội Ban Hành Danh Mục 18 Loài Cây Cấm Trồng"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-95" />
      </motion.div>

      {/* Rustling & Swaying Leaves Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {leaves.map((leaf, index) => (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              top: leaf.top,
              left: leaf.left,
              right: leaf.right,
            }}
            animate={{
              rotate: [-8, 12, -6, 10, -4, 0],
              y: [0, -8, 6, -5, 3, 0],
              x: [0, 5, -4, 6, -2, 0],
              skewX: [-4, 6, -3, 0],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: leaf.delay,
            }}
            className={`text-emerald-300/60 drop-shadow-md ${leaf.size}`}
          >
            <Leaf className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block bg-emerald-950/85 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-7 rounded-2xl border border-white/20 shadow-2xl max-w-4xl"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-white tracking-wide leading-tight drop-shadow-md">
            HÀ NỘI BAN HÀNH DANH MỤC
          </h1>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans text-amber-300 tracking-wider mt-2 sm:mt-3 drop-shadow-xl uppercase">
            18 LOÀI CÂY
          </h2>
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans text-[#ea580c] tracking-wider mt-1 sm:mt-2 drop-shadow-xl uppercase">
            CẤM TRỒNG
          </h3>

          {/* Context Intro Text */}
          <div className="mt-5 pt-4 border-t border-white/20 text-xs sm:text-sm text-emerald-100 font-sans leading-relaxed max-w-3xl mx-auto text-left sm:text-center flex items-start sm:items-center justify-center gap-2">
            <Info className="w-4 h-4 text-amber-300 shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-emerald-50">
              Chủ tịch UBND TP Hà Nội vừa ký quyết định ban hành Quy định quản lý công viên, cây xanh, mặt nước trên địa bàn. Văn bản liệt kê danh mục 33 cây xanh đô thị, 18 cây bán ngập cùng <strong>18 loài cây cấm trồng</strong> do chứa độc tố, chất gây nghiện, có gai và cành giòn dễ gãy đổ.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
