export interface TreeItem {
  stt: number;
  name: string;
  reason: string;
  categories: Array<'toxic' | 'thorns' | 'brittle' | 'sanitation'>;
  riskLevel: 'Cực kỳ nguy hiểm' | 'Nguy hiểm cao' | 'Rủi ro đô thị';
  affectedParts?: string;
  iconType: 'skull' | 'biohazard' | 'thorn' | 'wind' | 'leaf-trash' | 'climb';
  summaryBadge: string;
}

export const LIST_TITLE = "Danh mục cây cấm trồng trên địa bàn Hà Nội:";
export const SUB_TITLE = "Ban hành kèm theo văn bản chính thức của UBND Thành phố Hà Nội";

export const TREES_DATA: TreeItem[] = [
  {
    stt: 1,
    name: "Bã đậu (Vông đồng)",
    reason: "Cây có nhựa và hạt chứa độc tố",
    categories: ["toxic"],
    riskLevel: "Nguy hiểm cao",
    affectedParts: "Nhựa cây và Hạt",
    iconType: "biohazard",
    summaryBadge: "Độc tố nhựa và hạt"
  },
  {
    stt: 2,
    name: "Bồ hòn",
    reason: "Quả có chứa chất độc",
    categories: ["toxic"],
    riskLevel: "Nguy hiểm cao",
    affectedParts: "Quả",
    iconType: "biohazard",
    summaryBadge: "Quả chứa chất độc"
  },
  {
    stt: 3,
    name: "Bồ kết",
    reason: "Thân có nhiều gai rất to",
    categories: ["thorns"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Thân cây",
    iconType: "thorn",
    summaryBadge: "Gai thân rất to"
  },
  {
    stt: 4,
    name: "Cao su",
    reason: "Cành nhánh giòn, dễ gãy",
    categories: ["brittle"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Cành và Nhánh",
    iconType: "wind",
    summaryBadge: "Cành giòn dễ gãy"
  },
  {
    stt: 5,
    name: "Cô ca cảnh",
    reason: "Lá có chất cocaine gây nghiện",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Lá",
    iconType: "skull",
    summaryBadge: "Chất gây nghiện (Cocaine)"
  },
  {
    stt: 6,
    name: "Bông gòn",
    reason: "Cành nhánh giòn, dễ gãy; quả chín phát tán ảnh hưởng vệ sinh đường phố",
    categories: ["brittle", "sanitation"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Cành nhánh và Quả chín",
    iconType: "leaf-trash",
    summaryBadge: "Cành giòn và Bông gây bẩn"
  },
  {
    stt: 7,
    name: "Lòng mức (các loại)",
    reason: "Quả chín phát tán, hạt có lông ảnh hưởng môi trường",
    categories: ["sanitation"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Quả chín và Hạt có lông",
    iconType: "leaf-trash",
    summaryBadge: "Hạt lông phát tán"
  },
  {
    stt: 8,
    name: "Mã tiền",
    reason: "Hạt có chứa chất độc",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Hạt",
    iconType: "skull",
    summaryBadge: "Hạt cực độc (Strychnine)"
  },
  {
    stt: 9,
    name: "Me keo",
    reason: "Thân và cành nhánh có nhiều gai",
    categories: ["thorns"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Thân và Cành nhánh",
    iconType: "thorn",
    summaryBadge: "Thân và cành nhiều gai"
  },
  {
    stt: 10,
    name: "Ô đầu (củ gấu tàu)",
    reason: "Cây có độc tố",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Toàn bộ cây và Củ",
    iconType: "skull",
    summaryBadge: "Củ và cây có độc tố"
  },
  {
    stt: 11,
    name: "Dướng",
    reason: "Loài cây xâm thực, cành giòn, rễ nông, dễ gãy đổ khi mưa bão, quả chín rụng gây mất vệ sinh môi trường.",
    categories: ["brittle", "sanitation"],
    riskLevel: "Nguy hiểm cao",
    affectedParts: "Rễ nông, cành giòn và quả chín",
    iconType: "wind",
    summaryBadge: "Cây xâm thực, dễ gãy đổ"
  },
  {
    stt: 12,
    name: "Xiro",
    reason: "Thân và cành nhánh có nhiều gai",
    categories: ["thorns"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Thân và Cành nhánh",
    iconType: "thorn",
    summaryBadge: "Nhiều gai nhọn"
  },
  {
    stt: 13,
    name: "Sưng Nam bộ, Sơn lu",
    reason: "Nhựa cây có chất làm ngứa, lở loét da",
    categories: ["toxic"],
    riskLevel: "Nguy hiểm cao",
    affectedParts: "Nhựa cây",
    iconType: "biohazard",
    summaryBadge: "Nhựa gây ngứa, lở loét da"
  },
  {
    stt: 14,
    name: "Tỏi độc",
    reason: "Toàn bộ thân cây tỏi có độc tố gây tử vong cho người và gia súc nếu ăn phải",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Toàn bộ thân cây",
    iconType: "skull",
    summaryBadge: "Cực độc gây tử vong"
  },
  {
    stt: 15,
    name: "Thông thiên",
    reason: "Hạt, lá, hoa, vỏ cây đều có chứa chất độc",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Hạt, lá, hoa, vỏ cây",
    iconType: "skull",
    summaryBadge: "Tất cả các bộ phận đều độc"
  },
  {
    stt: 16,
    name: "Trúc đào",
    reason: "Thân và lá có chất độc",
    categories: ["toxic"],
    riskLevel: "Cực kỳ nguy hiểm",
    affectedParts: "Thân và Lá",
    iconType: "skull",
    summaryBadge: "Thân và lá chứa chất độc"
  },
  {
    stt: 17,
    name: "Trứng cá",
    reason: "Trẻ em leo trèo hái quả, rụng làm ảnh hưởng vệ sinh đường phố",
    categories: ["sanitation"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Quả rụng và Nguy cơ leo trèo",
    iconType: "climb",
    summaryBadge: "Gây mất vệ sinh và Nguy cơ trèo"
  },
  {
    stt: 18,
    name: "Dâu da",
    reason: "Cành giòn, dễ gãy đổ, quả chín rụng gây mất vệ sinh môi trường",
    categories: ["brittle", "sanitation"],
    riskLevel: "Rủi ro đô thị",
    affectedParts: "Cành nhánh và Quả rụng",
    iconType: "wind",
    summaryBadge: "Cành giòn và Quả gây bẩn"
  }
];

export const CATEGORY_INFO = {
  all: { label: "Tất cả 18 loài cây", count: 18, color: "bg-emerald-800 text-white" },
  toxic: { label: "Chứa độc tố / Độc hại", count: 9, color: "bg-rose-100 text-rose-800 border-rose-200" },
  thorns: { label: "Thân và Cành có gai", count: 3, color: "bg-amber-100 text-amber-800 border-amber-200" },
  brittle: { label: "Cành giòn / Dễ gãy đổ", count: 4, color: "bg-orange-100 text-orange-800 border-orange-200" },
  sanitation: { label: "Gây mất vệ sinh đô thị", count: 5, color: "bg-teal-100 text-teal-800 border-teal-200" }
};

export const SOURCE_DOCUMENTS = [
  {
    id: "page_1",
    title: "Văn bản chính thức - Trang 1 (STT 1 - 9)",
    path: "/assets/aistudio/image_a042159a.png",
    description: "Bảng danh mục cây cấm trồng trên địa bàn Hà Nội từ STT 1 đến STT 9"
  },
  {
    id: "page_2",
    title: "Văn bản chính thức - Trang 2 (STT 9 - 18)",
    path: "/assets/aistudio/image_ba778acb.png",
    description: "Bảng danh mục cây cấm trồng trên địa bàn Hà Nội từ STT 9 đến STT 18"
  }
];
