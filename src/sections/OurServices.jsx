import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function OurServices() {
    const services = [
        {
            title: "Custom Web Development",
            description: "We build tailor-made websites that fit your brand and business goals perfectly.",
            icon: <FaCode className="text-indigo-500 w-10 h-10" />
        },
        {
            title: "Responsive Mobile Apps",
            description: "Seamless cross-platform mobile applications for iOS and Android with smooth UX.",
            icon: <FaMobileAlt className="text-indigo-500 w-10 h-10" />
        },
        {
            title: "UI/UX Design",
            description: "Pixel-perfect, modern, and intuitive designs that engage your users.",
            icon: <FaPaintBrush className="text-indigo-500 w-10 h-10" />
        },
        {
            title: "Backend & API Development",
            description: "Robust, secure, and scalable backend solutions for websites and apps.",
            icon: <FaServer className="text-indigo-500 w-10 h-10" />
        },
        {
            title: "Performance Optimization",
            description: "High-speed websites and apps optimized for performance and SEO.",
            icon: <FaRocket className="text-indigo-500 w-10 h-10" />
        },
        {
            title: "Security & Maintenance",
            description: "Continuous monitoring, updates, and security solutions to protect your digital assets.",
            icon: <FaShieldAlt className="text-indigo-500 w-10 h-10" />
        },
    ];

    return (
        <section className="flex flex-col items-center py-20" id="services">
            <SectionTitle 
                title="What We Do" 
                description="Discover the wide range of web development and design solutions we provide for our UK clients." 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div 
                        key={service.title}
                        className="relative bg-gradient-to-br from-[#1a1a2e] to-[#111119] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-700/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-indigo-500/20 rounded-full blur-3xl"></div>

                        <div className="flex items-center justify-center mb-6">
                            {service.icon}
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-slate-400">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
