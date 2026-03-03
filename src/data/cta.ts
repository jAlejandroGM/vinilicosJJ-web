export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  features?: string[];
  whatsappMessage?: string;
}

export interface CTAConfig {
  [key: string]: CTAContent;
}

const whatsappNumber = "51987654321";

export const ctaContent: CTAConfig = {
  // Página de inicio
  "/": {
    title: "¿Listo para transformar tu espacio?",
    description:
      "Obtén una cotización gratuita y descubre cómo podemos ayudarte a crear el ambiente perfecto con nuestros pisos de vinilo premium.",
    buttonText: "Solicitar Cotización",
    buttonHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Vinílicos J&J! 👋\n\nMe gustaría solicitar una cotización para mi proyecto de pisos.\n\n¿Podrían contactarme?\n\nGracias.")}`,
    features: [
      "Cotización sin compromiso",
      "Asesoría personalizada",
      "Instalación profesional",
    ],
  },

  // Página Nosotros
  "/nosotros": {
    title: "¿Quieres Conocernos Mejor?",
    description:
      "Contáctanos y descubre por qué somos la mejor opción para tu proyecto de pisos. Nuestro equipo está listo para atenderte.",
    buttonText: "Contáctanos",
    buttonHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Vinílicos J&J! 👋\n\nMe gustaría conocer más sobre su empresa.\n\n¿Podrían brindarme información?\n\nGracias.")}`,
    features: [
      "Atención personalizada",
      "Respuesta rápida",
      "Asesoría sin compromiso",
    ],
  },

  // Página de servicios
  "/servicios": {
    title: "¿Listo para Comenzar tu Proyecto?",
    description:
      "Contáctanos hoy mismo y recibe una cotización sin compromiso. Nuestro equipo está listo para asesorarte.",
    buttonText: "Escríbenos por WhatsApp",
    buttonHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Vinílicos J&J! 👋\n\nMe gustaría conversar sobre los servicios que realizan para mi proyecto de pisos.\n\n¿Podrían asesorarme?\n\nGracias.")}`,
    features: [
      "Respuesta inmediata",
      "Atención personalizada",
      "Presupuesto detallado",
    ],
  },

  // Página de proyectos
  "/proyectos": {
    title: "¿Listo para Tu Próximo Proyecto?",
    description:
      "Únete a nuestros clientes satisfechos. Recibe una cotización personalizada y comienza la transformación de tu espacio hoy mismo.",
    buttonText: "Solicitar Cotización",
    buttonHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Vinílicos J&J! 👋\n\nMe gustaría solicitar una cotización para mi proyecto.\n\n¿Podrían contactarme?\n\nGracias.")}`,
    features: [
      "Portafolio comprobado",
      "Garantía de calidad",
      "Experiencia de 10+ años",
    ],
  },

  // Páginas de productos (genérico para todas las categorías)
  "/productos": {
    title: "¿Interesado en este producto?",
    description:
      "Contáctanos para conocer más detalles, disponibilidad y precios. Nuestro equipo está listo para asesorarte en la mejor opción para tu proyecto.",
    buttonText: "Solicitar Información",
    buttonHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Vinílicos J&J! 👋\n\nEstoy interesado en conocer más sobre sus productos.\n\n¿Podrían brindarme información y cotización?\n\nGracias.")}`,
    features: [
      "Asesoría técnica especializada",
      "Muestras disponibles",
      "Envío a todo Perú",
    ],
  },
};

// Función helper para obtener el CTA correcto según la ruta
export function getCTAContent(pathname: string): CTAContent {
  // Normalizar pathname
  const normalizedPath = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  // Verificar coincidencia exacta
  if (ctaContent[normalizedPath]) {
    return ctaContent[normalizedPath];
  }

  // Si es una página de productos, usar el CTA genérico de productos
  if (normalizedPath.startsWith("/productos/")) {
    return ctaContent["/productos"];
  }

  // Por defecto, usar el CTA de inicio
  return ctaContent["/"];
}
