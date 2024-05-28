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
import heroImage from '../images/websitebackground.jpg';
import porfolioImage1 from '../images/portfolio/earshot.png';
import porfolioImage2 from '../images/portfolio/flyertap.png';
import porfolioImage3 from '../images/portfolio/easycryptotaxes.png';
import porfolioImage4 from '../images/portfolio/polibase.png';
import profilepic from '../images/profilepic.jpg';
import PDF from `../public/Resume.pdf`;

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
  description: "Resume & Portfolio",
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
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chris Gibson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Nashville based <strong className="text-stone-100">Technology Consultant</strong>, currently working
        at <strong className="text-stone-100">Booz Allen Hamilton</strong> helping clients modernized leveraging machine learning capabilities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">golf</strong>,
        listening to <strong className="text-stone-100">live music</strong>, or on a {' '}
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

  Interested in no-code development, artificial intelligence tools, and bringing digital technology ideas to life.`,
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
        name: 'No-Code (GlideApps)',
        level: 9,
      },
      {
        name: 'Make (Integromat)',
        level: 7,
      },
            {
        name: 'Amazon Web Services.js',
        level: 3,
      },
      {
        name: 'React.js',
        level: 1,
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
    description: 'Give a short description of your project here.',
    url: 'https://www.earshotlivemusic.com',
    image: porfolioImage1,
  },
  {
    title: 'Polibase',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Flyertap',
    description: '',
    url: 'https://www.instagram.com/flyertap/',
    image: porfolioImage2,
  },
  {
    title: 'EasyCryptoTaxes',
    description: 'Give a short description of your project here.',
    url: 'https://www.easycryptotaxes.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
];
