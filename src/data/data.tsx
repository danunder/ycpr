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
import PawIcon from '../components/Icon/PawIcon';
import avatar from '../images/avatar.png';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import cloudsImage from '../images/clouds.png';
import hillsImage from '../images/hills.png';
import book from '../images/icons/book.png';
import camera from '../images/icons/camera.png';
import certificate from '../images/icons/certificate.png';
import crisis from '../images/icons/crisis.png';
import defragment from '../images/icons/defragment-0.png';
import folder from '../images/icons/folder.png';
import influencer from '../images/icons/influe.png';
import media from '../images/icons/media.png';
import media2 from '../images/icons/media2.png';
import minesweeper from '../images/icons/minesweeper.png';
import network from '../images/icons/network_televisons-3.png';
import note from '../images/icons/note-2.png';
import paint from '../images/icons/paint.png';
import people from '../images/icons/people.png';
import sound from '../images/icons/sound.png';
import strategy from '../images/icons/strategy.png';
import videocamera from '../images/icons/videocamera.png';
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
import YCPR from '../images/YCPR.png';
import {
  About,
  Client,
  ContactSection,
  ContactType,
  EducationItem,
  Hero,
  HomepageMeta,
  PortfolioItem,
  PortfolioSection,
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
  Portfolio: 'Portfolio',
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
      <p className="text-black-200 prose sm:prose-lg md:prose-2xl">
        Hello! Welcome to my page. Are you looking for some help with your brand’s marketing and communications
        strategies? Needing some social media advice, or just plainly someone to do it for you? You’re at the right
        place!{' '}
      </p>
      <p className="text-black-200 prose sm:prose-lg md:prose-2xl">
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
    <p className="prose-sm text-black-200 sm:prose-xl">
      I’m Yamini, a communications, public relations and digital marketing expert based out of Toronto, Canada. I have
      been working in the marketing sphere, with a focus on communications, public relations and digital marketing, for
      over 7 years. I’ve worked with brands across sectors, including financial services, fintech, consumer, health,
      wellness and more.
    </p>
  ),
  secondParagraph: (
    <p className="prose-sm text-black-200 sm:prose-xl">
      I'm passionate about anti-racism, 2SLGBTQIA+ issues, social justice, diversity, equity and inclusion and
      incorporate that framework in all of my counsel and tactical recommendations.{' '}
    </p>
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
    imageHeight: 723,
    imageWidth: 1213,
  },
  {
    title: 'Glaxo Smith Kline',
    image: gsk,
    imageHeight: 660,
    imageWidth: 880,
  },
  {
    title: 'Air Miles',
    image: airmiles,
    imageHeight: 564,
    imageWidth: 610,
  },
  {
    title: "Siggi's",
    image: Siggis,
    imageHeight: 145,
    imageWidth: 410,
  },
  {
    title: 'Hut 8 Mining',
    image: hut8,
    imageHeight: 738,
    imageWidth: 1681,
  },
  {
    title: 'Taylor Hazell Architects',
    image: THA,
    imageHeight: 67,
    imageWidth: 225,
  },
  {
    title: 'Toronto Dog Mums',
    image: TDM,
    imageHeight: 500,
    imageWidth: 500,
  },
  {
    title: 'Good Investing',
    image: goodinvesting,
    imageHeight: 1117,
    imageWidth: 2500,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: EducationItem[] = [
  {
    date: '2017',
    location: 'Humber College',
    title: 'Public Relations Diploma',
    image: {
      src: certificate,
      imageHeight: 32,
      imageWidth: 32,
    },
  },
  {
    date: '2013',
    location: 'University of Toronto',
    title: 'Master of Arts',
    content: <p className="text-center font-bold sm:text-base">Comparative Literature</p>,
    image: {
      src: book,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
  {
    date: '2013',
    location: "University of King's College",
    title: 'Bachelor of Arts with Honours',
    content: <p className="text-center font-bold sm:text-base">English Literature & Philosophy</p>,
    image: {
      src: paint,
      imageHeight: 48,
      imageWidth: 48,
    },
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
      name: 'Tim Nash, Good Investing',
      text: "Yamini has been an integral part of growing my business, using her knowledge across the board on client communications, organizing long-term partnerships and growing our brand new Classroom platform. They've also begun producing my podcast and YouTube series, helping make content creation efficient while delivering results.",
    },
    {
      name: 'Christina Antoniou, Pfizer Canada',
      text: 'As a client, I appreciate her responsiveness, organized approach and the great service level she provides. She is a great communicator, and know the social media landscape very well.',
    },
    {
      name: 'Eric Tang, Porter Novelli Canada',
      text: "When you work with Yamini, her positive energy is so powerful that you can't help but want to bring your best game to the table.",
    },
    {
      name: 'Arnold Lee, Hut 8 Mining',
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
    {
      type: ContactType.RescueDogLove,
      text: 'Yamini is also a practicing dog professional, find out more here!',
      href: 'https://www.rescuedoglove.com',
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
  {label: 'Rescue Dog Love', Icon: PawIcon, href: 'https://www.rescuedoglove.com'},
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Content Creation: Video',
    clientOrBrand: 'Epipen',
    timePeriod: '(2017 - 2021)',
    description:
      'Support EpiPen brand by collaborating with non-profit Food Allergy Canada in educating folks about allergy management, including the importance of carrying an EpiPen at all times.',
    keyDeliverables:
      'Final produced videos with accompanying social media strategy and posts, including a paid media strategy.',
    whatIDid: (
      <ul className="list-disc">
        <li className="text-lg mt-[-12px] mb-3">
          Created key messages and initial script with Pfizer Canada & non profit partner Food Allergy Canada
        </li>
        <li className="text-lg mt-[-12px] mb-3">
          Sourced and partnered with videographer partner to storyboard and direct the shoot
        </li>
        <li className="text-lg mt-[-12px] mb-3">Project managed whole project between clients and partners</li>
        <li className="text-lg mt-[-12px] mb-3">Worked with videographer on final edits for post-production</li>
        <li className="text-lg mt-[-12px] mb-3">Created social media posts to accompany videos</li>
        <li className="text-lg mt-[-12px] mb-3">Worked with paid media agency on paid media strategy</li>
      </ul>
    ),
    images: [
      {
        src: pfizer,
        imageHeight: 660,
        imageWidth: 880,
      },
    ],
    videoEmbeds: [
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        height="315"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/h6vr1CSGftY?si=RdF6u1YKBZRzp8pi"
        title="YouTube video player"
        width="560"></iframe>,
    ],
    heroImage: {
      src: videocamera,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
];
export const portfolioSection: PortfolioSection = {
  title: 'Portfolio',
  footnote: 'For more details on these case studies, send me a note!',
  clientOrBrandTitle: 'Client or brand',
  keyDeliverablesTitle: 'Key deliverables',
  whatIDidTitle: 'What I handled',
  folderImage: {
    src: folder,
    imageHeight: 48,
    imageWidth: 48,
  },
  backgroundImageSrc: hillsImage,
  windowBackgroundImage: {
    src: YCPR,
    imageHeight: 500,
    imageWidth: 813,
  },
};
