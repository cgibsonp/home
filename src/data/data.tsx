import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/earshot.png';
import porfolioImage3 from '../images/portfolio/easycryptotaxes.png';
import porfolioImage2 from '../images/portfolio/flyertap.png';
import porfolioImage4 from '../images/portfolio/polibase.png';
import porfolioImage5 from '../images/portfolio/portfolioImage5.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Chris Gibson Resume',
  description: 'Resume & Portfolio',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
const PDF = `/Resume.pdf`;

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chris Gibson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Nashville based <strong className="text-stone-100">Technology Enthusiast</strong>, currently working at{' '}
        <strong className="text-stone-100">Booz Allen Hamilton</strong> helping clients leverage artificial intelligence capabilities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">golf</strong>, listening to{' '}
        <strong className="text-stone-100">live music</strong>, or on a{' '}
        <strong className="text-stone-100">billiards</strong> table.
      </p>
    </>
  ),
  actions: [
    {
      href: PDF,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced in leading and innovating enterprise information technology functions. Thrives when collaborating with talented, diverse teams of designers and engineers to solve complex problems while having fun making something great together.

  \nInterested in no-code development, artificial intelligence tools, and bringing digital technology ideas to life.`,
  aboutItems: [
    {label: 'Location', text: 'Nashville, TN', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Golf, Live Music, Billiards', Icon: SparklesIcon},
    {label: 'Study', text: 'The Citadel', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Booz Allen Hamilton', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Technology',
    skills: [
      {
        name: 'No-Code Web Development',
        level: 9,
      },
      {
        name: 'Make (Integromat)',
        level: 7,
      },
      {
        name: 'Amazon Web Services',
        level: 4,
      },
      {
        name: 'Web Development',
        level: 3,
      },
      {
        name: 'iOS App Development',
        level: 3,
      },
    ],
  },
];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Earshot',
    description: 'Hear what`s near - a platform that transforms how you explore, support, and enjoy your community.',
    url: `https://www.earshotlivemusic.com`,
    image: porfolioImage1,
  },
  {
    title: 'Polibase',
    description: 'Political Analytics made simple.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Flyertap',
    description: 'Event platform for college campuses.',
    url: 'https://www.instagram.com/flyertap/',
    image: porfolioImage2,
  },
  {
    title: 'EasyCryptoTaxes',
    description: 'Crypto Taxes made easy.',
    url: 'https://www.easycryptotaxes.com',
    image: porfolioImage3,
  },
  {
    title: 'Monday Night Group',
    description: 'Mens Bible Study App',
    url: 'http://localhost:3000/MondayNightGroup',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2017',
    location: 'The Citadel',
    title: 'Bachelor of Science, Business Administration',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - Present',
    location: 'Booz Allen Hamilton',
    title: 'Release Train Engineer',
    content: (
      <p>
        Leading DevOps teams to deliver client use cases related to cloud computing & machine learning capabilities.
      </p>
    ),
  },
  {
    date: 'January 2022 - January 2024',
    location: 'Booz Allen Hamilton',
    title: 'Technical Product Owner',
    content: (
      <p>
        Supported priotization of the roadmap & backlog of DevOps teams to deliver client use cases related to cloud computing infrastructure & tooling.
      </p>
    ),
  },
  {
    date: 'June 2020 - January 2022',
    location: 'Booz Allen Hamilton',
    title: 'Scrum Master',
    content: (
      <p>
        Ensured development team alignment to Agile fundamentals to best deliver client use cases related to cloud computing infrastructure & tooling.
      </p>
    ),
  },
  {
    date: 'December 2018 - June 2020',
    location: 'Ally Financial',
    title: 'Scrum Master',
    content: (
      <p>
        Ensured development team alignment to Agile fundamentals to best deliver digital enhancements to homepage of storefront website.
      </p>
    ),
  },
  {
    date: 'June 2017 - December 2018',
    location: 'Ally Financial',
    title: 'Information Security Analyst',
    content: (
      <p>
        Facilitated Identify and Access Management internal access reviews for critical applications.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'We should connect, reach out!',
  items: [
    {
      type: ContactType.Email,
      text: 'cgibsonp@gmail.com',
      href: 'mailto:cgibsonp@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nashville, TN, USA',
      href: 'https://www.google.ca/maps/place/Nashville,+TN/@36.1868042,-86.9503931,11z/data=!3m1!4b1!4m6!3m5!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!8m2!3d36.1626638!4d-86.7816016!16zL20vMDVqYm4?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@chrisgibsons',
      href: 'https://www.instagram.com/chrisgibsons/',
    },
    {
      type: ContactType.Github,
      text: 'cgibsonp',
      href: 'https://github.com/cgibsonp',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/cgibsonp'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/cgibsonp/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/chrisgibsons/'},
];
