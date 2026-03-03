export interface ServiceBenefit {
  title: string;
  description?: string;
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
    id: "instalacion-pisos",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Instalación de Pisos Vinílicos",
    description:
      "Realizamos la instalación profesional de distintos tipos de pisos vinílicos, asegurando un acabado preciso, resistente y duradero.",
    benefits: [
      { title: "Piso vinílico homogéneo antibacterial" },
      { title: "Piso conductivo antiestático" },
      { title: "Piso vinílico SPC" },
    ],
  },
  {
    id: "aplicacion-alisado",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "Aplicación de Alisado",
    description:
      "Preparamos y nivelamos las superficies para garantizar una correcta instalación del piso y un mejor acabado final.",
    benefits: [
      { title: "Nivelación de superficies" },
      { title: "Preparación del área" },
      { title: "Mejora de adherencia" },
    ],
  },
  {
    id: "instalacion-zocalo",
    icon: "M4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h2a1 1 0 110 2H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 110 2h-2v10h2a1 1 0 110 2h-4a1 1 0 01-1-1V5z",
    title: "Instalación de Zócalos Sanitarios",
    description:
      "Instalamos zócalos sanitarios para lograr un acabado limpio, funcional e higiénico, acorde a los requerimientos del espacio.",
    benefits: [
      { title: "Colocación profesional" },
      { title: "Terminaciones precisas" },
      { title: "Integración con el piso" },
    ],
  },
  {
    id: "venta-materiales",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    title: "Venta de Materiales",
    description:
      "Ofrecemos la venta de materiales complementarios para la instalación de pisos, seleccionados por su calidad y buen desempeño.",
    benefits: [
      { title: "Pisos vinílicos" },
      { title: "Pegamentos y adhesivos" },
      { title: "Materiales complementarios para instalación" },
    ],
  },
  {
    id: "mantenimiento",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Mantenimiento",
    description:
      "Brindamos servicios de mantenimiento según el tipo y estado del piso, orientados a conservar su buen estado y funcionalidad.",
    benefits: [
      { title: "Limpieza especializada" },
      { title: "Mantenimiento preventivo" },
      { title: "Ajustes y correcciones necesarias" },
    ],
  },
  {
    id: "asesoria",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "Asesoría Personalizada",
    description:
      "Acompañamos a nuestros clientes en cada etapa del proyecto, brindando asesoría técnica para elegir la mejor solución según el espacio y el uso.",
    benefits: [
      { title: "Evaluación del proyecto" },
      { title: "Recomendaciones técnicas" },
      { title: "Acompañamiento durante el proceso" },
    ],
  },
];
