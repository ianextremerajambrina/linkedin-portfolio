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
  profileButtons: HeaderButton[]; // Changed from string[]
  contact: {
    title: string;
    recruiterSection: {
      heading: string;
      description: string;
      emailLabel: string;
      phoneLabel: string;
      closing: string;
    };
    servicesSection: {
      heading: string;
      description: string;
      buttonLabel: string;
    };
  };
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
      servicesSection: {
        heading: "¿Buscas Servicios?",
        description: "Si estás interesado en contratar mis servicios, por favor visita la página de servicios:",
        buttonLabel: "Contratar servicios"
      }
    }
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
      servicesSection: {
        heading: "Looking for Services?",
        description: "If you are interested in hiring my services, please visit the services page:",
        buttonLabel: "Hire My Services"
      }
    }
  }
};

export const socials = {
  linkedIn: "https://www.linkedin.com/in/ian-extremera-jambrina-9767a9218/",
  gitHub: "https://github.com/ianextremerajambrina"
}