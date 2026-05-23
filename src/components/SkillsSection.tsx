import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "Next.JS", icon: "⚡", color: "#6C63FF" },
    { name: "Laravel", icon: "🔥", color: "#00D9FF" },
    { name: "Express.JS", icon: "🚀", color: "#6C63FF" },
    { name: "Golang", icon: "🐹", color: "#00D9FF" },
    { name: "Docker", icon: "🐳", color: "#6C63FF" },
    { name: "Cloud Computing", icon: "☁️", color: "#00D9FF" },
    { name: "Kotlin", icon: "📱", color: "#6C63FF" },
    { name: "MYSQL", icon: "🗄️", color: "#00D9FF" },
    { name: "MongoDB", icon: "🍃", color: "#6C63FF" },
    { name: "CI/CD", icon: "🔄", color: "#00D9FF" },
    { name: "Rest API", icon: "🔗", color: "#6C63FF" },
    { name: "Bun Hono", icon: "🍞", color: "#00D9FF" },
    { name: "Firebase", icon: "🔶", color: "#6C63FF" },
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-20 md:py-32 relative">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://mgx-backend-cdn.metadl.com/generate/images/1217999/2026-05-11/olqydoaaagpa/skills-tech-abstract.png)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tech <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full" />
                    <p className="text-[#A0A0B0] mt-4 max-w-lg mx-auto">
                        Teknologi dan tools yang saya gunakan untuk membangun solusi digital berkualitas tinggi
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="glass-card rounded-xl p-4 text-center cursor-pointer group hover:border-[#6C63FF]/50 transition-all duration-300"
                        >
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <p className="text-white text-sm font-medium group-hover:text-[#00D9FF] transition-colors duration-300">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;