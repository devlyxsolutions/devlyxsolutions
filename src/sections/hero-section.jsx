import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center -mt-18">

      {/* BACKGROUND ARC */}
      <motion.svg
        className="absolute -z-10 w-full -mt-40 md:mt-0"
        width="1440"
        height="676"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 428 292)scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </motion.svg>

      {/* LOGO */}
      <motion.img
        src="/assets/wlgo.png"
        alt="Devlyx Logo"
        className="h-36 w-auto mt-28 mb-3"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70 }}
      />

      {/* BADGE */}
      <motion.a
        className="flex items-center gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2 text-sm"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
      >
        <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Free strategy call</span>
      </motion.a>

      {/* HEADING */}
      <motion.h1
        className="text-center text-5xl md:text-6xl leading-tight mt-4 font-semibold max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70 }}
      >
        Digital solutions that grow your business
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        className="text-center text-sm md:text-base max-w-md mt-2 text-slate-300"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
      >
        Web development, SEO & social media marketing — built to scale.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="flex items-center gap-4 mt-7"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70 }}
      >
        <button
          onClick={() => scrollToSection("contact")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white active:scale-95 rounded-lg px-7 h-11"
        >
          Get started
          <ArrowRight className="size-5" />
        </button>

        <button
          onClick={() => scrollToSection("services")}
          className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11"
        >
          Services
        </button>
      </motion.div>

      <TiltedImage />
    </section>
  );
}
