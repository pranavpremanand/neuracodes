import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Your <span className="text-primary">Trusted Partner </span>
              for Cutting-Edge Digital Transformation
            </h1>
            <p className="desc">
              At Neuracodes, we craft cutting-edge AI-driven IT solutions
              tailored to meet the evolving needs of businesses, ensuring
              enhanced efficiency, sustainable growth, and continuous innovation
              through intelligent automation and data-driven insights.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Revolutionizing Operations Through AI Innovation
              </h2>
              <p className="desc">
                Welcome to Neuracodes, where innovation meets dedication to
                create exceptional digital experiences. What began as a small
                team with a shared passion for technology has grown into a
                full-fledged web and mobile app development company, trusted by
                businesses across industries.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section
        // data-aos-offset={-400}
        // data-aos-anchor-placement="top-bottom"
        // data-aos-anchor="selector"
        className="py-[3rem] bg-[#333333] text-white"
      >
        <div
          data-aos-offset={-400}
          // data-aos-anchor-placement="bottom-center"
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-[#7186FF] max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            Reliable AI-Driven IT Solutions Designed to Meet Your Business Needs{" "}
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At Neuracodes, we recognize that your website is more than just an
            online presence—it's a pivotal element of your brand, a strategic
            business tool, and often the first interaction point with potential
            customers. In today’s fast-paced environment, making a strong first
            impression is essential. That’s why we go beyond basic web design by
            integrating cutting-edge AI-driven features to optimize performance,
            create personalized user experiences, and provide data-driven
            insights. Our approach is designed to boost engagement, drive
            conversions, and accelerate your business growth.
          </p>
        </div>
      </section>
      <CommonProject />
      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
