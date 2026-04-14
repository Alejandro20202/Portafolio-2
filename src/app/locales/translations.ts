export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    inicio: string;
    sobreMi: string;
    experiencia: string;
    habilidades: string;
    proyectos: string;
    tecnologias: string;
    testimonios: string;
    contacto: string;
  };
  hero: {
    greeting: string;
    name: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
    contact: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    certificationsTitle: string;
    cert1Title: string;
    cert1Desc: string;
    cert1Date: string;
    cert2Title: string;
    cert2Desc: string;
    cert2Date: string;
  };
  experience: {
    title: string;
    academic: {
      title: string;
      institution: string;
      status: string;
      description: string;
    };
    projects: {
      title: string;
      subtitle: string;
      date: string;
      item1: string;
      item2: string;
      item3: string;
    };
    personal: {
      title: string;
      subtitle: string;
      date: string;
      description: string;
    };
  };
  skills: {
    title: string;
    titleHighlight: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  projects: {
    title: string;
    titleHighlight: string;
    featured: string;
    viewDemo: string;
    github: string;
    demo: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  technologies: {
    title: string;
    subtitle: string;
    frontend: string;
    frameworks: string;
    tools: string;
    learning: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      text: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    linkedinText: string;
    availability: string;
  };
  footer: {
    name: string;
    role: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      experiencia: 'Experiencia',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      tecnologias: 'Tecnologías',
      testimonios: 'Testimonios',
      contacto: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Jhon Alejandro',
      description: 'Estudiante de Ingeniería de Software con pasión por el desarrollo de aplicaciones, la programación y el diseño de interfaces de usuario.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      contact: 'Contactar',
    },
    about: {
      title: 'Sobre ',
      titleHighlight: 'mí',
      paragraph1: 'Soy estudiante de Ingeniería de Software con interés en la tecnología y el aprendizaje continuo. Me considero una persona responsable, comprometida y con muchas ganas de seguir creciendo en el área de desarrollo de software.',
      paragraph2: 'Además de mi interés en la tecnología, me gusta practicar deporte, lo que me ha ayudado a desarrollar disciplina, concentración y trabajo en equipo. También soy un apasionado de la música, disfruto escuchar casi todo tipo de géneros musicales, lo cual me ayuda a mantener la creatividad y el equilibrio en mi vida diaria.',
      paragraph3: 'Mi objetivo es seguir fortaleciendo mis conocimientos en programación, diseño de interfaces y desarrollo de aplicaciones para poder crear soluciones útiles e innovadoras que generen un impacto positivo en la sociedad.',
      certificationsTitle: 'Certificaciones',
      cert1Title: 'Tercer Seminario Nacional',
      cert1Desc: 'Ingeniería de Software',
      cert1Date: 'Universidad Cooperativa de Colombia - Octubre 2025',
      cert2Title: 'Segundo Seminario Nacional',
      cert2Desc: 'Ingeniería de Software',
      cert2Date: 'Universidad Cooperativa de Colombia - Mayo 2025',
    },
    experience: {
      title: 'Experiencia',
      academic: {
        title: 'Ingeniería de Software',
        institution: 'Universidad Cooperativa de Colombia',
        status: 'En curso - 2026',
        description: 'Formación académica enfocada en el desarrollo de software, diseño de interfaces, análisis de sistemas y metodologías ágiles. Participación activa en proyectos de programación y desarrollo de aplicaciones.',
      },
      projects: {
        title: 'Proyectos Académicos',
        subtitle: 'Desarrollo de Software',
        date: '2024 - Presente',
        item1: 'Investigación y desarrollo en diseño de interfaces de usuario',
        item2: 'Creación de wireframes para aplicaciones web y móviles',
        item3: 'Ejercicios prácticos de programación y desarrollo',
      },
      personal: {
        title: 'Desarrollo Personal',
        subtitle: 'Habilidades Blandas',
        date: 'Continuo',
        description: 'Desarrollo de habilidades de trabajo en equipo, comunicación efectiva y liderazgo a través de la práctica deportiva. Disciplina, organización del tiempo y constancia aplicadas al desarrollo profesional.',
      },
    },
    skills: {
      title: 'Mis ',
      titleHighlight: 'Habilidades',
      items: [
        {
          title: 'Programación',
          desc: 'Conocimientos básicos en programación y desarrollo de software',
        },
        {
          title: 'Diseño UI/UX',
          desc: 'Diseño de interfaces de usuario y experiencia de usuario',
        },
        {
          title: 'Wireframes',
          desc: 'Creación de wireframes para aplicaciones web y móviles',
        },
        {
          title: 'Trabajo en equipo',
          desc: 'Colaboración efectiva y comunicación en proyectos',
        },
        {
          title: 'Resolución de problemas',
          desc: 'Pensamiento lógico y analítico para encontrar soluciones',
        },
        {
          title: 'Aprendizaje continuo',
          desc: 'Interés constante por aprender nuevas tecnologías',
        },
      ],
    },
    projects: {
      title: 'Mis ',
      titleHighlight: 'Proyectos',
      featured: 'Destacado',
      viewDemo: 'Ver Demo',
      github: 'GitHub',
      demo: 'Demo',
      items: [
        {
          title: 'Investigación sobre Diseño de Interfaces',
          desc: 'Proyecto enfocado en analizar y crear ejemplos de diseño de interfaces de usuario, priorizando la experiencia de usuario (UX), organización de elementos, uso de colores, iconos y la interacción con el sistema.',
        },
        {
          title: 'Cali - Aplicación Web',
          desc: 'Aplicación web moderna desarrollada con tecnologías actuales, enfocada en proporcionar una experiencia de usuario intuitiva y responsive.',
        },
        {
          title: 'Wireframes Web y Móvil',
          desc: 'Diseño de estructuras para aplicaciones web y móviles, enfocado en la organización de información y navegación intuitiva.',
        },
        {
          title: 'Ejercicios de Programación',
          desc: 'Desarrollo de diversos ejercicios de programación como parte del proceso de aprendizaje en Ingeniería de Software.',
        },
      ],
    },
    technologies: {
      title: 'Stack Tecnológico',
      subtitle: 'Tecnologías y herramientas que utilizo para crear soluciones innovadoras',
      frontend: 'Frontend Development',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Design',
      learning: 'Siempre aprendiendo y explorando nuevas tecnologías 🚀',
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen mis compañeros sobre mi trabajo',
      items: [
        {
          name: 'Sara Solarte',
          role: 'Colaboradora en Proyectos',
          text: 'Jhon es un excelente compañero de trabajo. Su dedicación y compromiso con los proyectos siempre destacan. Es muy colaborativo y siempre dispuesto a ayudar.',
        },
        {
          name: 'Jaime Erazo',
          role: 'Compañero de Equipo',
          text: 'Trabajar con Jhon en proyectos grupales ha sido una gran experiencia. Es responsable, tiene buenas ideas y siempre busca la mejor solución.',
        },
        {
          name: 'Andres Tejada',
          role: 'Compañero de Proyectos',
          text: 'Jhon tiene un gran potencial como desarrollador. Su interés por aprender nuevas tecnologías y mejorar constantemente es admirable.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes alguna pregunta o quieres colaborar en un proyecto? ¡Me encantaría escucharte!',
      email: 'Email',
      phone: 'Teléfono',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinText: 'Conectemos',
      availability: 'Estoy disponible para consultas, colaboraciones o cualquier duda sobre mis proyectos y trabajos.',
    },
    footer: {
      name: 'Jhon Alejandro Jojoa Molina',
      role: 'Estudiante de Ingeniería de Software',
      rights: '© 2026 Jhon Alejandro Jojoa Molina. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About',
      experiencia: 'Experience',
      habilidades: 'Skills',
      proyectos: 'Projects',
      tecnologias: 'Technologies',
      testimonios: 'Testimonials',
      contacto: 'Contact',
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Jhon Alejandro',
      description: 'Software Engineering student with a passion for application development, programming, and user interface design.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      contact: 'Contact Me',
    },
    about: {
      title: 'About ',
      titleHighlight: 'me',
      paragraph1: 'I am a Software Engineering student with an interest in technology and continuous learning. I consider myself a responsible, committed person who is eager to continue growing in the software development field.',
      paragraph2: 'In addition to my interest in technology, I enjoy playing sports, which has helped me develop discipline, focus, and teamwork. I am also passionate about music, enjoying almost all genres, which helps me maintain creativity and balance in my daily life.',
      paragraph3: 'My goal is to continue strengthening my knowledge in programming, interface design, and application development to create useful and innovative solutions that generate a positive impact on society.',
      certificationsTitle: 'Certifications',
      cert1Title: 'Third National Seminar',
      cert1Desc: 'Software Engineering',
      cert1Date: 'Universidad Cooperativa de Colombia - October 2025',
      cert2Title: 'Second National Seminar',
      cert2Desc: 'Software Engineering',
      cert2Date: 'Universidad Cooperativa de Colombia - May 2025',
    },
    experience: {
      title: 'Experience',
      academic: {
        title: 'Software Engineering',
        institution: 'Universidad Cooperativa de Colombia',
        status: 'In progress - 2026',
        description: 'Academic training focused on software development, interface design, systems analysis, and agile methodologies. Active participation in programming projects and application development.',
      },
      projects: {
        title: 'Academic Projects',
        subtitle: 'Software Development',
        date: '2024 - Present',
        item1: 'Research and development in user interface design',
        item2: 'Creation of wireframes for web and mobile applications',
        item3: 'Practical programming and development exercises',
      },
      personal: {
        title: 'Personal Development',
        subtitle: 'Soft Skills',
        date: 'Ongoing',
        description: 'Development of teamwork, effective communication, and leadership skills through sports practice. Discipline, time organization, and perseverance applied to professional development.',
      },
    },
    skills: {
      title: 'My ',
      titleHighlight: 'Skills',
      items: [
        {
          title: 'Programming',
          desc: 'Basic knowledge in programming and software development',
        },
        {
          title: 'UI/UX Design',
          desc: 'User interface and user experience design',
        },
        {
          title: 'Wireframes',
          desc: 'Creating wireframes for web and mobile applications',
        },
        {
          title: 'Teamwork',
          desc: 'Effective collaboration and communication in projects',
        },
        {
          title: 'Problem Solving',
          desc: 'Logical and analytical thinking to find solutions',
        },
        {
          title: 'Continuous Learning',
          desc: 'Constant interest in learning new technologies',
        },
      ],
    },
    projects: {
      title: 'My ',
      titleHighlight: 'Projects',
      featured: 'Featured',
      viewDemo: 'View Demo',
      github: 'GitHub',
      demo: 'Demo',
      items: [
        {
          title: 'Interface Design Research',
          desc: 'Project focused on analyzing and creating user interface design examples, prioritizing user experience (UX), element organization, use of colors, icons, and system interaction.',
        },
        {
          title: 'Cali - Web Application',
          desc: 'Modern web application developed with current technologies, focused on providing an intuitive and responsive user experience.',
        },
        {
          title: 'Web and Mobile Wireframes',
          desc: 'Design of structures for web and mobile applications, focused on information organization and intuitive navigation.',
        },
        {
          title: 'Programming Exercises',
          desc: 'Development of various programming exercises as part of the Software Engineering learning process.',
        },
      ],
    },
    technologies: {
      title: 'Tech Stack',
      subtitle: 'Technologies and tools I use to create innovative solutions',
      frontend: 'Frontend Development',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Design',
      learning: 'Always learning and exploring new technologies 🚀',
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What my colleagues say about my work',
      items: [
        {
          name: 'Sara Solarte',
          role: 'Project Collaborator',
          text: 'Jhon is an excellent work partner. His dedication and commitment to projects always stand out. He is very collaborative and always willing to help.',
        },
        {
          name: 'Jaime Erazo',
          role: 'Team Member',
          text: 'Working with Jhon on group projects has been a great experience. He is responsible, has good ideas, and always seeks the best solution.',
        },
        {
          name: 'Andres Tejada',
          role: 'Project Partner',
          text: 'Jhon has great potential as a developer. His interest in learning new technologies and constantly improving is admirable.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have any questions or want to collaborate on a project? I would love to hear from you!',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinText: "Let's Connect",
      availability: 'I am available for consultations, collaborations, or any questions about my projects and work.',
    },
    footer: {
      name: 'Jhon Alejandro Jojoa Molina',
      role: 'Software Engineering Student',
      rights: '© 2026 Jhon Alejandro Jojoa Molina. All rights reserved.',
    },
  },
};
