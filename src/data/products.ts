// Estructura de datos para productos y categorías
// Soporta navegación jerárquica y rutas individuales

export interface ProductFeature {
  name: string;
  description: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface SubProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: ProductFeature[];
  specifications: ProductSpecification[];
  imageUrl: string;
  imageAlt: string;
  price?: {
    value: number;
    unit: string;
    currency: string;
  };
  inStock: boolean;
  popular?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  iconPath: string;
  imageUrl: string;
  imageAlt: string;
  subProducts: SubProduct[];
  featured: boolean;
  order: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  hasSubMenu: boolean;
  subItems?: NavigationItem[];
}

// Catálogo de productos
export const productCategories: ProductCategory[] = [
  {
    id: "spc",
    name: "Pisos SPC",
    slug: "spc",
    description:
      "Stone Plastic Composite - La máxima resistencia y durabilidad en pisos de vinilo. Perfectos para áreas de alto tráfico comercial y residencial.",
    shortDescription: "Máxima resistencia y durabilidad",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    imageUrl: "/products/spc-category.jpg",
    imageAlt: "Categoría de pisos SPC",
    featured: true,
    order: 1,
    subProducts: [
      {
        id: "spc-roble-natural",
        name: "SPC Roble Natural",
        slug: "roble-natural",
        shortDescription: "Elegante acabado en tonos naturales de roble",
        fullDescription:
          "Piso de vinilo SPC con acabado en roble natural. Textura realista que imita la veta de la madera con la durabilidad del stone plastic composite. Ideal para salas, comedores y recámaras.",
        features: [
          {
            name: "100% Impermeable",
            description: "Resistente al agua y humedad en todas sus capas",
          },
          {
            name: "Instalación Click",
            description: "Sistema de ensamblaje rápido sin pegamento",
          },
          {
            name: "Alta Durabilidad",
            description: "Capa de desgaste AC5 para uso comercial intenso",
          },
          {
            name: "Garantía 25 años",
            description: "Garantía residencial de 25 años",
          },
        ],
        specifications: [
          { label: "Espesor", value: "5.5mm" },
          { label: "Capa de desgaste", value: "0.5mm (AC5)" },
          { label: "Dimensiones", value: "1220mm x 183mm" },
          { label: "Textura", value: "Grabado en registro" },
          { label: "Instalación", value: "Sistema Click" },
          { label: "Uso", value: "Residencial y Comercial" },
        ],
        imageUrl: "/products/spc-roble-natural.jpg",
        imageAlt: "Piso SPC acabado roble natural",
        price: {
          value: 450,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
        popular: true,
      },
      {
        id: "spc-gris-cemento",
        name: "SPC Gris Cemento",
        slug: "gris-cemento",
        shortDescription: "Diseño moderno con acabado tipo cemento pulido",
        fullDescription:
          "Piso de vinilo SPC con acabado en gris cemento. Diseño contemporáneo perfecto para estilos industriales y minimalistas. Altamente resistente al tráfico pesado.",
        features: [
          {
            name: "Estilo Industrial",
            description: "Acabado tipo cemento pulido ultra realista",
          },
          {
            name: "Anti-manchas",
            description: "Superficie sellada que repele manchas",
          },
          {
            name: "Silencioso",
            description: "Reduce hasta 50% el ruido de impacto",
          },
          {
            name: "Fácil Limpieza",
            description: "Mantenimiento mínimo con productos estándar",
          },
        ],
        specifications: [
          { label: "Espesor", value: "6.0mm" },
          { label: "Capa de desgaste", value: "0.7mm (AC5)" },
          { label: "Dimensiones", value: "914mm x 457mm" },
          { label: "Textura", value: "Mate con relieve" },
          { label: "Instalación", value: "Sistema Click" },
          { label: "Uso", value: "Comercial Intenso" },
        ],
        imageUrl: "/products/spc-gris-cemento.jpg",
        imageAlt: "Piso SPC acabado gris cemento",
        price: {
          value: 520,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
      },
      {
        id: "spc-nogal-oscuro",
        name: "SPC Nogal Oscuro",
        slug: "nogal-oscuro",
        shortDescription: "Tonos oscuros elegantes y sofisticados",
        fullDescription:
          "Piso de vinilo SPC en tonos nogal oscuro. Acabado premium que aporta elegancia y calidez a cualquier espacio. Perfecto para oficinas y espacios comerciales de alto nivel.",
        features: [
          {
            name: "Acabado Premium",
            description: "Textura de madera natural de alta fidelidad",
          },
          {
            name: "Resistencia UV",
            description: "No se decolora con exposición solar",
          },
          {
            name: "Anti-bacteriano",
            description: "Tratamiento antibacteriano integrado",
          },
          {
            name: "Garantía Extendida",
            description: "30 años de garantía residencial",
          },
        ],
        specifications: [
          { label: "Espesor", value: "5.0mm" },
          { label: "Capa de desgaste", value: "0.5mm (AC5)" },
          { label: "Dimensiones", value: "1524mm x 228mm" },
          { label: "Textura", value: "Veta de madera 3D" },
          { label: "Instalación", value: "Sistema Click Premium" },
          { label: "Uso", value: "Residencial y Comercial" },
        ],
        imageUrl: "/products/spc-nogal-oscuro.jpg",
        imageAlt: "Piso SPC acabado nogal oscuro",
        price: {
          value: 580,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
        popular: true,
      },
    ],
  },
  {
    id: "wpc",
    name: "Pisos WPC",
    slug: "wpc",
    description:
      "Wood Plastic Composite - Confort y calidez con núcleo de espuma. Ideales para hogares que buscan estética natural con máximo confort bajo los pies.",
    shortDescription: "Confort y calidez natural",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    imageUrl: "/products/wpc-category.jpg",
    imageAlt: "Categoría de pisos WPC",
    featured: true,
    order: 2,
    subProducts: [
      {
        id: "wpc-pino-escandinavo",
        name: "WPC Pino Escandinavo",
        slug: "pino-escandinavo",
        shortDescription: "Tonos claros estilo nórdico con máximo confort",
        fullDescription:
          "Piso de vinilo WPC con acabado en pino escandinavo. Tonos claros y naturales perfectos para espacios modernos y luminosos. Núcleo de espuma para máximo confort.",
        features: [
          {
            name: "Núcleo de Espuma",
            description: "20% más confortable bajo los pies",
          },
          {
            name: "Reducción de Ruido",
            description: "Hasta 60% menos ruido de impacto",
          },
          {
            name: "Aislamiento Térmico",
            description: "Superficie cálida al tacto",
          },
          {
            name: "Instalación Flotante",
            description: "No requiere adhesivos ni preparación especial",
          },
        ],
        specifications: [
          { label: "Espesor", value: "7.0mm" },
          { label: "Capa de desgaste", value: "0.5mm (AC4)" },
          { label: "Dimensiones", value: "1220mm x 183mm" },
          { label: "Textura", value: "Madera cepillada" },
          { label: "Instalación", value: "Click con espuma integrada" },
          { label: "Uso", value: "Residencial" },
        ],
        imageUrl: "/products/wpc-pino-escandinavo.jpg",
        imageAlt: "Piso WPC acabado pino escandinavo",
        price: {
          value: 420,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
        popular: true,
      },
      {
        id: "wpc-encino-rustico",
        name: "WPC Encino Rústico",
        slug: "encino-rustico",
        shortDescription: "Acabado rústico con nudos y vetas naturales",
        fullDescription:
          "Piso de vinilo WPC con acabado en encino rústico. Textura auténtica con nudos y vetas que recrean la madera natural. Ideal para ambientes cálidos y acogedores.",
        features: [
          {
            name: "Textura Auténtica",
            description: "Nudos y vetas de madera real",
          },
          {
            name: "Cálido al Tacto",
            description: "Sensación de madera natural",
          },
          {
            name: "Resistente a Mascotas",
            description: "Resistente a arañazos de mascotas",
          },
          {
            name: "Eco-Friendly",
            description: "Materiales reciclables 100%",
          },
        ],
        specifications: [
          { label: "Espesor", value: "6.5mm" },
          { label: "Capa de desgaste", value: "0.3mm (AC4)" },
          { label: "Dimensiones", value: "1210mm x 190mm" },
          { label: "Textura", value: "Rústica con nudos" },
          { label: "Instalación", value: "Sistema Click" },
          { label: "Uso", value: "Residencial" },
        ],
        imageUrl: "/products/wpc-encino-rustico.jpg",
        imageAlt: "Piso WPC acabado encino rústico",
        price: {
          value: 390,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
      },
    ],
  },
  {
    id: "lvt",
    name: "Pisos LVT",
    slug: "lvt",
    description:
      "Luxury Vinyl Tile - Elegancia y versatilidad en diseños premium. Imitan madera y piedra natural con realismo excepcional para espacios de alto nivel.",
    shortDescription: "Elegancia y diseños premium",
    iconPath:
      "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    imageUrl: "/products/lvt-category.jpg",
    imageAlt: "Categoría de pisos LVT",
    featured: true,
    order: 3,
    subProducts: [
      {
        id: "lvt-marmol-carrara",
        name: "LVT Mármol Carrara",
        slug: "marmol-carrara",
        shortDescription: "Elegancia de mármol italiano en vinilo",
        fullDescription:
          "Piso de vinilo LVT con diseño de mármol Carrara. Acabado premium que imita perfectamente las vetas del mármol italiano. Ideal para espacios elegantes y sofisticados.",
        features: [
          {
            name: "Diseño Premium",
            description: "Vetas de mármol ultra realistas",
          },
          {
            name: "Antideslizante",
            description: "Superficie segura incluso mojada (R10)",
          },
          {
            name: "Fácil Instalación",
            description: "Sistema adhesivo o flotante",
          },
          {
            name: "Resistente a Manchas",
            description: "Superficie sellada anti-manchas",
          },
        ],
        specifications: [
          { label: "Espesor", value: "4.5mm" },
          { label: "Capa de desgaste", value: "0.5mm (AC5)" },
          { label: "Dimensiones", value: "457mm x 457mm" },
          { label: "Textura", value: "Mármol pulido mate" },
          { label: "Instalación", value: "Adhesiva o Click" },
          { label: "Uso", value: "Residencial Premium" },
        ],
        imageUrl: "/products/lvt-marmol-carrara.jpg",
        imageAlt: "Piso LVT diseño mármol Carrara",
        price: {
          value: 650,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
        popular: true,
      },
      {
        id: "lvt-madera-recuperada",
        name: "LVT Madera Recuperada",
        slug: "madera-recuperada",
        shortDescription: "Estilo vintage con madera envejecida",
        fullDescription:
          "Piso de vinilo LVT con diseño de madera recuperada. Acabado vintage que recrea el encanto de maderas antiguas con variaciones de color y textura únicas.",
        features: [
          {
            name: "Diseño Único",
            description: "Cada tabla con variaciones naturales",
          },
          {
            name: "Estilo Vintage",
            description: "Acabado envejecido auténtico",
          },
          {
            name: "Versatilidad",
            description: "Combina con múltiples estilos decorativos",
          },
          {
            name: "Durabilidad",
            description: "Resistencia comercial AC5",
          },
        ],
        specifications: [
          { label: "Espesor", value: "5.0mm" },
          { label: "Capa de desgaste", value: "0.5mm (AC5)" },
          { label: "Dimensiones", value: "1220mm x 180mm" },
          { label: "Textura", value: "Madera envejecida" },
          { label: "Instalación", value: "Sistema Click" },
          { label: "Uso", value: "Residencial y Comercial" },
        ],
        imageUrl: "/products/lvt-madera-recuperada.jpg",
        imageAlt: "Piso LVT diseño madera recuperada",
        price: {
          value: 550,
          unit: "m²",
          currency: "MXN",
        },
        inStock: true,
      },
    ],
  },
  {
    id: "accesorios",
    name: "Accesorios",
    slug: "accesorios",
    description:
      "Complementos esenciales para instalación profesional. Desde zoclos hasta perfiles de transición y productos de mantenimiento.",
    shortDescription: "Complementos para instalación",
    iconPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    imageUrl: "/products/accessories-category.jpg",
    imageAlt: "Categoría de accesorios",
    featured: false,
    order: 4,
    subProducts: [
      {
        id: "acc-zoclo-pvc",
        name: "Zócalo PVC",
        slug: "zoclo-pvc",
        shortDescription: "Zócalos en diversos acabados para remate perfecto",
        fullDescription:
          "Zócalos de PVC de alta calidad disponibles en múltiples acabados para combinar con tu piso de vinilo. Fácil instalación con sistema de clip o adhesivo.",
        features: [
          {
            name: "Varios Acabados",
            description: "Disponible en todos los acabados de pisos",
          },
          {
            name: "Fácil Instalación",
            description: "Sistema de clip o adhesivo",
          },
          {
            name: "Flexible",
            description: "Se adapta a irregularidades de pared",
          },
          {
            name: "Resistente",
            description: "No se deforma ni decolora",
          },
        ],
        specifications: [
          { label: "Alto", value: "60mm o 80mm" },
          { label: "Longitud", value: "2400mm" },
          { label: "Material", value: "PVC de alta densidad" },
          { label: "Instalación", value: "Clip o adhesivo" },
        ],
        imageUrl: "/products/acc-zoclo-pvc.jpg",
        imageAlt: "Zócalo PVC para pisos de vinilo",
        price: {
          value: 85,
          unit: "pieza",
          currency: "MXN",
        },
        inStock: true,
      },
      {
        id: "acc-perfiles-transicion",
        name: "Perfiles de Transición",
        slug: "perfiles-transicion",
        shortDescription: "Perfiles para uniones y cambios de nivel",
        fullDescription:
          "Perfiles de transición en aluminio y PVC para uniones perfectas entre diferentes pisos o desniveles. Disponibles en múltiples acabados.",
        features: [
          {
            name: "Versatilidad",
            description: "Para todo tipo de transiciones",
          },
          {
            name: "Acabados Premium",
            description: "Aluminio anodizado y PVC",
          },
          {
            name: "Instalación Simple",
            description: "Incluye kit de instalación",
          },
          {
            name: "Durabilidad",
            description: "Resistente al tráfico intenso",
          },
        ],
        specifications: [
          { label: "Longitud", value: "900mm o 2700mm" },
          { label: "Material", value: "Aluminio o PVC" },
          { label: "Tipos", value: "Recto, reducción, escalera" },
          { label: "Instalación", value: "Atornillado o adhesivo" },
        ],
        imageUrl: "/products/acc-perfiles-transicion.jpg",
        imageAlt: "Perfiles de transición para pisos",
        price: {
          value: 120,
          unit: "pieza",
          currency: "MXN",
        },
        inStock: true,
      },
      {
        id: "acc-kit-limpieza",
        name: "Kit de Limpieza Profesional",
        slug: "kit-limpieza",
        shortDescription: "Productos especializados para mantenimiento",
        fullDescription:
          "Kit completo de limpieza y mantenimiento para pisos de vinilo. Incluye limpiador concentrado, mopa de microfibra y protector de brillo.",
        features: [
          {
            name: "Fórmula Especializada",
            description: "Desarrollada específicamente para vinilo",
          },
          {
            name: "No Deja Residuos",
            description: "Secado rápido sin marcas",
          },
          {
            name: "Protección Extra",
            description: "Capa protectora que alarga la vida del piso",
          },
          {
            name: "Eco-Friendly",
            description: "Fórmula biodegradable",
          },
        ],
        specifications: [
          {
            label: "Contenido",
            value: "Limpiador 1L + Mopa + Protector 500ml",
          },
          { label: "Rendimiento", value: "Hasta 100m² por botella" },
          { label: "Uso", value: "Mensual recomendado" },
        ],
        imageUrl: "/products/acc-kit-limpieza.jpg",
        imageAlt: "Kit de limpieza profesional para pisos de vinilo",
        price: {
          value: 450,
          unit: "kit",
          currency: "MXN",
        },
        inStock: true,
        popular: true,
      },
    ],
  },
];

// Función helper para obtener navegación jerárquica
export function getProductNavigation(): NavigationItem[] {
  return productCategories
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      label: category.name,
      href: `/productos/${category.slug}`,
      description: category.shortDescription,
      hasSubMenu: category.subProducts.length > 0,
      subItems: category.subProducts.map((subProduct) => ({
        label: subProduct.name,
        href: `/productos/${category.slug}/${subProduct.slug}`,
        description: subProduct.shortDescription,
        hasSubMenu: false,
      })),
    }));
}

// Función helper para obtener productos destacados
export function getFeaturedProducts(): ProductCategory[] {
  return productCategories.filter((cat) => cat.featured);
}

// Función helper para obtener categoría por slug
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

// Función helper para obtener subproducto
export function getSubProductBySlug(
  categorySlug: string,
  productSlug: string,
): SubProduct | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subProducts.find((prod) => prod.slug === productSlug);
}

// Función helper para obtener productos populares
export function getPopularProducts(): SubProduct[] {
  const popular: SubProduct[] = [];
  productCategories.forEach((category) => {
    category.subProducts.forEach((product) => {
      if (product.popular) {
        popular.push(product);
      }
    });
  });
  return popular;
}
