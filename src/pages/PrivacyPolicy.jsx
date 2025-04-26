import React from "react";
import { companyDetails } from "../constant";

const PrivacyPolicy = () => {
  return (
    <div className="bg-backgroundcolor min-h-screen pt-[8rem] md:pt-[9rem] pb-12">
      <div className="wrapper">
        {/* Privacy Policy Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="heading-2">Privacy Policy</h2>
          </div>
          <p className="text-sm text-primary mb-2">
            Effective Date: 26/04/2025
          </p>
          <p className="desc mb-8">
            At NeuraCodes, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>Name, email, contact number</li>
                <li>Business or project details shared with us</li>
                <li>
                  Billing details (processed securely via third-party payment
                  providers like Razorpay)
                </li>
                <li>Website usage data via cookies and analytics tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>To provide and improve our services</li>
                <li>For communication and project updates</li>
                <li>For billing and transactional purposes</li>
                <li>To analyze trends and improve website performance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Data Sharing
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>We do not sell your personal data.</li>
                <li>
                  Data may be shared with trusted partners like payment
                  processors or when legally required.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Your Rights
              </h3>
              <p className="desc">
                You may access, update, or delete your data by writing to{" "}
                <a
                  href="mailto:support@neuracodes.com"
                  className="text-primary hover:underline"
                >
                  support@neuracodes.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Cookies
              </h3>
              <p className="desc">
                We use cookies to improve your experience and track usage. You
                may disable cookies in your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Contact Us
              </h3>
              <p className="desc">
                For concerns or requests, contact{" "}
                <a
                  href="mailto:support@neuracodes.com"
                  className="text-primary hover:underline"
                >
                  support@neuracodes.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="mb-16">
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

        {/* Refund & Cancellation Policy Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="heading-2">Refund & Cancellation Policy</h2>
          </div>
          <p className="text-sm text-primary mb-2">
            Effective Date: 26/04/2025
          </p>
          <p className="desc mb-8">
            We value your trust and believe in transparent dealings.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Project Cancellation
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>
                  Projects can be cancelled only within 48 hours of payment if
                  no work has started
                </li>
                <li>
                  A written request to{" "}
                  <a
                    href="mailto:support@neuracodes.com"
                    className="text-primary hover:underline"
                  >
                    support@neuracodes.com
                  </a>{" "}
                  is required
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Refunds
              </h3>
              <ul className="list-disc pl-6 space-y-2 desc">
                <li>
                  Refunds are not applicable after project development has
                  started or resources have been allocated
                </li>
                <li>
                  In case of dissatisfaction, we offer revision and support as
                  per the scope agreed
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-raleway font-semibold mb-4">
                Exceptions
              </h3>
              <p className="desc">
                Any errors or failure on our part will be addressed promptly at
                no additional cost
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section>
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

export default PrivacyPolicy;
