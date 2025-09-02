import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // null, true, false
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          from_message: form.message,
          to_name: "Khubaib Khan",
          to_email: "khankhubaib089@gmail.com",
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );

      setLoading(false);
      setSuccess(true); // ✅ Show success message
      setForm({ name: "", email: "", message: "" });

      // Auto-hide after 5 seconds
      setTimeout(() => setSuccess(null), 5000);
    } catch (error) {
      setLoading(false);
      setSuccess(false); // ❌ Show error message
      console.log("error in sending email", error);

      // Auto-hide after 5 seconds
      setTimeout(() => setSuccess(null), 5000);
    }
  };

  return (
    <section className="c-space py-4 flex items-center justify-center min-h-screen" id="contact">
      <div className="w-full max-w-5xl mx-auto ">
        {/* Terminal Top Bar */}
        <div className="bg-[#1C1C21] rounded-t-lg p-3 flex items-center border-b border-[#3A3A49]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-center flex-1 text-[#D6D9E9] text-sm">khubaib@terminal: ~/contact</div>
        </div>
        
        {/* Terminal Content */}
        <div className="bg-[#0E0E10] p-4 md:p-10 md:py-16 rounded-b-lg">
          <h3 className="head-text text-center mb-2">Let's talk</h3>
          <p className="text-[#AFB0B6] text-center mb-8 max-w-2xl mx-auto">
            Open to new opportunities and collaborations — feel free to reach
            out to discuss how I can contribute to your team or project.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-6">
            <div className="relative group">
              <span className="text-[#AFB0B6] text-sm font-mono block mb-1">$ name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C21] border border-[#3A3A49] rounded px-4 py-3 text-[#D6D9E9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#3A3A49] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="relative group">
              <span className="text-[#AFB0B6] text-sm font-mono block mb-1">$ email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C21] border border-[#3A3A49] rounded px-4 py-3 text-[#D6D9E9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#3A3A49] transition-all"
                placeholder="john.doe@gmail.com"
              />
            </div>

            <div className="relative group">
              <span className="text-[#AFB0B6] text-sm font-mono block mb-1">$ message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C21] border border-[#3A3A49] rounded px-4 py-3 text-[#D6D9E9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#3A3A49] transition-all min-h-[150px] resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#3A3A49] hover:bg-[#4A4A5A] text-white font-mono text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "$ send-message"}
              </button>

              {success === true && (
                <p className="text-green-400 font-mono text-sm mt-4">
                  $ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {success === false && (
                <p className="text-red-400 font-mono text-sm mt-4">
                  $ Error: Failed to send message. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
