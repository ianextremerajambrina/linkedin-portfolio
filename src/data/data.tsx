// Define los tipos para la estructura de datos
export type Language = 'es' | 'en';

export type HeaderButton = {
  label: string;
  link: string;
};

export type LanguageData = {
  name: string;
  title: string;
  description: string;
  location: string;
  headerButtons: HeaderButton[];
  profileButtons: HeaderButton[];
  contact: {
    title: string;
    recruiterSection: {
      heading: string;
      description: string;
      emailLabel: string;
      phoneLabel: string;
      closing: string;
    };
    aboutMe: {
      description: string;
    };
    servicesSection: {
      heading: string;
      description: string;
      buttonLabel: string;
      services: Array<{
        title: string;
        description: string;
        icon?: string;
      }>;
    };
  };
  backButtonLabel: string;
};

export type DataType = {
  [key in Language]: LanguageData;
};

// Exporta los datos con el tipo correcto
export const data: DataType = {
  es: {
    // Add Spanish translations here
    name: "Ian Extremera Jambrina",
    title: "Desarrollador Full Stack / Administrador de Sistemas",
    description: "Soy un Desarrollador Full Stack con amplios conocimientos en administración de sistemas. Me encanta crear soluciones innovadoras y resolver problemas complejos. Siempre estoy buscando nuevos retos y oportunidades para crecer como desarrollador y/o administrador de sistemas.",
    location: "Langreo, Asturias",
    headerButtons: [
      {
        label: 'CV',
        link: '/cv'
      },
      {
        label: 'Portfolio',
        link: '/portfolio'
      },
      {
        label: 'Sobre mi',
        link: '/about'
      },
      {
        label: 'Contacto',
        link: '/contact'
      }
    ],
    profileButtons: [
      {
        label: 'Ver portfolio',
        link: '/portfolio'
      },
      {
        label: 'Descargar CV',
        link: '/cv'
      },
      {
        label: 'Contratar servicios',
        link: '/services'
      }
    ],
    contact: {
      title: "Contacto",
      recruiterSection: {
        heading: "Para Reclutadores",
        description: "Gracias por tu interés. Puedes contactarme a través de los siguientes canales:",
        emailLabel: "Correo electrónico",
        phoneLabel: "Teléfono",
        closing: "Estoy abierto a discutir oportunidades. No dudes en contactarme."
      },
      aboutMe: {
        description: "Soy un Desarrollador Full Stack con amplios conocimientos en administración de sistemas. He cursado numerosos ciclos formativos relacionados con la informática y la tecnología: 2018-2020: CFGM Sistemas Microinformáticos y Redes, 2020-2022: CFGS Administración de Sistemas Informáticos en Red, 2022-2025: CFGS Desarrollo de Aplicaciones Multiplataforma. Mi formación se complementa con cursos de ciberseguridad, bases de datos, virtualización y desarrollo web. Destaco por mi capacidad de adaptación, trabajo en equipo y responsabilidad. Siempre busco nuevos retos y oportunidades para crecer profesionalmente, aportando soluciones innovadoras y eficientes tanto en desarrollo como en administración de sistemas.",
      },
      servicesSection: {
        heading: "¿Buscas Servicios?",
        description: "Ofrezco soluciones tecnológicas innovadoras y personalizadas para impulsar tu negocio:",
        buttonLabel: "Contratar servicios",
        services: [
          {
            title: "Implementación de Inteligencia Artificial",
            description: "Desarrollo e integración de soluciones de IA para optimizar procesos, análisis de datos y automatización inteligente de tareas."
          },
          {
            title: "Administración y Creación de Infraestructuras en la Nube",
            description: "Diseño, implementación y gestión de infraestructuras cloud escalables y seguras, adaptadas a tus necesidades específicas."
          },
          {
            title: "Diseño de Sitios Web Full Stack",
            description: "Desarrollo completo de aplicaciones web, desde interfaces atractivas y responsivas hasta robustos sistemas backend."
          }
        ]
      }
    },
    backButtonLabel: "Volver al inicio"
  },
  en: {
    name: "Ian Extremera Jambrina",
    title: "Full Stack Developer / System Administrator",
    description: "I am a Full Stack Developer with a strong background in system administration. I have a passion for creating innovative solutions and solving complex problems. I am always looking for new challenges and opportunities to grow as a developer / system administrator.",
    location: "Langreo, Asturias",
    headerButtons: [
      {
        label: 'CV',
        link: '/cv'
      },
      {
        label: 'Portfolio',
        link: '/portfolio'
      },
      {
        label: 'About me',
        link: '/about'
      },
      {
        label: 'Contact',
        link: '/contact'
      }
    ],
    profileButtons: [
      {
        label: 'View portfolio',
        link: '/portfolio'
      },
      {
        label: 'Download CV',
        link: '/cv'
      },
      {
        label: 'Hire my services',
        link: '/services'
      }
    ],
    contact: {
      title: "Contact",
      recruiterSection: {
        heading: "For Recruiters",
        description: "Thank you for your interest. You can reach out to me through the following channels:",
        emailLabel: "Email",
        phoneLabel: "Phone",
        closing: "I am open to discussing opportunities. Please feel free to contact me."
      },
      aboutMe: {
        description: "I am a Full Stack Developer with extensive knowledge in systems administration. I have completed numerous training cycles related to computer science and technology: 2018-2020: Intermediate Vocational Training in Microcomputer Systems and Networks, 2020-2022: Higher Vocational Training in Network Computer Systems Administration, 2022-2025: Higher Vocational Training in Multiplatform Application Development. My training is complemented with courses in cybersecurity, databases, virtualization and web development. I stand out for my adaptability, teamwork and responsibility. I'm always looking for new challenges and opportunities to grow professionally, providing innovative and efficient solutions in both development and systems administration.",
      },
      servicesSection: {
        heading: "Looking for Services?",
        description: "I offer innovative and customized technological solutions to boost your business:",
        buttonLabel: "Hire My Services",
        services: [
          {
            title: "Artificial Intelligence Implementation",
            description: "Development and integration of AI solutions for process optimization, data analysis, and intelligent task automation."
          },
          {
            title: "Cloud Infrastructure Management and Creation",
            description: "Design, implementation, and management of scalable and secure cloud infrastructures, tailored to your specific needs."
          },
          {
            title: "Full Stack Web Design",
            description: "Complete web application development, from attractive and responsive interfaces to robust backend systems."
          }
        ]
      }
    },
    backButtonLabel: "Back to Home"
  }
};

export const socials = {
  linkedIn: "https://www.linkedin.com/in/ian-extremera-jambrina-9767a9218/",
  gitHub: "https://github.com/ianextremerajambrina"
}