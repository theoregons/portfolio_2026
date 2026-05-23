import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { number: "20+", label: "Websites Launched" },
    { number: "300+", label: "Students Mentored" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                            <img
                                src="https://mgx-backend-cdn.metadl.com/generate/images/1217999/2026-05-11/olqygwiaagqa/about-developer-workspace.png"
                                alt="Developer Workspace"
                                className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 to-transparent rounded-xl" />
                        </div>
                        {/* Floating decoration */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6C63FF]/20 rounded-full blur-xl animate-float" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00D9FF]/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-[#A0A0B0] leading-relaxed mb-6 text-base md:text-lg">
                            Sebagai seorang <span className="text-white font-medium">Web Developer</span>, saya memiliki latar belakang pendidikan Teknologi Informasi yang memberikan landasan kuat dalam pengembangan website.
                        </p>
                        <p className="text-[#A0A0B0] leading-relaxed mb-6 text-base md:text-lg">
                            Saya memiliki pengalaman dalam menggunakan{" "}
                            <span className="text-[#6C63FF]">Next.js</span>,{" "}
                            <span className="text-[#00D9FF]">Go</span>,{" "}
                            <span className="text-[#6C63FF]">Laravel</span>,{" "}
                            <span className="text-[#00D9FF]">Express.js</span>,{" "}
                            <span className="text-[#6C63FF]">Kotlin</span>,{" "}
                            <span className="text-[#00D9FF]">Docker</span>, dan{" "}
                            <span className="text-[#6C63FF]">Cloud Computing</span>.
                        </p>
                        <p className="text-[#A0A0B0] leading-relaxed mb-8 text-base md:text-lg">
                            Saya berfokus pada pengembangan front-end dengan tujuan meningkatkan pengalaman pengguna melalui optimasi antarmuka dan pengurangan waktu pemuatan (load time).
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="glass-card rounded-xl p-4 text-center hover:border-[#6C63FF]/50 transition-all duration-300"
                                >
                                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-[#A0A0B0] text-xs md:text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;