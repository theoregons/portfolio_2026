import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        name: "Karisma Academy",
        url: "https://karismaacademy.com",
        description: "Platform utama Karisma Academy - lembaga kursus dan pelatihan profesional di bidang teknologi informasi.",
        tags: ["Landing Page", "Company Profile", "Education"],
        color: "#6C63FF",
        screenshot: `https://image.thum.io/get/width/600/crop/400/https://karismaacademy.com`,
    },
    {
        name: "MyCTC",
        url: "https://myctc.kodedev.my.id",
        description: "Website perusahaan MyCTC Indonesia - solusi teknologi dan layanan digital untuk bisnis.",
        tags: ["Company Profile", "Corporate", "Services"],
        color: "#6C63FF",
        screenshot: `https://image.thum.io/get/width/600/crop/400/https://myctc.kodedev.my.id`,
    },
    {
        name: "Ranch Market",
        url: "https://ranchmarket.co.id",
        description: "Website resmi Ranch Market - supermarket premium dengan produk segar berkualitas tinggi.",
        tags: ["E-Commerce", "Retail", "Corporate"],
        color: "#00D9FF",
        screenshot: `https://image.thum.io/get/width/600/crop/400/https://ranchmarket.co.id`,
    },
    {
        name: "Kursus Karisma Academy",
        url: "https://kursus.karismaacademy.com",
        description: "Platform kursus online untuk peserta pelatihan dengan sistem manajemen pembelajaran (LMS) terintegrasi.",
        tags: ["LMS", "E-Learning", "Dashboard"],
        color: "#00D9FF",
        screenshot: `https://image.thum.io/get/width/600/crop/400/https://kursus.karismaacademy.com`,
    },
    {
        name: "Hybrid Karisma Academy",
        url: "https://hybrid.karismaacademy.com",
        description: "Platform pembelajaran hybrid yang menggabungkan kelas online dan offline untuk pengalaman belajar optimal.",
        tags: ["Hybrid Learning", "Platform", "Education"],
        color: "#6C63FF",
        screenshot: `https://image.thum.io/get/width/600/crop/400/https://hybrid.karismaacademy.com`,
    },
];

const PortfolioSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const handleImgError = (name: string) => {
        setImgErrors((prev) => ({ ...prev, [name]: true }));
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/3 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Portfolio</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full" />
                    <p className="text-[#A0A0B0] mt-4 max-w-lg mx-auto">
                        Beberapa proyek website yang telah saya kerjakan dan berhasil diluncurkan
                    </p>
                </motion.div>

                {/* Portfolio Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <motion.a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-[#6C63FF]/50 transition-all duration-300 block"
                        >
                            {/* Screenshot Image */}
                            <div className="relative h-48 overflow-hidden bg-[#1A1A2E]">
                                {!imgErrors[project.name] ? (
                                    <img
                                        src={project.screenshot}
                                        alt={`Screenshot of ${project.name}`}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        onError={() => handleImgError(project.name)}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                                        }}
                                    >
                                        <div className="text-center">
                                            <svg className="w-10 h-10 mx-auto mb-2 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                            <span className="text-xs text-[#A0A0B0] font-mono">
                        {project.url.replace("https://", "")}
                      </span>
                                        </div>
                                    </div>
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* External link icon */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0A0F]/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>

                                {/* URL badge */}
                                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-white/90 bg-[#0A0A0F]/70 px-2 py-1 rounded-md backdrop-blur-sm font-mono">
                    {project.url.replace("https://", "")}
                  </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6C63FF] transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;