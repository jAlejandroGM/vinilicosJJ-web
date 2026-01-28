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
  detailedFeatures?: string[]; // Características principales detalladas
  usageAreas?: { category: string; examples: string[] }[]; // Áreas de uso organizadas
  technicalData?: { label: string; value: string }[]; // Datos técnicos para ficha
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
    id: "vinilicos",
    name: "Pisos Vinílicos",
    slug: "vinilicos",
    description:
      "Descubre nuestra amplia gama de pisos vinílicos de alta calidad, diseñados para ofrecer durabilidad, estética y funcionalidad en cualquier espacio. Desde soluciones residenciales hasta especializadas para entornos críticos.",
    shortDescription: "Soluciones completas en pisos vinílicos",
    iconPath:
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    imageUrl: "/products/vinilicos-category.jpg",
    imageAlt: "Categoría de pisos vinílicos",
    featured: true,
    order: 1,
    detailedFeatures: [
      "Variedad de Soluciones: Ofrecemos pisos vinílicos para cada necesidad, desde residencial hasta aplicaciones especializadas en salud y tecnología.",
      "Alta Durabilidad: Todos nuestros pisos vinílicos están diseñados para resistir alto tráfico y condiciones exigentes.",
      "Instalación Profesional: Contamos con sistemas de instalación que garantizan un resultado óptimo y duradero.",
      "Mantenimiento Sencillo: Superficies de fácil limpieza que mantienen su apariencia por años.",
    ],
    usageAreas: [
      {
        category: "Residencial y Comercial",
        examples: [
          "Hogares, oficinas y comercios",
          "Espacios de alto tráfico",
          "Áreas húmedas",
        ],
      },
      {
        category: "Especializado",
        examples: [
          "Hospitales y clínicas",
          "Laboratorios",
          "Centros de datos",
          "Industria alimentaria",
        ],
      },
    ],
    subProducts: [
      {
        id: "spc-click",
        name: "SPC Click",
        slug: "spc-click",
        shortDescription: "Núcleo rígido ultrarresistente",
        fullDescription:
          "El piso vinílico SPC (Stone Plastic Composite) es un tipo avanzado de suelo vinílico conocido por su núcleo rígido y ultrarresistente, compuesto principalmente por polvo de piedra caliza y polímeros de PVC. Esta composición le otorga una durabilidad y resistencia al agua superiores a los pisos vinílicos tradicionales o laminados.",
        features: [
          {
            name: "Composición Avanzada",
            description:
              "Núcleo compuesto por 60% carbonato de calcio para máxima estabilidad",
          },
          {
            name: "Sistema Click",
            description:
              "Instalación flotante rápida sin necesidad de adhesivos",
          },
          {
            name: "Alta Definición",
            description:
              "Capa decorativa que imita madera o piedra con realismo",
          },
          {
            name: "Protección UV",
            description: "Recubrimiento superior contra rayones y manchas",
          },
        ],
        specifications: [
          { label: "Composición", value: "60% Piedra caliza + PVC" },
          { label: "Instalación", value: "Sistema Click Flotante" },
          { label: "Uso", value: "Residencial y Comercial" },
          { label: "Resistencia", value: "Alto tráfico" },
        ],
        imageUrl: "/products/spc-click.jpg",
        imageAlt: "Piso vinílico SPC Click",
        inStock: true,
        popular: true,
      },
      {
        id: "conductivo",
        name: "Conductivo Antiestático",
        slug: "conductivo",
        shortDescription: "Control ESD para entornos críticos",
        fullDescription:
          "El piso vinílico conductivo antiestático es un revestimiento de suelo especializado, diseñado para disipar la electricidad estática de forma controlada y segura hacia tierra, evitando así la acumulación de cargas electrostáticas (ESD) que pueden ser perjudiciales para equipos sensibles y personas.",
        features: [
          {
            name: "Control ESD",
            description:
              "Previene descargas electrostáticas con materiales conductores",
          },
          {
            name: "Resistencia Química",
            description:
              "Alto tránsito, resistente a abrasión, humedad y químicos",
          },
          {
            name: "Propiedades Antibacteriales",
            description: "Superficie higiénica, fácil de limpiar",
          },
          {
            name: "Seguridad Contra Fuego",
            description: "Material autoextinguible",
          },
        ],
        specifications: [
          { label: "Material", value: "PVC con aditivos conductores" },
          { label: "Control", value: "Disipación de cargas ESD" },
          { label: "Uso", value: "Quirófanos, centros de datos" },
          { label: "Propiedades", value: "Antibacterial, antialérgico" },
        ],
        imageUrl: "/products/conductivo.jpg",
        imageAlt: "Piso vinílico conductivo antiestático",
        inStock: true,
      },
      {
        id: "homogeneo",
        name: "Homogéneo Antibacterial",
        slug: "homogeneo",
        shortDescription: "Monocapa de alta durabilidad",
        fullDescription:
          "El piso vinílico homogéneo antibacterial es un revestimiento de alto rendimiento, fabricado en una sola capa de material vinílico, diseñado para ofrecer durabilidad, resistencia y una superficie fácil de limpiar que inhibe la acumulación de bacterias y hongos. Es ideal para espacios con alto tráfico y exigencias sanitarias.",
        features: [
          {
            name: "Construcción Monocapa",
            description: "Una sola capa con color continuo en todo el grosor",
          },
          {
            name: "Antibacterial",
            description: "Inhibe bacterias y hongos, hipoalergénico",
          },
          {
            name: "Alta Resistencia",
            description:
              "Soporta tráfico intenso, humedad y productos químicos",
          },
          {
            name: "Formato en Rollos",
            description:
              "Instalación con juntas termofusionadas para sellado completo",
          },
        ],
        specifications: [
          { label: "Material", value: "Resina de polivinilo (PVC)" },
          { label: "Construcción", value: "Monocapa homogénea" },
          { label: "Formato", value: "Rollos 2m x 20ml" },
          { label: "Uso", value: "Salud, educación, comercial" },
        ],
        imageUrl: "/products/homogeneo.jpg",
        imageAlt: "Piso vinílico homogéneo antibacterial",
        inStock: true,
        popular: true,
      },
    ],
  },
  {
    id: "pegamentos",
    name: "Pegamentos",
    slug: "pegamentos",
    description:
      "Adhesivos especializados de alta calidad para la instalación profesional de pisos vinílicos.",
    shortDescription: "Adhesivos profesionales",
    iconPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    imageUrl: "/products/pegamentos-category.jpg",
    imageAlt: "Categoría de pegamentos",
    featured: true,
    order: 2,
    detailedFeatures: [
      "Adhesivos Especializados: Soluciones específicas para cada tipo de instalación de pisos vinílicos.",
      "Sistemas Conductivos: Pegamentos diseñados para instalaciones que requieren disipación de electricidad estática.",
      "Alta Adherencia: Formulaciones profesionales que garantizan fijación permanente y duradera.",
      "Versatilidad de Uso: Productos compatibles con múltiples sustratos y aplicaciones.",
    ],
    usageAreas: [
      {
        category: "Instalaciones Especializadas",
        examples: [
          "Pisos conductivos en salas de servidores",
          "Laboratorios y centros de datos",
          "Áreas con equipos electrónicos sensibles",
        ],
      },
      {
        category: "Instalaciones Generales",
        examples: [
          "Pisos vinílicos residenciales y comerciales",
          "Enchapes de madera y laminados",
          "Post-formados y acabados",
        ],
      },
    ],
    subProducts: [
      {
        id: "pegamento-conductivo",
        name: "Conductivo Antiestático",
        slug: "pegamento-conductivo",
        shortDescription: "Adhesivo para pisos conductivos",
        fullDescription:
          "Pegamento conductivo especializado para la instalación de pisos vinílicos conductivos. Diseñado específicamente para garantizar la correcta disipación de la electricidad estática en ambientes que requieren protección de equipos electrónicos sensibles.",
        features: [
          {
            name: "Conductividad Garantizada",
            description:
              "Formulación específica para disipar electricidad estática de forma segura",
          },
          {
            name: "Sistema Integral",
            description:
              "Trabaja en conjunto con malla de cobre y conexión a tierra",
          },
          {
            name: "Instalación Especializada",
            description:
              "Procedimiento profesional con requisitos técnicos específicos",
          },
          {
            name: "Seguridad Eléctrica",
            description:
              "Medida de seguridad no negociable para proteger equipos y personas",
          },
          {
            name: "Control de Humedad",
            description:
              "Compatible con suelos preparados según especificaciones técnicas",
          },
        ],
        specifications: [
          { label: "Tipo", value: "Adhesivo conductivo" },
          { label: "Aplicación", value: "Pisos vinílicos conductivos" },
          {
            label: "Requisitos",
            value: "Cinta de cobre + conexión a tierra",
          },
          { label: "Humedad máx.", value: "2.5% en subsuelo" },
          { label: "Nivelación", value: "Desnivel máx. 3mm en 3m" },
          {
            label: "Herramientas",
            value: "Espátula, pistola calor, cordón soldadura",
          },
        ],
        imageUrl: "/products/pegamento-conductivo.jpg",
        imageAlt: "Pegamento Conductivo Antiestático",
        inStock: true,
        popular: true,
      },
      {
        id: "pegamento-contacto-pegsa",
        name: "De Contacto PEGSA",
        slug: "pegamento-contacto-pegsa",
        shortDescription: "Adhesivo de contacto multipropósito",
        fullDescription:
          "Adhesivo de contacto formulado en base a cauchos de policloropreno, resinas tacktificantes reactivas, antioxidantes y un sistema de solventes balanceado. Ideal para todo tipo de enchapes y múltiples sustratos.",
        features: [
          {
            name: "Formulación Profesional",
            description:
              "Base de cauchos de policloropreno con resinas tacktificantes reactivas",
          },
          {
            name: "Sistema Antioxidante",
            description: "Protección contra degradación y mayor durabilidad",
          },
          {
            name: "Solventes Balanceados",
            description: "Sistema optimizado para mejor aplicación y secado",
          },
          {
            name: "Versatilidad",
            description: "Compatible con múltiples tipos de sustratos",
          },
          {
            name: "Adhesión Superior",
            description: "Excelente adherencia en madera, MDF, concreto, y más",
          },
        ],
        specifications: [
          { label: "Tipo", value: "Adhesivo de contacto" },
          { label: "Base", value: "Cauchos de policloropreno" },
          { label: "Componentes", value: "Resinas reactivas + antioxidantes" },
          {
            label: "Sustratos",
            value: "Madera, MDF, poliuretano, vinílico, concreto",
          },
          { label: "Aplicación", value: "Enchapes y laminados" },
          { label: "Uso", value: "Todo tipo de enchapes" },
        ],
        imageUrl: "/products/pegamento-contacto-pegsa.jpg",
        imageAlt: "Pegamento de Contacto PEGSA",
        inStock: true,
      },
    ],
  },
  {
    id: "zocalos",
    name: "Zócalos",
    slug: "zocalos",
    description:
      "Perfiles y zócalos de PVC para acabados profesionales y sanitarios.",
    shortDescription: "Perfiles y acabados",
    iconPath:
      "M4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h2a1 1 0 110 2H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 110 2h-2v10h2a1 1 0 110 2h-4a1 1 0 01-1-1V5z",
    imageUrl: "/products/zocalos-category.jpg",
    imageAlt: "Categoría de zócalos",
    featured: true,
    order: 3,
    detailedFeatures: [
      "Diseño Sanitario: Perfiles curvados que eliminan esquinas de 90 grados para evitar acumulación de suciedad y bacterias.",
      "Alta Resistencia: Fabricados en PVC rígido o PEHD, resistentes a humedad, agua, corrosión y oxidación.",
      "Fácil Mantenimiento: Superficies lisas de bajo peso que facilitan la limpieza y no requieren mantenimiento constante.",
      "Flexibilidad de Instalación: Se adaptan a paredes irregulares y pueden calentarse para facilitar su colocación.",
    ],
    usageAreas: [
      {
        category: "Industria y Salud",
        examples: [
          "Plantas de procesamiento de alimentos",
          "Hospitales, clínicas y laboratorios",
          "Industria farmacéutica",
          "Cámaras frigoríficas y almacenes",
        ],
      },
      {
        category: "Residencial",
        examples: [
          "Baños y cocinas",
          "Áreas húmedas",
          "Espacios que requieren mayor higiene",
        ],
      },
    ],
    subProducts: [
      {
        id: "contrazocalo-sanitario",
        name: "Contrazócalo Sanitario de PVC",
        slug: "contrazocalo-sanitario",
        shortDescription: "Perfil sanitario para unión piso-pared",
        fullDescription:
          "Un contrazócalo sanitario de PVC es un perfil diseñado para sellar la unión entre el piso y la pared, creando una curva que evita la acumulación de suciedad y bacterias, facilitando la limpieza e higiene en áreas que lo requieren.",
        features: [
          {
            name: "Diseño Higiénico",
            description:
              "Diseño redondeado o curvado que elimina las esquinas a 90 grados donde se acumulan partículas",
          },
          {
            name: "Material 100% PVC",
            description:
              "Fabricado en PVC rígido o de alta densidad (PEHD) para máxima durabilidad",
          },
          {
            name: "Resistencia Superior",
            description:
              "Altamente resistente a humedad, agua, corrosión, oxidación e impactos",
          },
          {
            name: "Flexibilidad",
            description:
              "Se adapta a paredes irregulares o con curvatura, puede calentarse para facilitar instalación",
          },
          {
            name: "Bajo Mantenimiento",
            description:
              "Ligero, fácil de limpiar y no requiere mucho mantenimiento",
          },
          {
            name: "No se Deforma",
            description:
              "A diferencia de la madera, no se hincha ni deforma con la humedad",
          },
        ],
        specifications: [
          { label: "Material", value: "PVC rígido o PEHD 100%" },
          { label: "Diseño", value: "Curva sanitaria redondeada" },
          { label: "Peso", value: "Bajo peso" },
          { label: "Resistencia", value: "Humedad, corrosión, impactos" },
          { label: "Mantenimiento", value: "Mínimo requerido" },
          { label: "Instalación", value: "Adhesivo, puede calentarse" },
        ],
        imageUrl: "/products/contrazocalo-sanitario.jpg",
        imageAlt: "Contrazócalo Sanitario de PVC",
        inStock: true,
        popular: true,
      },
    ],
  },
  {
    id: "accesorios",
    name: "Accesorios",
    slug: "accesorios",
    description:
      "Accesorios y perfiles especializados para instalaciones profesionales de pisos.",
    shortDescription: "Perfiles y accesorios",
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    imageUrl: "/products/accesorios-category.jpg",
    imageAlt: "Categoría de accesorios",
    featured: true,
    order: 4,
    subProducts: [
      {
        id: "capping-strip",
        name: "Capping Strip",
        slug: "capping-strip",
        shortDescription: "Perfiles de transición y remate",
        fullDescription:
          "El Capping Strip es un perfil de transición profesional diseñado para rematar y sellar instalaciones de pisos, proporcionando un acabado estético y funcional en áreas de transición entre diferentes superficies.",
        features: [
          {
            name: "Acabado Profesional",
            description: "Remate estético para transiciones de piso",
          },
          {
            name: "Fácil Instalación",
            description: "Sistema de fijación rápido y seguro",
          },
          {
            name: "Durabilidad",
            description: "Resistente al tráfico y desgaste",
          },
          {
            name: "Versatilidad",
            description: "Compatible con múltiples tipos de pisos",
          },
        ],
        specifications: [
          { label: "Material", value: "Aluminio/PVC" },
          { label: "Uso", value: "Transiciones de piso" },
          { label: "Instalación", value: "Adhesivo o mecánica" },
          { label: "Acabados", value: "Múltiples colores" },
        ],
        imageUrl: "/products/capping-strip.jpg",
        imageAlt: "Capping Strip - Perfil de transición",
        inStock: true,
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
