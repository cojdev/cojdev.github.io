const sitedata = {

    projects: {

        commercial: [
            {
                title: 'Online Post Production',
                description: 'Website design and development for London based Post Production House',
                tags: ['React', 'Sass', 'Silverstripe', 'Nginx'],
                date: '2018',
            },
            {
                title: 'Air Handling',
                description: 'Website design and development for an Air Handling distributor.',
                tags: ['PHP', 'Vanilla JS', 'Sass'],
                date: '2017',
            },
            {
                title: 'C-Squared Sales',
                description: 'Website design and development for a Kent based HVAC Engineering company.',
                tags: ['WordPress', 'Vanilla JS', 'Sass', 'Apache'],
                date: '2017',
            },
        ],

        personal: [
            {
                title: 'World Cup Predictor',
                description: 'A predictor app for the 2018 World Cup.',
                tags: ['React', 'Sass'],
                date: '2018',
                image: 'https://source.unsplash.com/600x400/?soccer',
            },
            {
                title: 'Particles',
                description: 'Javascript particle system for HTML5 Canvas.',
                tags: ['Canvas', 'Vanulla JS', 'Sass'],
                date: '2017',
                image: 'img/particles.png',
            },
            {
                title: 'Calendar Organiser',
                description: 'Calendar organiser application made with VueJs.',
                tags: ['Vue', 'PHP', 'Sass'],
                date: '2017',
                image: 'img/calendar.png',
            },
            {
                title: 'Low-poly Generator',
                description: 'Generator for abstract low poly backgrounds.',
                tags: ['React', 'Sass'],
                date: '2015',
                image: 'img/lowpoly.png',
            },
        ],
    },

    location: 'London, UK',

    social: [
        {
            name: 'Email',
            link: 'mailto:charles.ojukwu1@gmail.com',
            class: 'far fa-envelope'
        },
        {
            name: 'Github',
            link: 'https://github.com/cojdev',
            class: 'fab fa-github'
        },
        {
            name: 'Codepen',
            link: 'https://codepen.io/cojdev',
            class: 'fab fa-codepen'
        },
    ],

    skills: [
        {
            name: 'Front End',
            items: ['React', 'Vue', 'Sass', 'Less',],
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
        }

    ]
};

export const { projects, social, location, skills } = sitedata;