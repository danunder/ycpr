import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import avatar from '../images/avatar.png';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import cloudsImage from '../images/clouds.png';
import hillsImage from '../images/hills.png';
import camera from '../images/icons/camera.png';
import crisis from '../images/icons/crisis.png';
import defragment from '../images/icons/defragment-0.png';
import influencer from '../images/icons/influe.png';
import media from '../images/icons/media.png';
import media2 from '../images/icons/media2.png';
import minesweeper from '../images/icons/minesweeper.png';
import network from '../images/icons/network_televisons-3.png';
import note from '../images/icons/note-2.png';
import people from '../images/icons/people.png';
import sound from '../images/icons/sound.png';
import strategy from '../images/icons/strategy.png';
import airmiles from '../images/portfolio/airmiles.png';
import goodinvesting from '../images/portfolio/goodinvesting.png';
import gsk from '../images/portfolio/gsk.png';
import hut8 from '../images/portfolio/hut8.png';
import pfizer from '../images/portfolio/pfizer.png';
import Siggis from '../images/portfolio/Siggis.png';
import TDM from '../images/portfolio/TDM.png';
import THA from '../images/portfolio/THA.png';
import profilepic from '../images/profilepic.png';
import timeline from '../images/timeline2.png';
import {
  About,
  Client,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Resume,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yamini Coen - Communications, Public Relations and Social Media Strategy',
  description:
    "Business site for Yamini Coen, built by danunder with significant modifications to Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Welcome',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Clients',
  Resume: 'Resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Yamini Coen`,
  subtitle: 'Communications, Public Relations and Social Media Strategy',
  description: (
    <>
      <p className="text-black-200 prose sm:prose-lg">
        Hello! Welcome to my page. Are you looking for some help with your brand’s marketing and communications
        strategies? Needing some social media advice, or just plainly someone to do it for you? You’re at the right
        place!{' '}
      </p>
      <p className="text-black-200 prose sm:prose-lg">
        Nice to meet you! I’m Yamini, a communications, public relations and digital marketing expert based out of
        Toronto, Canada.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/Yamini_Coen_Resume.pdf',
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
  avatar: avatar,
};

/**
 * About section
 */
export const aboutData: About = {
  backgroundImageSrc: hillsImage,
  profileImageSrc: profilepic,
  description: (
    <div className="flex flex-col gap-y-2">
      <p className="prose-sm text-black-200 sm:prose-lg">
        I’m Yamini, a communications, public relations and digital marketing expert based out of Toronto, Canada. I have
        been working in the marketing sphere, with a focus on communications, public relations and digital marketing,
        for over 7 years. I’ve worked with brands across sectors, including financial services, fintech, consumer,
        health, wellness and more.
      </p>
      <p className="prose-sm text-black-200 sm:prose-lg">
        I'm passionate about anti-racism, 2SLGBTQIA+ issues, social justice, diversity, equity and inclusion and
        incorporate that framework in all of my counsel and tactical recommendations.{' '}
      </p>
    </div>
  ),
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Interests', text: 'Rescue Dogs, Stardew Valley, Countess Luann', Icon: SparklesIcon},
    {label: 'Study', text: 'Kings College, Halifax', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'YCPR Inc', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Communications and Public Relations',
    skills: [
      {
        name: 'External Communications Strategies',
        icon: strategy,
      },
      {
        name: 'Diversity, Equity and Inclusion Framework',
        icon: defragment,
      },
      {
        name: 'Media Relations',
        icon: media2,
      },
      {
        name: 'Crisis Communications and Strategy',
        icon: crisis,
      },
      {
        name: 'Internal Communications Strategies',
        icon: note,
      },
      {
        name: 'Event Management',
        icon: sound,
      },
      {
        name: 'Media Monitoring and Reporting',
        icon: media,
      },
    ],
  },
  {
    name: 'Social Media and Digital Marketing',
    skills: [
      {
        name: 'Social Media Analysis, Planning and Execution',
        icon: network,
      },
      {
        name: 'Influencer Marketing',
        icon: influencer,
      },
      {
        name: 'Content Creation including Video, Photography and Audio (Podcasting)',
        icon: camera,
      },
      {
        name: 'Community Management',
        icon: people,
      },
      {
        name: 'Social Media Monitoring',
        icon: minesweeper,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const clients: Client[] = [
  {
    title: 'Pfizer',
    image: pfizer,
  },
  {
    title: 'Glaxo Smith Kline',
    image: gsk,
  },
  {
    title: 'Air Miles',
    image: airmiles,
  },
  {
    title: "Siggi's",
    image: Siggis,
  },
  {
    title: 'Hut 8 Mining',
    image: hut8,
  },
  {
    title: 'Taylor Hazell Architects',
    image: THA,
  },
  {
    title: 'Toronto Dog Mums',
    image: TDM,
  },
  {
    title: 'Good Investing',
    image: goodinvesting,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2017',
    location: 'Humber College',
    title: 'Public Relations Diploma',
  },
  {
    date: '2013',
    location: 'University of Toronto',
    title: 'Master of Arts',
    content: <p>Comparative Literature</p>,
  },
  {
    date: '2013',
    location: "University of King's college",
    title: 'Bachelor of Arts with Honourss',
    content: <p>English Literature & Philosophy</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'YCPR',
    title: 'Founder',
    content: undefined,
  },
  {
    date: '2023 - Present',
    location: 'Good Investing',
    title: 'Director of Partnerships & Producer',
    content: undefined,
  },
  {
    date: '2022 - 2023',
    location: 'Hut 8 Mining',
    title: 'Communications Manager',
    content: undefined,
  },
  {
    date: '2021 - 2022',
    location: 'Air Miles',
    title: 'Talent Marketing Consultant',
    content: undefined,
  },
  {
    date: '2017 - 2021',
    location: 'Porter Novelli',
    title: 'Public Relations Consultant',
    content: undefined,
  },
];

export const resumeData: Resume = {
  timelineImageSrc: timeline,
  education: education,
  experience: experience,
  skills: skills,
  clients: clients,
};
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: cloudsImage,
  testimonials: [
    {
      name: 'Christina Antoniou, Pfizer Canada (2020)',
      text: 'As a client, I appreciate her responsiveness, organized approach and the great service level she provides. She is a great communicator, and know the social media landscape very well.',
    },
    {
      name: 'Eric Tang, Porter Novelli Canada EVP',
      text: "When you work with Yamini, her positive energy is so powerful that you can't help but want to bring your best game to the table.",
    },
    {
      name: 'Arnold Lee, Sustainability in Crypto Mining',
      text: 'Her passion for her work was evident in every project she undertook, consistently going above and beyond to ensure the best outcome. Her communication skills were exceptional, always articulating her ideas clearly and effectively, which greatly contributed to our team’s success.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm taking new clients! Reach out here.",
  items: [
    {
      type: ContactType.Email,
      text: 'hello@yaminicoen.com',
      href: 'mailto:hello@yaminicoen.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
      href: 'https://www.google.ca/maps/place/Toronto,+ON',
    },
    {
      type: ContactType.LinkedIn,
      text: 'yaminicoen',
      href: 'https://www.linkedin.com/in/yaminicoen',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yaminicoen/'},
  {label: 'Resume', Icon: ArrowDownTrayIcon, href: '/Yamini_Coen_Resume.pdf'},
];
