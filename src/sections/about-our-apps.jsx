import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { FaBolt, FaPalette, FaPlug } from "react-icons/fa";

export default function AboutOurApps() {
    const sectionData = [
        {
            title: "Lightning-Fast Solutions",
            description: "Devlyx delivers optimized and high-performance software solutions.",
            icon: <FaBolt className="w-10 h-10 text-indigo-500" />,
            className: "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10"
        },
        {
            title: "Beautifully Crafted UI",
            description: "Modern and pixel-perfect designs for seamless user experience.",
            icon: <FaPalette className="w-10 h-10 text-indigo-500" />,
            className: "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10"
        },
        {
            title: "Easy Integration",
            description: "Plug-and-play solutions compatible with React, Next.js, and Tailwind CSS.",
            icon: <FaPlug className="w-10 h-10 text-indigo-500" />,
            className: "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10"
        },
    ];

    return (
        <section className="flex flex-col items-center" id="about">
            <SectionTitle 
                title="About Devlyx" 
                description="At Devlyx, we craft innovative IT solutions — combining speed, design, and seamless integration." 
            />
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={data.className}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="size-16 p-4 bg-indigo-600/20 border border-indigo-600/30 rounded flex justify-center items-center">
                            {data.icon}
                        </div>
                        <div className="mt-5 space-y-2 text-center">
                            <h3 className="text-base text-[20px] font-medium text-slate-200">{data.title}</h3>
                            <p className="text-sm text-slate-400">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
