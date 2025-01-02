import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2 max-w-5xl mx-auto text-center">
          Are You Ready to Take Your Business to the Next Level with AI?
        </h2>
        <p className="desc max-w-[40rem] text-center">
          Our mission is to deliver AI-powered solutions that evolve with your
          business. Explore how our innovative services can help you achieve new
          milestones—let's connect and build a smarter, more successful future
          together!
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
