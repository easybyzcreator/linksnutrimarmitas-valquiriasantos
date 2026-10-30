import { Language, ProductItem, PillarValue, WhatsAppServiceOption } from '../types';

export const BRAND_COLORS = {
  primary: '#2E4E18',     // Verde Floresta Profundo / Saudável
  secondary: '#D96B14',   // Laranja Quente Terracota / Apetitoso
  neutralLight: '#f6f8f5',// Fundo Clarinho Suave da Marca
  cardBg: '#ffffff',      // Fundo dos cartões
  extra: '#D96B14',       // Acento vibrante
};

export const ASSETS = {
  logo: '/images/logo_nutrimarmitas_novo.png',
  logoFallback: 'https://i.ibb.co/xq99v8qn/patitour-2026-10-29-T113021-750.png',
  valquiria: '/images/valquiria_top.png',
  valquiriaRemote: 'https://i.postimg.cc/59wHXZdn/EASY-BYZ-CREATOR-(32).png',
  valquiriaLocal: '/images/valquiria_top.png',
  pwaIcon: '/images/pwa_icon.png',
  ebcLogo: '/images/logo_ebc_green.png',
  // Local Gastronomic & Meal Prep Photography
  marmitaFitness: '/images/marmita_fit.png',
  nutricareGlp1: '/images/linha_nutricare_glp1.jpg',
  marmitaTradicional: '/images/marmita_gourmet.png',
  kitDetox: '/images/kit_detox_5dias.jpg',
};

export const CONTACT_LINKS = {
  valSiteUrl: 'https://nutrimarmitasbyvalquiriasantos.vercel.app/',
  menuUrl: 'https://nutrimarmitasbyvalquiriasantos.vercel.app/',
  consultationUrl: 'https://wa.me/5511943936946?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Nutricionista%20Valqu%C3%ADria%20Santos!',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61588974800502',
  instagramUrl: 'https://www.instagram.com/nutrimarmitas_vs/',
  whatsappNumber: '5511943936946',
  whatsappDisplay: '+55 (11) 94393-6946',
  ebcUrl: 'https://www.easybyzcreator.com',
  location: 'Marmitas Congeladas',
};

export const TRANSLATIONS = {
  pt: {
    langLabel: 'PT',
    langName: 'Português',
    brandName: 'NutriMarmitas',
    brandConcept: 'SABOR • SAÚDE • PRATICIDADE',
    subtitle: 'Marmitas Saudáveis, Práticas & Nutritivas por Valquiria Santos',
    chefBadge: 'Valquiria Santos • Marmitas & Nutrição',
    locationBadge: '📍 Marmitas Congeladas',
    deliveryBadge: '⏱️ Pronta em Minutos',
    bioIntro: 'Comer bem todos os dias é o maior ato de cuidado com a sua saúde. Mais sabor, leveza e praticidade na sua rotina.',
    readMore: 'Conheça a Valquiria & NutriMarmitas',
    agendarConsulta: 'Agendar Consulta com a Nutri',
    closeBio: 'Fechar história',
    quickActionsTitle: 'COMO PODEMOS CUIDAR DA SUA ALIMENTAÇÃO?',

    // Main Hero CTA
    mainCta: {
      tag: '⭐ CARDÁPIO NUTRI MARMITAS',
      title: 'Acesse Nosso Cardápio & Peça Online',
      description: 'Marmitas equilibradas, preparadas com ingredientes de verdade, temperos naturais e todo o cuidado de uma nutricionista. Ultracongeladas com sabor de comida caseira, monte o seu kit semanal e tenha praticidade para sua rotina e mais facilidade para cuidar da sua alimentação todos os dias.',
      buttonText: 'Acessar Cardápio Digital',
      url: CONTACT_LINKS.menuUrl,
    },

    // Social links bar
    socialLabels: {
      instagram: 'Instagram',
      instagramHandle: '@nutrimarmitas_vs',
      facebook: 'Facebook',
      facebookHandle: 'NutriMarmitas',
      whatsapp: 'WhatsApp',
      whatsappHandle: '+55 (11) 94393-6946',
      menu: 'Site & Cardápio',
      menuHandle: 'Site Oficial',
    },

    // Section Titles
    productsTitle: 'LINHAS DE MARMITAS & COMBOS',
    productsSubtitle: 'Nutrição de verdade, sabor inconfundível e praticidade para sua semana',
    viewDetails: 'Ver detalhes',
    orderOnWa: 'Consultar no WhatsApp',
    orderOnMenu: 'Pedir no Cardápio',

    // Products
    products: [
      {
        id: 'marmitas-fit-proteicas',
        title: 'Marmitas Fit & Hiperproteicas',
        category: 'Proteína & Energia',
        description: 'Comida de verdade, equilibrada e saborosa! Refeições completas com carnes magras selecionadas, frango suculento, carboidratos de qualidade e legumes coloridos. Alta densidade nutricional para seus objetivos.',
        badge: 'Linha Dia a Dia',
        image: ASSETS.marmitaFitness,
        tagline: 'Comida de verdade • Pronta em minutos',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Olá Valquiria, estava navegando no seu link do insta e gostaria de conhecer as marmitas da Linha Dia a Dia da NutriMarmitas!',
      },
      {
        id: 'linha-nutricare-glp1',
        title: 'Linha NutriCare GLP-1',
        category: 'Canetas Emagrecedoras',
        description: 'Refeições pensadas para quem utiliza canetas emagrecedoras, com atenção ao aporte proteico, porções equilibradas e praticidade no dia a dia.',
        badge: 'NutriCare GLP-1',
        image: ASSETS.nutricareGlp1,
        tagline: 'Aporte proteico e porções equilibradas',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Olá Valquiria, gostaria de conhecer as refeições da Linha NutriCare GLP-1!',
      },
      {
        id: 'especiais-valquiria',
        title: 'Especiais Linha Gourmet da Valquiria',
        category: 'Sabor de Casa',
        description: 'Criações autorais e receitas tradicionais em versões equilibradas e saudáveis, trazendo o carinho da comida caseira para o seu dia a dia.',
        badge: 'Receita Especial',
        image: ASSETS.marmitaTradicional,
        tagline: 'O autêntico sabor caseiro saudável',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Olá Valquiria, gostaria de saber quais pratos da Linha Gourmet estão no cardápio de hoje!',
      },
      {
        id: 'kit-detox-5dias',
        title: 'Kit Detox | Protocolo de 5 Dias',
        category: 'Linha Detox',
        description: '5 dias para começar a cuidar de você! Um protocolo nutricional com refeições equilibradas e sucos naturais, pensado para apoiar o emagrecimento saudável e os processos naturais de desintoxicação do organismo.',
        badge: 'Protocolo 5 Dias',
        image: ASSETS.kitDetox,
        tagline: 'Emagrecimento saudável e desintoxicação natural',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Olá Valquiria, gostaria de saber mais sobre o Kit Detox | Protocolo de 5 Dias!',
      },
    ] as ProductItem[],

    // WhatsApp sections
    whatsappSectionTitle: 'ATENDIMENTO VIA WHATSAPP',
    whatsappSectionSubtitle: 'Consulte estoque à pronta entrega e monte kits personalizados com a Valquiria',
    whatsappOrderNotice: 'Faça seu pedido diretamente pelo nosso Cardápio Digital',
    whatsappOptions: [
      {
        id: 'duvidas',
        title: 'Dúvidas, Cardápio & Kits Personalizados',
        subtitle: 'Consulte os sabores disponíveis a pronta entrega, pacotes semanais e mensais com descontos especiais.',
        badge: 'Resposta Rápida',
        message: 'Olá Valquiria, estava navegando no seu link da NutriMarmitas e gostaria de tirar uma dúvida com você!',
        icon: 'message',
        highlightColor: 'from-[#2E4E18] to-[#1d330f]',
      },
    ] as WhatsAppServiceOption[],

    // Story Highlights
    storyQuote: {
      headline: 'Sabor • Saúde • Praticidade',
      text: 'Se você quer mais energia, mais saúde e menos estresse na cozinha, a NutriMarmitas é a sua melhor parceira. Pratos preparados com ingredientes frescos, tempero natural e todo o equilíbrio nutricional que o seu corpo merece.',
      minasText: 'Marmitas congeladas e frescas. Ingredientes limpos, comida de verdade e respeito à sua saúde.',
    },

    // 4 Pillars
    pillars: [
      {
        title: 'Comida de Verdade',
        description: 'Ingredientes frescos, carnes de primeira e vegetais selecionados com equilíbrio de nutrientes.',
        icon: 'Leaf',
      },
      {
        title: 'Pronta em Minutos',
        description: 'Congelamento que preserva a textura e o sabor fresco. Do freezer ao prato com total rapidez.',
        icon: 'Timer',
      },
      {
        title: 'Tempero Natural',
        description: '100% livre de conservantes químicos e excesso de sódio. Apenas ervas frescas e temperos reais.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Kits & Pronta Entrega',
        description: 'Kits semanais personalizados para otimizar sua rotina e manter sua geladeira sempre abastecida.',
        icon: 'Truck',
      },
    ] as PillarValue[],

    // Social follow section
    followInstagramTitle: 'SIGA NO INSTAGRAM',
    followInstagramSubtitle: 'Acompanhe a produção das marmitas, dicas de nutrição e novos sabores',
    followButton: 'Seguir no Instagram',

    // Modal full bio
    bioModal: {
      title: 'Minha história com a Nutrição',
      subtitle: 'Por Valquiria Santos • Nutricionista & Fundadora da NutriMarmitas',
      p1: 'Minha história com a Nutrição começou muito antes de eu me tornar nutricionista.',
      p2: 'Tudo começou em 2018, quando um exame de rotina mudou a forma como eu enxergava a alimentação.',
      p3: 'Todos os anos, eu costumava fazer meu acompanhamento com o médico clínico e realizar meus exames de check-up. Naquele ano, em fevereiro, os resultados mostraram pré-diabetes e alterações no colesterol.',
      p4: 'A NutriMarmitas nasceu para ser uma extensão do meu propósito como nutricionista: nutrição que transforma, alimentação que cuida e praticidade para tornar o saudável possível.',
      quoteHighlight: 'Nutrição que transforma. Alimentação que cuida. Praticidade para tornar o saudável possível.',
      section1Title: 'Minha história com a Nutrição',
      section1Subtitle: 'Minha história com a Nutrição começou muito antes de eu me tornar nutricionista.',
      section1Paragraphs: [
        'Tudo começou em 2018, quando um exame de rotina mudou a forma como eu enxergava a alimentação.',
        'Todos os anos, eu costumava fazer meu acompanhamento com o médico clínico e realizar meus exames de check-up. Naquele ano, em fevereiro, os resultados mostraram pré-diabetes e alterações no colesterol.',
        'Meu médico optou por não iniciar medicamentos naquele momento. Disse que eu era muito jovem e me orientou a fazer mudanças no estilo de vida: melhorar minha alimentação e incluir exercícios físicos na minha rotina.',
        'Naquela época, eu estava cerca de 12 kg acima do meu peso saudável.',
        'Foi então que decidi mudar.',
        'Comecei a transformar minha alimentação por conta própria, buscando informações e acompanhando uma nutricionista pela internet, colocando em prática as orientações e dicas que aprendia.',
        'E em apenas três meses, algo que me marcou profundamente aconteceu.',
        'Voltei ao médico, repeti meus exames e os resultados haviam melhorado de forma impressionante.',
        'Foi naquele momento que descobri, na prática, o poder que a alimentação tem sobre a nossa saúde.',
        'Percebi que a alimentação não era apenas sobre peso, estética ou aparência. Ela tinha o poder de transformar a minha saúde e a minha vida.',
        'E foi aí que nasceu meu interesse pela Nutrição.',
        'Comecei a estudar sobre o assunto, cada vez mais encantada com tudo o que a alimentação poderia proporcionar. Até que, em fevereiro de 2020, tomei uma decisão que mudaria minha trajetória: entrei para a faculdade de Nutrição.',
        'Durante a graduação, fui me apaixonando cada vez mais pela profissão. E assim que me formei, tirei meu registro profissional e comecei a atender em consultório.',
        'Desde então, foram muitos pacientes, muitas histórias e muitas vidas transformadas através da Nutrição.',
        'Hoje posso dizer que a Nutrição é uma das minhas grandes paixões.',
        'Acredito que cuidar da alimentação é também cuidar da saúde, da autoestima, da rotina e da relação que cada pessoa constrói com a comida.',
      ],
      section2Title: 'E então nasceu a NutriMarmitas',
      section2Paragraphs: [
        'Mas, ao longo dos meus atendimentos, comecei a perceber algo que se repetia na história de muitos dos meus pacientes.',
        'Eles queriam se alimentar melhor.',
        'Sabiam da importância de seguir o plano alimentar.',
        'Tinham vontade de mudar.',
        'Mas muitas vezes faltava tempo.',
        'A correria do dia a dia, o trabalho, a família e todas as responsabilidades tornavam difícil planejar as refeições, comprar os ingredientes, cozinhar e organizar tudo.',
        'E percebi que, para muitas pessoas, o problema não era não saber o que comer. Era conseguir colocar aquilo em prática.',
        'Foi dessa percepção que nasceu a NutriMarmitas.',
        'Eu quis ir além dos atendimentos.',
        'Quis encontrar uma maneira de ajudar meus pacientes também na rotina, oferecendo uma alimentação saudável, prática, saborosa e planejada, sem que a falta de tempo fosse um obstáculo para cuidar da própria saúde.',
        'Foi assim que criei a NutriMarmitas: pensando no bem-estar, na praticidade e na realidade das pessoas que confiam no meu trabalho.',
        'Cada refeição é pensada e preparada com o mesmo cuidado que tenho ao elaborar um plano alimentar: buscando equilíbrio, qualidade e praticidade.',
      ],
      manifestoTitle: '❤️ Porque, para mim, Nutrição é isso:',
      manifestoLines: [
        'Não é apenas dizer o que uma pessoa deve comer.',
        'É ajudá-la a encontrar maneiras possíveis de cuidar da alimentação dentro da vida que ela realmente tem.',
        'E foi justamente por acreditar nisso que nasceu a NutriMarmitas.',
        'Uma extensão do meu propósito como nutricionista.',
      ],
      manifestoPillars: [
        'Nutrição que transforma.',
        'Alimentação que cuida.',
        'Praticidade para tornar o saudável possível.',
      ],
    },

    // Features List
    featuresList: [
      'NUTRIMARMITAS BY VALQUIRIA SANTOS',
      'Marmitas saudáveis, saborosas e práticas para a sua semana.',
      'Ingredientes frescos e de procedência selecionada',
      'Zero conservantes e temperos 100% naturais',
      'Prontinhas para aquecer no micro-ondas ou banho-maria',
      'Opções Fit, Hiperproteicas, Low Carb e Tradicionais',
      'Kits econômicos semanais e mensais',
      'Atendimento próximo e carinhoso com a Valquiria Santos',
    ],

    share: 'Compartilhar',
    copiedToast: 'Link copiado para a área de transferência!',
    qrCodeTitle: 'QR Code NutriMarmitas',
    qrCodeSubtitle: 'Aponte a câmera do celular para abrir o perfil',
    devBy: 'DESENVOLVIDO POR',
  },

  en: {
    langLabel: 'EN',
    langName: 'English',
    brandName: 'NutriMarmitas',
    brandConcept: 'FLAVOR • HEALTH • CONVENIENCE',
    subtitle: 'Healthy, Balanced & High-Protein Meal Prep by Valquiria Santos',
    chefBadge: 'Valquiria Santos • Nutrition & Meal Prep',
    locationBadge: '📍 Fresh & Frozen Healthy Meals',
    deliveryBadge: '⏱️ Ready in Minutes',
    bioIntro: 'Eating well every day is the highest form of self-care. Wholesome flavor, lightness, and everyday convenience.',
    readMore: 'Meet Valquiria & NutriMarmitas',
    closeBio: 'Close Story',
    quickActionsTitle: 'HOW CAN WE NOURISH YOUR ROUTINE?',

    // Main Hero CTA
    mainCta: {
      tag: '⭐ OFFICIAL NUTRIMARMITAS MENU',
      title: 'Access Our Menu & Order Online',
      description: 'Balanced meals, flash-frozen to preserve homemade fresh taste with 100% natural seasonings. Pick your weekly meal kit and save precious time!',
      buttonText: 'Open Digital Menu',
      url: CONTACT_LINKS.menuUrl,
    },

    // Social links bar
    socialLabels: {
      instagram: 'Instagram',
      instagramHandle: '@nutrimarmitas_vs',
      facebook: 'Facebook',
      facebookHandle: 'NutriMarmitas',
      whatsapp: 'WhatsApp',
      whatsappHandle: '+55 (11) 94393-6946',
      menu: 'Website & Menu',
      menuHandle: 'Official Website',
    },

    // Section Titles
    productsTitle: 'MEAL PREP LINES & KITS',
    productsSubtitle: 'Real nutrition, comforting flavor and maximum daily convenience',
    viewDetails: 'View details',
    orderOnWa: 'Inquire on WhatsApp',
    orderOnMenu: 'Order on Menu',

    // Products
    products: [
      {
        id: 'marmitas-fit-proteicas',
        title: 'Fit & High-Protein Meal Prep',
        category: 'Protein & Energy',
        description: 'Complete meals packed with lean meats, juicy poultry, complex carbs, and colorful steamed veggies for peak performance and recovery.',
        badge: 'Best Seller',
        image: ASSETS.marmitaFitness,
        tagline: 'Real food • Ready in minutes',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Hello Valquiria, I would like to learn more about NutriMarmitas high-protein meal prep options!',
      },
      {
        id: 'linha-nutricare-glp1',
        title: 'NutriCare GLP-1 Line',
        category: 'GLP-1 Support',
        description: 'Thoughtfully designed meals for those on GLP-1 therapies, focusing on optimal protein intake, balanced portions, and daily ease.',
        badge: 'NutriCare GLP-1',
        image: ASSETS.nutricareGlp1,
        tagline: 'High protein • Balanced portions',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Hello Valquiria, I would like to learn more about the NutriCare GLP-1 meals!',
      },
      {
        id: 'especiais-valquiria',
        title: 'Valquiria’s Homemade Specials',
        category: 'Comfort & Taste',
        description: 'Signature culinary creations combining the warmth of home cooking with functional nutrition standards.',
        badge: 'Special Recipe',
        image: ASSETS.marmitaTradicional,
        tagline: 'Authentic wholesome homemade taste',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Hello Valquiria, I would like to check which special dishes are on today’s menu!',
      },
      {
        id: 'kit-detox-5dias',
        title: 'Detox Kit | 5-Day Protocol',
        category: 'Detox & Wellness',
        description: '5 days to start caring for yourself! A nutritional protocol with balanced meals and natural juices, designed to support healthy weight loss and natural detox.',
        badge: '5-Day Protocol',
        image: ASSETS.kitDetox,
        tagline: 'Healthy weight loss and natural detox',
        actionUrl: CONTACT_LINKS.menuUrl,
        whatsappMessage: 'Hello Valquiria, I would like to know more about the Detox Kit 5-Day Protocol!',
      },
    ] as ProductItem[],

    // WhatsApp sections
    whatsappSectionTitle: 'WHATSAPP CONCIERGE',
    whatsappSectionSubtitle: 'Check immediate stock and order personalized weekly meal packs with Valquiria',
    whatsappOrderNotice: 'Orders are placed directly via our Online Digital Menu',
    whatsappOptions: [
      {
        id: 'duvidas',
        title: 'Questions, Menu & Custom Packs',
        subtitle: 'Inquire about available meals in stock, weekly and monthly meal prep combos with special discounts.',
        badge: 'Fast Response',
        message: 'Hello Valquiria, I was browsing your NutriMarmitas link and would like to ask a question!',
        icon: 'message',
        highlightColor: 'from-[#2E4E18] to-[#1d330f]',
      },
    ] as WhatsAppServiceOption[],

    // Story Highlights
    storyQuote: {
      headline: 'Flavor • Health • Convenience',
      text: 'Eating well is the first step toward lasting health and vitality. NutriMarmitas brings you balanced, nutrient-dense home-cooked meals ready in minutes, so you never have to choose between your health and your time.',
      minasText: 'Healthy meal prep delivered fresh and frozen. Honest culinary care for your daily lifestyle.',
    },

    // 4 Pillars
    pillars: [
      {
        title: 'Real Food First',
        description: 'Wholesome ingredients, lean proteins, and selected veggies crafted with balanced macros.',
        icon: 'Leaf',
      },
      {
        title: 'Ready in Minutes',
        description: 'Prepared and frozen to preserve homemade texture and freshness. Straight from freezer to microwave.',
        icon: 'Timer',
      },
      {
        title: 'Natural Seasoning',
        description: '100% free from chemical preservatives or excess sodium. Only genuine herbs and natural spices.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Weekly Kits',
        description: 'Personalized meal packages designed to simplify your weekly routine and keep your fridge stocked.',
        icon: 'Truck',
      },
    ] as PillarValue[],

    // Social follow section
    followInstagramTitle: 'FOLLOW ON INSTAGRAM',
    followInstagramSubtitle: 'Follow kitchen prep, nutrition tips and weekly flavor updates',
    followButton: 'Follow on Instagram',

    // Modal full bio
    bioModal: {
      title: 'NutriMarmitas by Valquiria Santos',
      subtitle: 'Wholesome food made with heart and nutritional balance',
      p1: 'NutriMarmitas was born from Valquiria Santos’s passion to simplify healthy eating, proving that wholesome food can be comforting, flavorful, and effortless.',
      p2: 'Under Valquiria’s culinary direction, each dish marries the warmth of artisan cooking with healthy nutrition balance, providing delicious and energizing meal prep.',
      p3: 'All of our meals are packed in BPA-free containers and prepared without artificial preservatives, ensuring peace of mind and convenience for your routine.',
      p4: 'Choose between ready-to-deliver meals and custom weekly or monthly kits to maintain your wellness goals without spending hours in the kitchen.',
      quoteHighlight: '"Taking care of your daily nutrition is the first step to enjoying more energy, vitality, and quality of life."',
    },

    featuresList: [
      'NUTRIMARMITAS BY VALQUIRIA SANTOS',
      'Healthy, delicious, and convenient meal prep for your week.',
      'Fresh and carefully selected ingredients',
      'Zero artificial preservatives & 100% natural herbs',
      'Ready to heat in the microwave or water bath in minutes',
      'High-Protein, Fit, Low Carb and Comfort lines',
      'Cost-effective weekly and monthly bundles',
      'Friendly and personal support with Valquiria Santos',
    ],

    share: 'Share',
    copiedToast: 'Link copied to clipboard!',
    qrCodeTitle: 'NutriMarmitas QR Code',
    qrCodeSubtitle: 'Scan with your smartphone camera to open profile',
    devBy: 'DEVELOPED BY',
  },
};
