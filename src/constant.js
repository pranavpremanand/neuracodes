import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.webp";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdDeveloperMode,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+916360572147",
  whatsapp: "+916360572147",
  whatsappbox: "+916360572147",
  email: "neuracodesolutions@gmail.com",
  address:
    "Vice Bread Enterprises, Konni, Pathanamthitta, Kerala - 689692, India",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blogs",
    path: "",
    component: "",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Simply book a free consultation with us to share your ideas. We will outline a plan on how we can help transform your vision into a successful AI-driven business.",
  },
  {
    id: 2,
    question: "Do I need to have technical expertise to launch an AI business?",
    answer:
      "Not at all! You don’t need to have technical knowledge. Our team of AI specialists will manage all the technical aspects, allowing you to focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long will it take to launch my AI product?",
    answer:
      "The timeline can vary, but generally, it takes around 3 to 6 months to develop a Minimum Viable Product (MVP) and initiate the launch phase.",
  },
  {
    id: 4,
    question: "How can I determine if my AI idea is viable?",
    answer:
      "We offer an initial consultation to assess your idea’s feasibility, its potential in the market, and provide advice on how to refine it for success.",
  },
  {
    id: 5,
    question: "What types of AI solutions do you offer?",
    answer:
      "We offer a diverse range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to meet your business needs.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    image: require("./assets/images/services/serviceswebdevelopment.jpg"),
    title: "Web Development",
    desc: "Build robust, scalable, and responsive websites to enhance your online presence. Our web development services ensure seamless functionality, engaging user interfaces, and compatibility across all devices.",
    detailContent:
      "Our web development team combines technical expertise with creative flair to deliver websites that not only look great but also perform excellently. We specialize in creating dynamic, user-friendly websites using modern frameworks like React, Angular, and Vue.js. From e-commerce platforms to content management systems, our custom solutions are tailored to meet your business goals. With a strong focus on performance optimization, security, and SEO, we ensure your website stands out in today's competitive digital landscape. Our services include full-cycle development, from ideation and wireframing to deployment and maintenance, providing end-to-end support for all your web development needs.",
  },
  {
    id: 2,
    img: <FaMobileScreen className="w-6 h-6" />,
    image: require("./assets/images/services/appdevelopment.webp"),
    title: "App Development",
    desc: "Create intuitive and engaging mobile applications designed to enhance user experiences and streamline operations. Our app development services focus on delivering high-performance, scalable, and visually appealing solutions tailored to your unique business needs.",
    detailContent:
      "We specialize in crafting mobile applications that resonate with your audience and fulfill your business objectives. From concept to deployment, our team ensures each app is user-friendly, feature-rich, and optimized for performance. Using the latest tools and frameworks, we create applications that work seamlessly across various platforms and devices. We prioritize user engagement by incorporating intuitive designs and functionality. Whether you need a standalone mobile app or an extension of your digital ecosystem, our end-to-end app development process includes wireframing, design, development, testing, and support. By integrating advanced technologies like AI and IoT, we deliver innovative apps that drive growth and provide a competitive edge. Our commitment to quality and scalability ensures that your app evolves with your business, offering long-term value and superior user experiences.",
  },
  {
    id: 3,
    img: <MdDeveloperMode className="w-6 h-6" />,
    image: require("./assets/images/services/fullstackdev.webp"),
    title: "Full Stack Development",
    desc: "Deliver seamless end-to-end solutions with our full-stack development services. We build comprehensive applications, managing both frontend and backend to ensure top-tier performance and user satisfaction.",
    detailContent:
      "Our full-stack development team handles the complete lifecycle of web and app development, covering frontend, backend, database management, and server configuration. We leverage technologies like JavaScript (React, Angular, Node.js), Python, Ruby on Rails, and more to create scalable and secure solutions. Our expertise spans across diverse industries, delivering high-quality software tailored to your unique requirements. From designing visually appealing interfaces to optimizing backend architecture, we focus on creating applications that drive engagement and deliver exceptional performance. With our full-stack capabilities, you gain a single point of contact for the entire development process, ensuring seamless communication and project success.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    image: require("./assets/images/services/uiux.webp"),
    title: "UI-UX Design",
    desc: "Create impactful digital experiences with our innovative UI/UX design services. We blend aesthetics with functionality to deliver designs that captivate and engage users.",
    detailContent:
      "Our UI/UX design services focus on creating intuitive and visually compelling interfaces that provide a seamless user experience. By conducting in-depth user research and usability testing, we understand your audience and tailor designs to meet their needs. From wireframes and prototypes to high-fidelity designs, we use tools like Figma, Adobe XD, and Sketch to bring ideas to life. Our designs prioritize accessibility, responsiveness, and brand alignment, ensuring that every interaction with your product is meaningful and engaging. Whether you need a fresh design for a new product or a redesign to improve existing workflows, our team is dedicated to delivering solutions that delight users and achieve your business objectives.",
  },
  {
    id: 5,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    image: require("./assets/images/services/strategic-consulting.webp"),
    title: "Strategic Consulting",
    desc: "Empower your business with data-driven strategies and expert guidance. Our strategic consulting services help you navigate challenges, uncover opportunities, and achieve sustainable growth.",
    detailContent:
      "Our strategic consulting services are designed to provide actionable insights and comprehensive solutions that drive business success. We analyze market trends, assess your company's strengths and weaknesses, and develop tailored strategies to meet your objectives. From digital transformation initiatives to operational improvements, our consultants bring deep industry expertise and a results-oriented approach. We also specialize in leveraging emerging technologies like AI and blockchain to create innovative solutions that give your business a competitive edge. Whether you're looking to expand into new markets, optimize processes, or redefine your value proposition, our consulting team is here to guide you every step of the way.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Turning Vision into Reality",
    desc: "We work closely with you to understand your vision, transforming it into innovative digital solutions that go beyond expectations, customized for your unique business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Your Business with Cutting-Edge Technology",
    desc: "Our deep expertise in advanced technologies ensures that every solution we create positions your business for success in today’s competitive market.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Boosting Efficiency through Innovation",
    desc: "We drive innovation to the forefront, from automating tasks to crafting intelligent solutions, helping your business become smarter and more efficient in every operation.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Making Data-Driven Decisions",
    desc: "We deliver actionable insights and data analytics that empower you to make informed decisions, discover new opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Dedicated to Excellence",
    desc: "Our commitment to delivering exceptional service and fostering long-term partnerships ensures we support you throughout your journey, from concept to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "David H",
    role: "Director of Operations, Elite Travel Co.",
    desc: "“Launching our startup was no easy task, but Neuracodes made the development of our website and app stress-free. Their team was approachable, responsive, and incredibly knowledgeable. They delivered a polished, high-performance platform on time and within budget, helping us make a strong entrance into the market.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Maria T",
    role: "Co-Founder, GreenTrail Ventures",
    desc: "“From day one, Neuracodes impressed us with their technical expertise and customer-focused approach. They redesigned our outdated website into a modern, functional hub for our business and introduced new tools that improved our workflows. Their ongoing support has been invaluable.”",
  },
  {
    id: 3,
    profileImg: profileImg1,
    name: "Sophia R",
    role: "Founder, Modern Finds Boutique",
    desc: "“We’ve worked with Neuracodes on multiple projects, and they continue to deliver exceptional results. Whether it’s designing a visually stunning website or developing a robust mobile application, their work speaks for itself. Their dedication to quality and client satisfaction makes them our go-to team for all things digital.”",
  },
  {
    id: 4,
    profileImg: profileImg2,
    name: "James L",
    role: "CEO, FitPro Solutions",
    desc: "“Partnering with Neuracodes was a game-changer. They designed a sleek, user-friendly e-commerce platform that exceeded our expectations. The feedback from our customers has been overwhelmingly positive, and we’ve seen a significant boost in sales. Their attention to detail and commitment to excellence truly set them apart.”",
  },
  {
    id: 5,
    profileImg: profileImg1,
    name: "Lisa K",
    role: "Marketing Manager, TrendyTech Inc.",
    desc: "“We came to Neuracodes with a challenging idea for a mobile app, and they delivered beyond our wildest expectations. The team worked closely with us to ensure every feature aligned with our goals, and the result was an app that users love. Their creativity and professionalism were evident at every step of the process.”",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Our Core",
    description:
      "At Neuracodes, innovation drives everything we do. We constantly explore emerging technologies and industry trends to create forward-thinking solutions that push the boundaries of what’s possible.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Focused Approach",
    description:
      "We prioritize a tailored approach, adapting each project to meet your unique needs. By working closely with our clients, we build long-term partnerships rooted in trust, transparency, and mutual success.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality and reliability are the cornerstones of our work. We take pride in delivering world-class digital solutions that are not only robust and scalable but also secure. Every project goes through a rigorous quality assurance process.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Purpose-Driven Innovation",
    description:
      "We believe technology is only truly valuable when it serves a meaningful purpose. Our mission is to leverage technology to create lasting impacts—streamlining processes, enhancing customer experiences, and fostering business growth.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Comprehensive End-to-End Solutions",
    description:
      "We offer a complete range of services, providing full support from the initial concept through to deployment and beyond. Our goal is to be your trusted partner on every step of your digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
