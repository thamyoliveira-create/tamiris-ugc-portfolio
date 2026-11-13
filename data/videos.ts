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
    title: 'Hábitos saudáveis para dormir melhor',
    brand: 'Sleep Cycle',
    category: 'Review',
    description: 'Rotina noturna real, do jeito que acontece no meu quarto, mostrando como o app me ajuda a dormir melhor.',
    videoUrl: '/videos/video1.mp4',
    thumbnailUrl: '/videos/video1.jpg',
    featured: true,
  },
  {
    id: '2',
    title: '10/10 hábitos para desenvolver disciplina extrema',
    brand: 'Soundscape',
    category: 'Humor',
    description: 'Lista de hábitos com humor e muita sinceridade, do jeito que a disciplina funciona na vida real.',
    videoUrl: '/videos/video2.mp4',
    thumbnailUrl: '/videos/video2.jpg',
    featured: true,
  },
  {
    id: '4',
    title: 'Ganhos com a Fluencify',
    brand: 'Fluencify',
    category: 'Review',
    description: 'Mostrando na real como funcionam os ganhos como criadora na Fluencify.',
    videoUrl: '/videos/video4.mp4',
    thumbnailUrl: '/videos/video4.jpg',
  },
  {
    id: '6',
    title: '10/10 websites for entrepreneurs',
    brand: 'GoDaddy',
    category: 'Review',
    description: 'Lista rápida e divertida de sites que salvam a vida de quem empreende.',
    videoUrl: '/videos/video6.mp4',
    thumbnailUrl: '/videos/video6.jpg',
  },
  {
    id: '7',
    title: 'De 922 views para 1,1 milhão',
    brand: 'UGC',
    category: 'Humor',
    description: 'Reagindo do meu jeito quando um vídeo sai do nada e explode.',
    videoUrl: '/videos/video7.mp4',
    thumbnailUrl: '/videos/video7.jpg',
  },
  {
    id: '8',
    title: 'Quando lembro que lençol existe',
    brand: 'UGC',
    category: 'Humor',
    description: 'Respondendo comentário de toalha na cabeça, vida real sem cenário.',
    videoUrl: '/videos/video8.mp4',
    thumbnailUrl: '/videos/video8.jpg',
  },
  {
    id: '9',
    title: 'Que porr* a minha IA tá falando??',
    brand: 'Airlearn',
    category: 'Humor',
    description: 'Aprendendo inglês no iPad e rindo da pronúncia, do jeito que acontece de verdade.',
    videoUrl: '/videos/video9.mp4',
    thumbnailUrl: '/videos/video9.jpg',
  },
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

// Para mostrar a logo, coloque o arquivo em /public/marcas e preencha "logo".
export const BRANDS: { name: string; logo?: string }[] = [
  { name: "Fluencify", logo: "https://www.google.com/s2/favicons?domain=fluencify.io&sz=128" },
  { name: "Sleep Cycle", logo: "https://www.google.com/s2/favicons?domain=sleepcycle.com&sz=128" },
  { name: "Soundscape" },
  { name: "GoDaddy", logo: "https://www.google.com/s2/favicons?domain=godaddy.com&sz=128" },
  { name: "Airlearn" },
];

export const FUN_FACTS = [
  {
    title: "Viciada em Café ☕",
    text: "Meu sangue é 80% café coado e 20% desespero pré-prazo de entrega.",
    color: "bg-[#03E39D] text-[#1A0F1C]"
  },
  {
    title: "Professora de dia 📚",
    text: "Passo o dia em sala de aula, então explicar as coisas de um jeito simples virou meio que meu superpoder.",
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
