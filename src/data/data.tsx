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
  profileButtons: string[];
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
    profileButtons: ['Ver portfolio','Descargar CV','Contratar servicios']
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
    profileButtons: ['View portfolio','Download CV','Hire me']
  }
};

export const socials = {
  linkedIn: "https://www.linkedin.com/in/ian-extremera-jambrina-9767a9218/",
  gitHub: "https://github.com/ianextremerajambrina"
}