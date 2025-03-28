import { useState } from 'react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic (e.g., send an email, save to database, etc.)
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  return (
    <div className={`py-16 px-8 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Contact Us</h2>
        <p className={`text-lg mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Feel free to reach out to us with any questions or feedback!
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"} border ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"} border ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"} border ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-lg font-semibold rounded-md ${theme === "dark" ? "bg-blue-600 text-white" : "bg-blue-500 text-white"} hover:${theme === "dark" ? "bg-blue-500" : "bg-blue-600"} transition`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
