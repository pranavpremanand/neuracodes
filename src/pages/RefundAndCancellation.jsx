import React from "react";
import { companyDetails } from "../constant";

const RefundAndCancellation = () => {
  return (
    <div className="bg-backgroundcolor min-h-screen pt-[8rem] md:pt-[9rem] pb-12">
      <div className="wrapper">
        {/* Refund & Cancellation Policy Section */}
        <section data-aos="fade-up" className="mb-16">
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

export default RefundAndCancellation;
