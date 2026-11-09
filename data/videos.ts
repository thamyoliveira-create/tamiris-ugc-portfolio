export interface VideoItem {
  id: string;
  title: string;
  brand: string;
  category: 'Humor' | 'Review' | 'Unboxing' | 'Tutorial';
  description: string;
  videoUrl: string; // link do vídeo vertical ou caminho em /public
  thumbnailUrl: string;
  views?: string;
  featured?: boolean;
}

export const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Quando o boleto chega no dia que você jurou que era rica',
    brand: 'Nubank / Finanças',
    category: 'Humor',
    description: 'Sketch de humor mostrando a realidade de quem tenta planejar o mês mas o boleto chega antes do boleto anterior.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    views: '1.2M views',
    featured: true,
  },
  {
    id: '2',
    title: 'Testando o skincare que promete sumir com os Boletos da cara',
    brand: 'Sephora Brasil',
    category: 'Review',
    description: 'Review sincero e hilário de um sérum caríssimo testado após uma noite mal dormida de plantão no Excel.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    views: '850K views',
    featured: true,
  },
  {
    id: '3',
    title: 'Unboxing da caixas misteriosa que custou um rim e meio',
    brand: 'Shopee / Achadinhos',
    category: 'Unboxing',
    description: 'Abrindo pacotes duvidosos da internet com reação genuína de susto e alegria misturadas.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    views: '2.1M views',
    featured: true,
  },
  {
    id: '4',
    title: 'Como fingir que entendeu a reunião de 2 horas que podia ser um e-mail',
    brand: 'Corporate Life',
    category: 'Humor',
    description: 'Tutorial passo a passo de como acenar com a cabeça e soltar um "excelente ponto" na hora certa.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    views: '940K views',
    featured: false,
  },
  {
    id: '5',
    title: 'Passo a passo: fazendo miojo gourmet com status de MasterChef',
    brand: 'Maggi',
    category: 'Tutorial',
    description: 'Gastronomia caótica com direito a pitada de drama e muita risada na cozinha às 3h da manhã.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
    views: '670K views',
    featured: false,
  },
  {
    id: '6',
    title: 'Testando Airfryer de 8 em 1 que assa até os meus sentimentos',
    brand: 'Polishop / Casa',
    category: 'Review',
    description: 'Colocando a airfryer à prova com receitas improváveis e comentários ácidos.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    views: '1.5M views',
    featured: false,
  }
];

export const TESTIMONIALS = [
  {
    quote: "A Tamiris conseguiu traduzir o espírito da nossa marca em um vídeo de humor que viralizou em 24h. O CTR foi absurdo!",
    author: "Mariana Costa",
    role: "Head de Marketing @ Marca de Cosmeticos",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Trabalhar com a Tamiris é zero dor de cabeça. Roteiro afiado, atuação impecável e entrega antes do prazo.",
    author: "Lucas Silveira",
    role: "Gerente de Growth @ Fintech X",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "O público ama a naturalidade dela. Nossos clientes achavam que era uma recomendação de amiga, não publi!",
    author: "Camila Medeiros",
    role: "Coordenadora de Influenciadores @ E-commerce Y",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  }
];

export const BRANDS = [
  { name: "Nubank", logo: "⚡ Nubank" },
  { name: "Sephora", logo: "💄 Sephora" },
  { name: "Shopee", logo: "🛍️ Shopee" },
  { name: "Maggi", logo: "🍲 Maggi" },
  { name: "Ifood", logo: "🍔 iFood" },
  { name: "Netflix", logo: "🍿 Netflix" },
];

export const FUN_FACTS = [
  {
    title: "Viciada em Café ☕",
    text: "Meu sangue é 80% café coado e 20% desespero pré-prazo de entrega.",
    color: "bg-[#03E39D] text-[#1A0F1C]"
  },
  {
    title: "Atriz de Boxe de Roteiro 🥊",
    text: "Escrevo 15 piadas por vídeo, a diretoria escolhe 3 e a melhor de todas surge improvisada gravando.",
    color: "bg-[#FB58A7] text-[#1A0F1C]"
  },
  {
    title: "Raiz & Realidade 🌿",
    text: "Zero filtro de pele perfeito. Se o cabelo acordou com vida própria, ele vai pra cena assim mesmo.",
    color: "bg-[#F4B6DF] text-[#1A0F1C]"
  },
  {
    title: "Monstro do Edite 💻",
    text: "Corto silêncios mais rápido do que meu cérebro processa segunda-feira.",
    color: "bg-[#03E39D] text-[#1A0F1C]"
  }
];
