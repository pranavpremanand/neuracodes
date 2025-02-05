import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/images/contactimage1.webp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";
import axios from "axios";
const Contact = () => {
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
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from Neuracodes",
      name: "Neuracodes",
      body: emailBody,
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
    <div
      id="contact"
      className="py-[3rem] text-primarytextcolor bg-backgroundcolor "
    >
      <div className="wrapper  rounded-lg ">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          {/* data-aos="fade-right" */}
          <div className="flex flex-col gap-4">
            <h2 className="heading-2">Drop Us a Message!</h2>
            <p className="">
              If you have something on your mind, we’d love to hear from you!
              Use the form below to get in touch, and we’ll make sure to respond
              as quickly as possible—usually within one business day.
            </p>
            <img
              src={image}
              alt=""
              className="max-h-[23rem] object-cover object-[100%_20%] rounded-xl"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="hover:scale-105 transition-all duration-500">
              <label htmlFor="" className="mb-6 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full placeholder-slate-800 border-primary/30 bg-transparent outline-none border-2 rounded-sm font-light px-2 py-3"
                placeholder="Enter Full Name"
                {...register("fullName", { required: "Full name is required" })}
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
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-primary/20 border-2 rounded-sm font-light px-2 py-3"
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
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-primary/20 border-2 rounded-sm font-light px-2 py-3"
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
                className="mt-1 w-full bg-transparent outline-none placeholder-slate-800 border-primary/20 border-2 rounded-sm font-light px-2 py-3"
                placeholder="Enter Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button className="primary-btn capitalize" type="submit">
              {spinner ? "Sending..." : "Schedule an appointment"}
              {/* Submit */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
