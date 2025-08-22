import { useState } from "react";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // check all fields filled
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("✅ Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need help? Fill the form below and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-lg font-semibold transition 
              ${
                isFormValid
                  ? "bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-semibold text-gray-800">📍 Address</h4>
            <p className="text-gray-600">Delhi, India</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">📞 Phone</h4>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">📧 Email</h4>
            <p className="text-gray-600">support@blooddonor.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
