"use client";
import { Mail } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <Mail className="w-12 h-12 bg-gray-200 rounded-lg px-2 mb-4" />
        <h1 className="text-4xl font-bold dark:text-gray-50 text-gray-900 mb-4">
          Contact Me
        </h1>
        <p className="dark:text-gray-50 text-gray-600">
          Reach out to me over email or fill up this contact form. I will get
          back to you ASAP - I promise.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 px-6 text-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
