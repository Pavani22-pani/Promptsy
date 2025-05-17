import React, { useState } from "react";
import emailjs from "emailjs-com"; // Make sure to install via npm: npm install emailjs-com

function HelpCenter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nezcvd8",
        "template_juu2bws",
        formData,
        "YZLLdWo39ukbrwbnY"
      )
      .then(
        (result) => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {/* Example Help Topics */}
      {[
        {
          title: "How to use the platform?",
          content:
            "To get started, sign up and explore the dashboard features...",
        },
        {
          title: "Account issues?",
          content:
            "Make sure your email is verified. Contact support if locked out.",
        },
        {
          title: "Need to reset password?",
          content:
            'Click "Forgot Password" on the login page and follow instructions.',
        },
        {
          title: "Feature Request",
          content:
            "You can suggest a feature by contacting us through the form below.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="border p-7 rounded-xl flex flex-col gap-3 h-full"
        >
          <h2 className="font-bold text-2xl">{item.title}</h2>
          <p className="text-gray-500 flex-grow">{item.content}</p>
        </div>
      ))}

      {/* Contact Form */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 border p-7 rounded-xl mt-10">
        <h2 className="font-bold text-3xl mb-4">Contact Support</h2>
        <form
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-3 rounded col-span-1 md:col-span-2"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border p-3 rounded col-span-1 md:col-span-2"
            rows="5"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 col-span-1 md:col-span-2"
          >
            Send Message
          </button>
        </form>
        {successMessage && (
          <p className="mt-3 text-green-600">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default HelpCenter;
