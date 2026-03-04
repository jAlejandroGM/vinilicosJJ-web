export interface Project {
  id: string;
  clientName: string;
  location: string;
  description: string;
  images: string[];
  services: string[];
  products: string[];
  installationDates: {
    start: string;
    end?: string;
  };
  area?: string;
}

export const projects: Project[] = [
  {
    id: "hotel-miraflores",
    clientName: "Hotel Miraflores Grand",
    location: "Miraflores, Lima",
    description:
      "Instalación completa de pisos vinílicos SPC en todas las habitaciones y áreas comunes del hotel. Proyecto de renovación integral que requirió coordinación con operaciones del hotel.",
    images: [
      "/projects/hotel-miraflores-1.jpg",
      "/projects/hotel-miraflores-2.jpg",
      "/projects/hotel-miraflores-3.jpg",
      "/projects/hotel-miraflores-4.jpg",
    ],
    services: ["Instalación Profesional", "Asesoría Personalizada"],
    products: ["Piso SPC Click", "Pegamento Conductivo", "Zócalos PVC"],
    installationDates: {
      start: "2025-08-15",
      end: "2025-09-30",
    },
    area: "1,200 m²",
  },
  {
    id: "residencia-la-molina",
    clientName: "Residencia Familia García",
    location: "La Molina, Lima",
    description:
      "Renovación completa de pisos en vivienda unifamiliar. Se instaló piso vinílico de alta gama con acabado madera natural en todas las áreas sociales y dormitorios.",
    images: [
      "/projects/residencia-molina-1.jpg",
      "/projects/residencia-molina-2.jpg",
      "/projects/residencia-molina-3.jpg",
    ],
    services: ["Instalación Profesional", "Mantenimiento"],
    products: ["Piso Vinílico Homogéneo", "Contrazócalo Sanitario"],
    installationDates: {
      start: "2025-10-05",
      end: "2025-10-12",
    },
    area: "180 m²",
  },
  {
    id: "oficinas-san-isidro",
    clientName: "Tech Solutions SAC",
    location: "San Isidro, Lima",
    description:
      "Instalación de pisos vinílicos en oficinas corporativas modernas. Se priorizó el diseño contemporáneo y la durabilidad para alto tráfico en espacios de trabajo.",
    images: [
      "/projects/oficinas-sanisidro-1.jpg",
      "/projects/oficinas-sanisidro-2.jpg",
      "/projects/oficinas-sanisidro-3.jpg",
      "/projects/oficinas-sanisidro-4.jpg",
    ],
    services: ["Instalación Profesional", "Asesoría Personalizada"],
    products: ["Piso SPC Click", "Pegamento Contacto PEGSA", "Capping Strip"],
    installationDates: {
      start: "2025-11-10",
      end: "2025-11-25",
    },
    area: "450 m²",
  },
  {
    id: "restaurante-barranco",
    clientName: "Restaurante El Sabor Peruano",
    location: "Barranco, Lima",
    description:
      "Proyecto de remodelación completa para restaurante gourmet. Se instaló piso vinílico de alta resistencia diseñado para soportar condiciones de cocina comercial.",
    images: [
      "/projects/restaurante-barranco-1.jpg",
      "/projects/restaurante-barranco-2.jpg",
      "/projects/restaurante-barranco-3.jpg",
    ],
    services: [
      "Instalación Profesional",
      "Asesoría Personalizada",
      "Mantenimiento",
    ],
    products: ["Piso Vinílico Homogéneo", "Pegamento Conductivo"],
    installationDates: {
      start: "2025-12-01",
      end: "2025-12-08",
    },
    area: "280 m²",
  },
  {
    id: "departamento-surco",
    clientName: "Condominio Los Álamos",
    location: "Santiago de Surco, Lima",
    description:
      "Instalación de pisos vinílicos en múltiples departamentos de condominio nuevo. Coordinación logística compleja para entrega simultánea de unidades.",
    images: [
      "/projects/departamento-surco-1.jpg",
      "/projects/departamento-surco-2.jpg",
      "/projects/departamento-surco-3.jpg",
    ],
    services: ["Instalación Profesional", "Entrega Rápida"],
    products: ["Piso SPC Click", "Contrazócalo Sanitario", "Capping Strip"],
    installationDates: {
      start: "2026-01-05",
      end: "2026-01-20",
    },
    area: "650 m²",
  },
  {
    id: "clinica-jesus-maria",
    clientName: "Clínica Santa María",
    location: "Jesús María, Lima",
    description:
      "Instalación de pisos vinílicos antibacteriales en áreas críticas de clínica. Cumplimiento estricto de normativas sanitarias y protocolos de bioseguridad.",
    images: [
      "/projects/clinica-jesus-maria-1.jpg",
      "/projects/clinica-jesus-maria-2.jpg",
      "/projects/clinica-jesus-maria-3.jpg",
      "/projects/clinica-jesus-maria-4.jpg",
    ],
    services: ["Instalación Profesional", "Asesoría Personalizada"],
    products: [
      "Piso Vinílico Homogéneo",
      "Pegamento Conductivo",
      "Contrazócalo Sanitario",
    ],
    installationDates: {
      start: "2025-09-15",
      end: "2025-10-10",
    },
    area: "800 m²",
  },
];
