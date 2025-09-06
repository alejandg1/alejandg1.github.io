const CONFIG = {
  github: {
    username: 'alejandg1',
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 20, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        //projects: ['alejandg1/Actiometa_electron', 'alejandg1/Actiometa_api_go'],
      },
    },
    external: {
      header: 'Repositorios Externos',
      projects: [
        {
          title: 'ActioMeta/NeoSynth',
          description:
            'Cliente móvil de Navidrome/Subsonic construido con React Native, Expo y TypeScript.',
          link: 'https://github.com/ActioMeta/NeoSynth',
        },
        {
          title: 'ActioMeta/ObsVersionManager',
          description:
            'Aplicación de escritorio desarrollada con Wails y Preact para gestionar múltiples instalaciones de OBS Studio, sus configuraciones y plugins de manera sencilla y eficiente.',
          link: 'https://github.com/ActioMeta/OBS-version-manager',
        },
      ],
    },
  },
  seo: {
    title: 'Alejandro Gómez',
    description: '',
    imageURL: ' ',
  },
  social: {
    linkedin: 'alejandro-gómez',
    email: 'agomezp2003@gmail.com',
  },
  resume: {
    fileUrl:
    'https://drive.google.com/file/d/1RuoXFlMyf0gSejCwNtrbhuFU99SZ7SNX/view?usp=sharing'
  },
  skills: [
    'Linux',
    'React Native',
    'Node.js',
    'web deployment',
    'SQL',
    'Git',
    'Docker',
    'Golang',
    'Python',
    'Power BI',
    'AI/ML',
  ],
  languages: [
    {
      name: 'Español',
      level: 'Nativo',
    },
    {
      name: 'Inglés',
      level: 'Intermedio',
    },
    {
      name: 'Italiano',
      level: 'Básico',
    },
  ],
  experiences: [
    {
      event: 'Hackathon - Tech for Green',
      role: 'Participante',
      year: '2024',
      organization: 'UNEMI',
      companyLink: 'https://drive.google.com/file/d/1dA2Jm_3Na_RiCQtRpiBtSeWkqVWC8sjo/view?usp=sharing',
    },
    {
      event: 'Hackathon - Road to Hack',
      role: 'Participante',
      year: '2024',
      organization: 'ESPOL',
      companyLink: 'https://drive.google.com/file/d/1x2vg-kAiOB0HERni1QHH17_Pk9_mnvuX/view?usp=sharing'
    },
    {
      event: 'Innovatón 2025 Tía',
      role: 'Participante',
      year: '2025',
      organization: 'Supermercados Tía',
      companyLink: 'https://drive.google.com/file/d/15UWxXJNb43qG_OH3yNmHn3ZLwZf4EyCq/view?usp=sharing'
    }
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'AWS Academy Introduction to Cloud Semester 1',
      body: '',
      year: '2024',
      link: 'https://www.credly.com/badges/ab9d8696-7c9c-4da9-bdcd-60fc8d731bbf/public_url',
      image: '/images/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-1.png'
    },
    {
      name: 'Curso de docker y kubernetes',
      body: '',
      year: '2025',
      link: 'https://drive.google.com/file/d/1BDPVzfSwL8D5L0vSnFsFNpQI21o4aRTg/view?usp=sharing',
      image: '/images/docker_codigo_facilito.png'
    },
    {
      name: 'Curso de power bi',
      body: '',
      year: '2025',
      link: 'https://drive.google.com/file/d/14NA2GodXYsTNPN1pc3G0qych5daShKw9/view?usp=sharing',
      image: '/images/power_bi_codigo_facilito.png'
    },
    {
      name : 'Curso de DevOps',
      body: '',
      year: '2025',
      link: 'https://drive.google.com/file/d/19KUQEtqC4jxyWjUP80pKjQDsmWMGuJIa/view?usp=sharing',
      image: '/images/devops_codigo_facilito.png'
    }
  ],
  educations: [
    {
      institution: 'State University of Milagro (software engineering)',
      degree: 'Not degree',
      from: '2019',
      to: '2025',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    // id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'black',
      'night',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default CONFIG;
