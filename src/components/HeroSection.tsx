import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const roles = ["Fullstack Developer", "Instructor", "Dev Ops", "Mobile Developer"];

const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayText === role) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(role.substring(0, displayText.length - 1));
            }, 50);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(role.substring(0, displayText.length + 1));
            }, 100);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const particles = Array.from({length: 20}, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${10 + Math.random() * 10}s`,
        size: `${2 + Math.random() * 4}px`,
    }));

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: `url(https://mgx-backend-cdn.metadl.com/generate/images/1217999/2026-05-11/olqyaaqaagqa/hero-background-abstract-tech.png)`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/60 to-[#0A0A0F]"/>

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-[#6C63FF]/40 animate-particle"
                        style={{
                            left: p.left,
                            bottom: "-10px",
                            width: p.size,
                            height: p.size,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <p className="text-[#A0A0B0] text-sm md:text-base mb-4 tracking-widest uppercase">
                        Welcome to my portfolio
                    </p>
                </motion.div>

                <motion.h1
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                    <span className="gradient-text">Baktiar Mahardika</span>
                </motion.h1>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.6}}
                    className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 h-10"
                >
                    <span>{displayText}</span>
                    <span className="animate-typing-cursor text-[#00D9FF]">|</span>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[#A0A0B0] text-sm sm:mt-20 lg:mt-24"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#6C63FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"/>
                    </svg>
                    Malang, Indonesia
                  </span>
                            <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00D9FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    baktiarmahardika08@gmail.com
                  </span>
                            <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#6C63FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    +628988078239
                  </span>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 mt-24"
                >
                    <a href="#about"
                       onClick={(e) => {
                           e.preventDefault();
                           document.querySelector("#about")?.scrollIntoView({behavior: "smooth"});
                       }}
                       className="hidden sm:flex flex-col items-center gap-2 text-[#A0A0B0] hover:text-white transition-colors">
                        <span className="text-xs tracking-widest">SCROLL DOWN</span>
                        <motion.div
                            animate={{y: [0, 8, 0]}}
                            transition={{duration: 1.5, repeat: Infinity}}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                            </svg>
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;