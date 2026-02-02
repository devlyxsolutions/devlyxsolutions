import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navlinks = [
        {
            href: "#creations",
            text: "Creations",
        },
        {
            href: "#about",
            text: "About",
        },
        {
            href: "#testimonials",
            text: "Testimonials",
        },
        {
            href: "#contact",
            text: "Contact",
        },
    ];
    return (
        <>
            <motion.nav className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* Logo */}
                <a className="flex items-center gap-2 cursor-pointer">
                    <img
                        className="h-9 w-auto"
                        src="/assets/wlgo.png"
                        width={138}
                        height={36}
                        alt="logo"
                    />
                    <span className="text-xl font-semibold tracking-wide text-white">
                        DEV<span className="text-indigo-600">LYX</span>
                    </span>
                </a>

                {/* Desktop nav links */}
                <div className="hidden lg:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <Link key={link.href} to={link.href} className="hover:text-slate-300 transition">
                            {link.text}
                        </Link>
                    ))}
                </div>

                {/* Get Started button */}
                <div className="hidden lg:block">
                    <a href="#contact">
                        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md active:scale-95">
                            Get started
                        </button>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition">
                    <MenuIcon className="size-6.5" />
                </button>
            </motion.nav>

            {/* Mobile menu overlay */}
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link) => (
                    <Link key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)}>
                        {link.text}
                    </Link>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md active:scale-95">
                        Get started
                    </button>
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}
