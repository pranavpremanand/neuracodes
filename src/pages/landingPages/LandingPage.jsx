import React, { useState } from "react";
import Contact from "../../componets/landingPages/Contact";
import {
  appLandingAbout,
  companyDetails,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Portfolio from "../../componets/landingPages/Portfolio";
import ReactPlayer from "react-player";
import landingpagevideo from "../../assets/videos/home-banner.mp4";
import Faqs from "../../componets/common/Faqs";
import { useForm } from "react-hook-form";
import Credibility from "../../componets/common/Credibility";
import image from "../../assets/images/contactimage1.webp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    // emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from Neuracodes",
      body: emailBody,
      name: "Neuracodes",
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );
      if (res.data.success) {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={landingpagevideo}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              },
            },
          }}
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        <div className="bg-black/50 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            {isWebDevelopment ? (
              <h1 className="heading-1 text-white leading-tight">
                Creating Websites Powered by Identity
                <span className="text-primary"> AI </span>
                to Shape Your Brand’s Digital
              </h1>
            ) : (
              <h1 className="heading-1 text-white leading-tight">
                Harnessing <span className="text-primary">AI</span> to Turn Your
                Ideas into Captivating Mobile Experiences
              </h1>
            )}
            <p className="text-white desc font-medium">
              We specialize in crafting innovative IT solutions designed to meet
              the unique demands of today’s dynamic businesses.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2 capitalize"
            >
              Book a call now
            </ScrollLink>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <Contact />

      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {isWebDevelopment ? "Web Development" : "App Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Empowering Leading Brands with Cutting-Edge Web Development"
                  : "Building Apps that Turn Ideas into Business Achievements"}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "We combine creativity with technical expertise to design websites that showcase your brand’s identity while providing a smooth, responsive experience across all devices. Let us help you engage your audience and drive your growth."
                  : "Whether you’re a startup with ambitious ideas or an enterprise focused on innovation, we provide comprehensive app development services tailored to your goals. Our apps boost engagement, streamline functionality, and scale alongside your business, giving you a competitive advantage."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn capitalize"
              >
                Book a call now
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="h-full object-cover w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <WhyChooseUs />
      <UnlockEfficiency />
      <Portfolio page={page} />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem]  mt-[2rem] text-primarytextcolor bg-backgro-gradient-revert"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Let’s Work Together!</h2>
              <p className="desc">
                Thank you for taking the time to learn about us. We’re excited
                about the opportunity to collaborate and bring your vision to
                life. Whether you need a trusted partner to develop your next
                big idea or want to enhance your digital presence, we’re here to
                help.
              </p>
              <img
                src={image}
                alt=""
                className="max-h-[23rem] object-cover object-[100%_20%] rounded-xl"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Schedule an appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
