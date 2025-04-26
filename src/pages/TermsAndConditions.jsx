import React from "react";
import { companyDetails } from "../constant";

const TermsAndConditions = () => {
  return (
    <div className="bg-backgroundcolor min-h-screen pt-[8rem] md:pt-[9rem] pb-12">
      <div className="wrapper">
        {/* Terms and Conditions Section */}
        <section data-aos="fade-up" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="heading-2">Terms and Conditions</h2>
          </div>
          <p className="text-sm text-primary mb-2">
            Effective Date: 26/04/2025
          </p>
          <p className="desc mb-8">
            By accessing this website or availing any of our services, you agree
            to be bound by the following terms and conditions:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Services
              </h3>
              <p className="desc mb-2">NeuraCodes offers services such as:</p>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>AI-integrated web and app development</li>
                <li>Automation solutions</li>
                <li>Custom software and consulting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Client Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>Provide accurate project information</li>
                <li>Use our deliverables as per the scope agreed</li>
                <li>Respect intellectual property terms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>
                  All payments are to be made upfront or as per the agreed
                  milestones
                </li>
                <li>Late payments may attract penalties</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Intellectual Property
              </h3>
              <p className="desc">
                Code, designs, and documentation created for you will be your
                property after final payment, unless stated otherwise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="heading-2">Contact Us</h2>
          </div>
          <p className="desc mb-4">Have questions?</p>
          <div className="space-y-2 desc">
            <p>
              Email:{" "}
              <a
                href="mailto:support@neuracodes.com"
                className="text-primary hover:underline"
              >
                support@neuracodes.com
              </a>
            </p>
            <p>Phone: {companyDetails.phone}</p>
            <p>
              Official Address:
              <br />
              {companyDetails.address}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
