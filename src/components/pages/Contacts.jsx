import React, { useState } from 'react';

const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Backend API call goes here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-6 py-20 font-orbitron">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center h-full">

        {/* 👉 Left Section (Centered Vertically) */}
        <div className="h-full flex items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-400 font-serif">Let’s Connect</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-serif">I approach every client brief as an opportunity to uncover a compelling narrative and bring it to life. My goal is to transform ideas into stories that resonate, captivate, and deliver impact across every frame.</p>
            <p className="text-gray-300 text-lg leading-relaxed font-serif">
              Whether you want to start a project, have a question, or just want to say hi —
              I’ll try my best to get back to you! Fill out the form and I’ll be in touch as
              soon as possible. Looking forward to collaborating with you.
            </p>
            <p className="text-sm text-gray-400">📍 Based in India | Available Worldwide</p>
          </div>
        </div>

        {/* 👉 Right Section: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1f1f1f] p-8 rounded-lg w-full shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-purple-500"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="mt-4 p-3 w-full rounded bg-gray-800 text-white outline-none focus:ring-2 ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Description"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="mt-4 p-3 w-full rounded bg-gray-800 text-white outline-none focus:ring-2 ring-purple-500"
          />

          <div className="mt-4 flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              required
              className="mr-2 accent-purple-600"
            />
            <label className="text-sm">
              I agree to be contacted regarding my inquiry.
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 bg-purple-600 hover:bg-purple-700 w-full py-3 rounded font-semibold text-white transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
