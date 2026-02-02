import SectionTitle from "../components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ni0jidf",     // EmailJS Service ID
        "template_3eacgig",    // Template ID
        formRef.current,
        "1S8CTUkCc3AgHkFsr"    // Public Key
      )
      .then(
        (result) => {
          setSending(false);
          formRef.current.reset();
          setShowToast(true);

          // Auto hide toast after 3 seconds
          setTimeout(() => setShowToast(false), 3000);
        },
        (error) => {
          setSending(false);
          alert("Oops, something went wrong.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col items-center relative" id="contact">
      <SectionTitle
        title="Get in Touch"
        description="Have a project in mind or want to collaborate? Drop us a message and our Devlyx team will get back to you promptly."
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl mx-auto text-slate-400 mt-16 w-full"
      >
        {/* Name */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <label className="font-medium text-slate-200">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <label className="font-medium text-slate-200">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600"
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <label className="font-medium text-slate-200">Your Message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Tell us about your project or enquiry"
            className="resize-none w-full mt-2 p-3 outline-none rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 border border-slate-700"
            required
          />
        </motion.div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={sending}
          className={`w-max flex items-center gap-2 px-8 py-3 rounded-full text-white ${
            sending ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          {sending ? "Sending..." : "Send Message"}
          <ArrowUpRight className="size-4.5" />
        </motion.button>
      </form>

      {/* PREMIUM POPUP TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full animate-pulse">
              ✅
            </div>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm opacity-80">Our Devlyx team will contact you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
