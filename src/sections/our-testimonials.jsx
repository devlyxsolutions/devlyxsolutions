import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        { 
            quote: "Devlyx delivered a modern, responsive website that exceeded our expectations. Highly professional!", 
            name: "Oliver Smith", 
            role: "CEO, TechWave UK", 
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", 
        },
        { 
            quote: "Their UI/UX design is exceptional. Our users love the clean and intuitive interface.", 
            name: "Amelia Brown", 
            role: "Product Manager, Creative Solutions", 
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", 
        },
        { 
            quote: "Fast, efficient, and reliable development. The website performs flawlessly across all devices.", 
            name: "Harry Wilson", 
            role: "Head of Design, BrightIdeas Ltd", 
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", 
        },
        { 
            quote: "The team is amazing! They delivered a pixel-perfect website with smooth animations and modern design.", 
            name: "Isla Taylor", 
            role: "Tech Lead, FutureSoft UK", 
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", 
        },
        { 
            quote: "Our website is now fully responsive, fast, and user-friendly. Devlyx made the process seamless.", 
            name: "Jack Davies", 
            role: "Founder, WebStart UK", 
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", 
        },
        { 
            quote: "Professional web development from start to finish. The result is visually stunning and highly functional.", 
            name: "Sophia Johnson", 
            role: "Entrepreneur, InnovateHub", 
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", 
        },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle 
                title="Our Testimonials" 
                description="See what our UK clients say about Devlyx — delivering top-notch web development solutions every time." 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={testimonial.name} 
                        className="group border border-slate-800 p-6 rounded-xl"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-slate-100 text-base">{testimonial.quote}</p>
                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img className="w-10 h-10 rounded-full" src={testimonial.image} alt="user image" />
                            <div>
                                <h2 className="text-gray-200 font-medium">{testimonial.name}</h2>
                                <p className="text-indigo-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
