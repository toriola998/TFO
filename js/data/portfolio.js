const portfolio = [
    {
        coverImage: 'alt-connect.png',
        name: 'Alt Connect',
        description: `A social funds collection platform where you can join communities 
        (religious and social) that relate with your values, pay utility bills and transfer/receive funds`,
        projectLink: 'https://altconnect.ng/',
        projectStack: ['Vue', 'Vuetify', 'Tanstack/vue-query', 'VueX'],
        backgroundClass: 'bg0',
        linkToCode: '',
        demoLink: '',
        demoDescription:
            'You can watch the demo to explore the features of the entire application without the need to authenticate.',
        linkLabel: 'Link to Alt Connect web app',
    },
    {
        coverImage: 'waste-banc1.png',
        name: 'Waste Banc',
        description: `A role-based access control admin portal for Waste banc, a platform that manages
         recycled waste collection. Admin can initiate & approve requests, manage agents, create waste categories etc`,
        projectLink: 'https://admin.wastebanc.ng/',
        projectStack: ['React', 'Tailwind', 'Tanstack/react-query'],
        backgroundClass: 'bg-waste-website',
        linkToCode: '',
        demoLink:
            'https://drive.google.com/file/d/1ETvT1Xr4C1sNJyVRsl5NmRmyq8MDSPby/view',
        demoDescription:
            'You can watch the demo to explore the features of the entire application without the need to authenticate.',
        linkLabel: 'Link to Alt Connect web app',
    },

    {
        coverImage: 'audiophile.png',
        name: 'Audiophile E-commerce',
        description:
            'A multi-page web application for a company that deals with portable audio equipment.',
        projectLink: 'https://audiophile-v2.netlify.app/',
        projectStack: ['Nuxt3', 'Composition API', 'Pinia', 'Tailwind'],
        backgroundClass: 'bg2',
        demoLink: '',
        demoDescription: '',
        linkToCode: 'https://github.com/toriola998/Audiophile-ecommerce-v2',
        linkLabel: 'Link to Audiophile ecommerce web app',
    },
    {
        coverImage: 'new-varv.png',
        name: 'Varv',
        description: `A fullstack application, which is an internal tool for a tailor house, used for managing customers & orders.`,
        projectLink: '',
        projectStack: [
            'ReactJS',
            'Tanstack/React-query',
            'TailwindCSS',
            'NodeJS',
            'MongoDB',
            'Express',
        ],
        backgroundClass: 'bg-varv',
        linkToCode: '',
        demoLink:
            'https://drive.google.com/file/d/1APRu6WLNtuGsJd0kFj1yv8lrbongVS_5/view?usp=sharing',
        demoDescription: `Live URL and source code are unavailable due to internal use at Grandeur Tailors. 
            Watch the demo to explore its features.`,
        linkLabel: 'Link to Varv app',
    },
    {
        coverImage: 'nasfat2.png',
        name: 'NASFAT',
        description: `A enumeration platform for NASFAT, a Nigerian Muslim prayer group with
        over 10 million members. Users can self-onboard, NASFAT agents can also onboard members, with 
        the system generating a bank account for each.`,
        projectLink: 'https://nasfat.altbank.ng/',
        projectStack: ['React', 'Tanstack/React-query', 'TailwindCSS'],
        backgroundClass: 'bg202',
        demoLink:
            'https://drive.google.com/file/d/1l70A1-ff6fdL9oKwRjJvQHN5KuHdFxvb/view?usp=sharing',
        demoDescription: `You can watch the demo to explore the features of the 
        app without the need to authenticate. Some features are not demoed due to Security`,
        linkToCode: '',
        linkLabel: 'Link to NASFAT web app',
    },
    {
        coverImage: 'devlinks.png',
        name: 'Devlinks',
        description:
            'A fullstack application, used in sharing links (mini linktree) for developers.',
        projectLink: 'https://dev-links-sharing.netlify.app/',
        projectStack: [
            'ReactJS',
            'Redux Toolkit',
            'TailwindCSS',
            'NodeJS',
            'MongoDB',
            'Express',
        ],
        backgroundClass: 'bg8',
        linkToCode: 'https://github.com/toriola998/Dev-links',
        demoLink:
            'https://drive.google.com/file/d/110HUn10eQxMFk2yXdkhQJ5umpBIkxFfs/view?usp=sharing',
        demoDescription:
            'You can watch the demo to explore the features of the entire application without the need to authenticate.',
        linkLabel: 'Link to devlinks',
    },
    {
        coverImage: 'grandeur.png',
        name: 'Grandeur Tailors ',
        description: 'A multi-page website for a fashion design brand.',
        projectLink: 'http://grandeurtailors.com/',
        projectStack: ['ReactJs', 'TailwindCSS', 'Redux Toolkit', 'Imagekit'],
        backgroundClass: 'bg-grandeur-website',
        linkToCode: '',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to Grandeur tailors website',
    },
    {
        coverImage: 'bullet-point.png',
        name: 'BulletPoint Freelancing',
        description:
            'A multi-page website for a resume and career coaching agency.',
        projectLink: 'https://bulletpointfreelancing.com/',
        projectStack: ['ReactJs', 'TailwindCSS', 'SCSS'],
        backgroundClass: 'bg-bullet-website',
        linkToCode: '',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to BulletPoint Freelancing website',
    },
    {
        coverImage: 'tech-career.png',
        name: 'Tech Careers',
        description:
            'A educative website for people who want to start a career in tech',
        projectLink: 'https://tech-career.netlify.app/',
        projectStack: ['ReactJS', 'TailwindCSS', 'SCSS'],
        backgroundClass: 'bg9',
        linkToCode: 'https://github.com/toriola998/Tech-Career-v2',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to Tech careers',
    },
    {
        coverImage: 'designo.png',
        name: 'Designo Multipage website',
        description: 'A multi-page website for a branding agency',
        projectLink: 'https://designo11.netlify.app/',
        projectStack: ['VueJs', 'Vue Router', 'SCSS', 'VueX'],
        backgroundClass: 'bg5',
        linkToCode: 'https://github.com/toriola998/Designo-multi-page-website',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to designo multipage website',
    },
    {
        coverImage: 'arch-studio.png',
        name: 'Arch Studio',
        description:
            'A multi-page website for a company that speciliazes in creating urban design and structures.',
        projectLink: 'https://arch-studio-site.netlify.app/',
        projectStack: ['VueJs', 'Vue Router', 'VueX'],
        backgroundClass: 'bg4',
        linkToCode: 'https://github.com/toriola998/Arch-studio',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to Arch Studio website',
    },
    {
        coverImage: 'CEEPLUS11.png',
        name: 'CEEPLUS Media',
        description: 'A multi-page website for a visual media brand',
        projectLink: 'https://ceeplus-media-v2.netlify.app/',
        projectStack: ['HTML', 'CSS/Boostrap', 'Javascript', 'GSAP/AOS'],
        backgroundClass: 'bg7',
        linkToCode: 'https://github.com/toriola998/CeePlus-Media-v2',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to CeePlus website',
    },

    {
        coverImage: 'yannal.png',
        name: 'Yannal Restaurant',
        description: 'A landing page for a restaurant.',
        projectLink: 'https://yannal-restaurant.netlify.app/',
        projectStack: ['HTML', 'CSS', 'Javascript'],
        backgroundClass: 'bg6',
        linkToCode: 'https://github.com/toriola998/Yannal-Restaurant',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to the yannal restaurant landing page',
    },
    {
        coverImage: 'mistrium.png',
        name: 'Mistrium',
        description: 'A landing page for a interior shop.',
        projectLink: 'https://mistrium.netlify.app/',
        projectStack: ['HTML', 'CSS', 'Javascript'],
        backgroundClass: 'bg3',
        linkToCode: 'https://github.com/toriola998/Mistrium',
        demoLink: '',
        demoDescription: '',
        linkLabel: 'Link to the mistrium landing page',
    },
];

export default portfolio;
