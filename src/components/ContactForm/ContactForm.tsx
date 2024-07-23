"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 md:p-8 xl:p-12 shadow-lg text-center w-full  bg-lightBlue bg-opacity-[70%]"
      >
        <div className="mb-6 flex flex-col md:flex-row md:gap-4 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-4 border border-gray-300 text-white placeholder:text-montserrat placeholder:text-white bg-lightBlue bg-opacity-[70%] outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-4 border border-gray-300 text-white placeholder:text-white bg-lightBlue bg-opacity-[70%] outline-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full p-4 border border-gray-300 min-h-[180px] text-white placeholder:text-white bg-lightBlue bg-opacity-[70%] outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-[33px] text-titleColor hover:text-white border-2 border-titleColor hover:border-white uppercase px-8 xl:px-16 py-1 font-bebas transition-all duration-300 ease-in-out hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)]"
        >
          SUBMIT
        </button>
      </form>
      {/* {successMessage && (
        <div className="mt-4 text-titleColor text-center font-bold">
          {successMessage}
        </div>
      )} */}
    </>
  );
}
