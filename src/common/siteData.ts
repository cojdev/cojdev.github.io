import * as Icon from 'react-feather';

const siteData = {
  profile: {
    name: 'Charles Ojukwu',
    role: 'Full Stack Engineer',
  },
  location: 'London, UK',

  projects: {
    commercial: [
      {
        title: 'The Nutrition Collective',
        description: 'Landing Page for a health and wellness community.',
        url: 'https://nutritioncollective.co.uk',
        tags: ['Sass', 'Gatsby', 'Netlify CMS'],
      },
      {
        title: 'Online Post Production',
        description:
          'Website development for London based Post Production House',
        url: 'https://onlinepp.co.uk',
        tags: ['React', 'Sass', 'Silverstripe', 'MySQL'],
        date: '2018',
      },
      {
        title: 'C-Squared Sales',
        description:
          'Website design and development for a Kent based HVAC Engineering company.',
        url: 'https://c2sales.co.uk',
        tags: ['WordPress', 'Sass', 'Gitlab CI', 'MySQL'],
        date: '2017',
      },
      {
        title: 'Air Handling',
        description:
          'Website design and development for an Air Handling distributor.',
        url: 'https://air-handling.co.uk',
        tags: ['PHP', 'Sass', 'MySQL'],
        date: '2017',
      },
    ],

    personal: [
      {
        title: 'Low-poly Generator',
        description: 'Generator for abstract low poly backgrounds.',
        tags: ['React', 'ES6', 'styled-components'],
        date: '2015',
        image: 'img/lowpoly.png',
        url: '/lowpoly',
      },
      {
        title: 'World Cup Predictor',
        description: 'A predictor app for the 2018 World Cup.',
        tags: ['React', 'ES6', 'Sass'],
        date: '2018',
        image: 'https://source.unsplash.com/600x400/?soccer',
        url: '/world-cup',
        hidden: true,
      },
      {
        title: 'Particles',
        description: 'Javascript particle system for HTML5 Canvas.',
        tags: ['Canvas', 'ES6', 'Sass'],
        date: '2017',
        image: 'img/particles.png',
        url: '/particles',
      },
      {
        title: 'Calendar Organiser',
        description: 'Calendar organiser application made with VueJs.',
        tags: ['Vue', 'PHP', 'Sass', 'MySQL'],
        date: '2017',
        image: 'img/calendar.png',
        url: '/calendar',
      },
    ],
  },

  social: [
    {
      name: 'Email',
      url: 'mailto:charles.ojukwu1@gmail.com',
      icon: Icon.Mail,
    },
    {
      name: 'Github',
      url: 'https://github.com/cojdev',
      icon: Icon.GitHub,
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/cojdev',
      icon: Icon.Codepen,
    },
  ],

  skills: [
    {
      name: 'Front End',
      items: ['React', 'Vue', 'Sass', 'Less'],
    },
    {
      name: 'Back End',
      items: ['PHP', 'WordPress', 'NodeJs'],
    },
    {
      name: 'Workflow',
      items: ['NPM', 'Gulp', 'Webpack'],
    },
    {
      name: 'Software',
      items: ['Adobe CC', 'Figma', 'VS Code'],
    },
  ],

  technologies: [
    {
      name: 'React',
      colour: '#61dafb',
    },
    {
      name: 'Vue',
      colour: '#41b883',
    },
    {
      name: 'Gulp',
      colour: '#cf4647',
    },
    {
      name: 'Sass',
      colour: '#cd6799',
    },
    {
      name: 'Silverstripe',
      colour: '#005b94',
    },
    {
      name: 'WordPress',
      colour: '#0073aa',
    },
    {
      name: 'MySQL',
      colour: '#de8a00',
    },
    {
      name: 'ES6',
      colour: '#f0db4f',
    },
    {
      name: 'PHP',
      colour: '#687ab2',
    },
    {
      name: 'Gitlab CI',
      colour: '#e65328',
    },
    {
      name: 'styled-components',
      colour: '#db7093',
    },
  ],
};

export default siteData;
export const { projects, social, location, skills, technologies } = siteData;
