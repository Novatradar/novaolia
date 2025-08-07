"use client";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    purpose: "",
    message: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const handleSubmit = async () => {
    if (
      userInput.fullName &&
      userInput.emailAddress &&
      userInput.message &&
      userInput.purpose &&
      userInput.phoneNumber
    ) {
      setLoader(true);
      const res = await fetch("/api/send-message", {
        method: "POST",
        body: JSON.stringify({
          name: userInput["fullName"],
          email: userInput["emailAddress"],
          phoneNumber: userInput["phoneNumber"],
          purpose: userInput["purpose"],
          message: userInput["message"],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        alert("Thank you for reaching out to us. We will get back to you soon");
        window.location.reload();
      } else {
        setLoader(false);
      }
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <>
      <section className="md:px-10" id="contact">
        <div className="contact-section md:rounded-[22px] max-w-[1500px] mx-auto mb-14">
          <div className="max-w-[1100px] mx-auto flex flex-col md:grid grid-cols-2 gap-28 items-end py-20 px-5 md:px-0">
            <div className="bg-white py-6 px-6 rounded-xl">
              <h2 className="text-2xl md:text-2xl md:w-[70%] font-syne mb-5">
                Reach out
              </h2>
              <form action="">
                <div className="form-group mb-4">
                  <label htmlFor="" className="text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={userInput.fullName}
                    className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="form-group">
                    <label htmlFor="" className="text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={userInput.emailAddress}
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={userInput.phoneNumber}
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="" className="text-sm mb-2">
                    Purpose
                  </label>
                  <select
                    id=""
                    name="purpose"
                    onChange={(e) => {
                      setUserInput({
                        ...userInput,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={userInput.purpose}
                    className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                  >
                    <option value="">Select purpose</option>
                    <option value="Get a quote">Get a quote</option>
                    <option value="Partnership and Investment">
                      Partnership and Investment
                    </option>
                    <option value="Request Private Labelling">
                      Request Private Labelling
                    </option>
                  </select>
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="" className="text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                    placeholder="Enter your message"
                    rows={5}
                    name="message"
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={userInput.message}
                  ></textarea>
                </div>
                <div>
                  <button
                    disabled={loader}
                    type="button"
                    onClick={handleSubmit}
                    className="py-5 w-full text-sm bg-primary rounded-lg text-black"
                  >
                    {loader ? "Please wait. Sending message" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
