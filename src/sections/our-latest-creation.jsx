import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function OurServicesInteractive() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const services = [
        {
            title: "Custom Web Development",
            description: "Tailor-made websites engineered for performance, clarity, and business goals.",
            icon: <FaCode className="w-10 h-10 text-indigo-500" />,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=90&w=1200&auto=format&fit=crop"
        },
        {
            title: "Responsive Mobile Apps",
            description: "Seamless cross-platform apps for iOS and Android with smooth UX.",
            icon: <FaMobileAlt className="w-10 h-10 text-indigo-500" />,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=90&w=1200&auto=format&fit=crop"
        },
        {
            title: "UI/UX Design",
            description: "Modern, intuitive designs that engage users and enhance brand value.",
            icon: <FaPaintBrush className="w-10 h-10 text-indigo-500" />,
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=90&w=1200&auto=format&fit=crop"
        },

    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isHovered, services.length]);

    return (
        <section className="flex flex-col items-center  py-20" id="services">
            <SectionTitle
                title="Our Services"
                description="Explore Devlyx's premium web development, design, and tech solutions."
            />

            <div
                className="flex items-center gap-4 h-[420px] w-full max-w-6xl mt-18 mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        className={`relative group flex-grow h-full rounded-xl overflow-hidden
                            ${
                                isHovered && className
                                    ? "hover:w-full w-60"
                                    : index === activeIndex
                                    ? "w-full"
                                    : "w-60"
                            }
                            ${className}
                            ${!className ? "pointer-events-none" : ""}
                        `}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() =>
                            setClassName("transition-all duration-500")
                        }
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                        }}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover"
                        />
                        <div
                            className={`absolute inset-0 flex flex-col justify-end p-8 text-white
                                bg-gradient-to-t from-black/80 via-black/40 to-transparent
                                transition-all duration-300
                                ${
                                    isHovered && className
                                        ? "opacity-0 group-hover:opacity-100"
                                        : index === activeIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }
                            `}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                {service.icon}
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-sm opacity-90">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
