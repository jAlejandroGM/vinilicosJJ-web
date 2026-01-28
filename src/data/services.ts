export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: ServiceBenefit[];
}

export const services: Service[] = [
  {
    id: "instalacion",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Instalación Profesional",
    description:
      "Nuestro equipo certificado garantiza una instalación impecable siguiendo las mejores prácticas de la industria.",
    benefits: [
      {
        title: "Instaladores Certificados",
        description:
          "Personal capacitado con años de experiencia en instalación de pisos vinílicos",
      },
      {
        title: "Garantía de Instalación",
        description: "Garantizamos la calidad de nuestro trabajo por 2 años",
      },
      {
        title: "Cumplimiento de Tiempos",
        description:
          "Respetamos los plazos acordados sin comprometer la calidad",
      },
      {
        title: "Limpieza Post-Instalación",
        description:
          "Dejamos tu espacio completamente limpio y listo para usar",
      },
    ],
  },
  {
    id: "asesoria",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "Asesoría Personalizada",
    description:
      "Te ayudamos a elegir el piso perfecto para tu espacio considerando tráfico, estilo y presupuesto.",
    benefits: [
      {
        title: "Visita Sin Costo",
        description:
          "Visitamos tu proyecto para evaluar necesidades específicas",
      },
      {
        title: "Análisis del Espacio",
        description: "Medición y evaluación técnica del área a instalar",
      },
      {
        title: "Recomendaciones Expertas",
        description: "Sugerencias profesionales basadas en uso y presupuesto",
      },
      {
        title: "Presupuesto Detallado",
        description: "Cotización completa sin costos ocultos",
      },
    ],
  },
  {
    id: "mantenimiento",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Mantenimiento",
    description:
      "Servicios de mantenimiento preventivo y correctivo para mantener tus pisos como nuevos por más tiempo.",
    benefits: [
      {
        title: "Limpieza Especializada",
        description:
          "Técnicas y productos profesionales para cada tipo de piso",
      },
      {
        title: "Reparaciones Menores",
        description: "Solución rápida de daños superficiales y desgaste",
      },
      {
        title: "Productos Profesionales",
        description: "Utilizamos materiales de alta calidad para mantenimiento",
      },
      {
        title: "Planes de Mantenimiento",
        description: "Programas periódicos adaptados a tus necesidades",
      },
    ],
  },
  {
    id: "entrega",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Entrega Rápida",
    description:
      "Gestión eficiente de logística para que recibas tus productos en tiempo récord sin comprometer la calidad.",
    benefits: [
      {
        title: "Envío a Todo Perú",
        description: "Cobertura nacional con tiempos de entrega competitivos",
      },
      {
        title: "Seguimiento en Tiempo Real",
        description: "Rastrea tu pedido desde nuestra bodega hasta tu puerta",
      },
      {
        title: "Manejo Cuidadoso",
        description: "Empaquetado profesional para proteger tus productos",
      },
      {
        title: "Entrega Programada",
        description: "Coordinamos horarios que se ajusten a tu disponibilidad",
      },
    ],
  },
];
