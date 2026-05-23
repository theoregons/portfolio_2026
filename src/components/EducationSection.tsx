import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
    { name: "Data Science & Machine Learning with Python", issuer: "Babastudio", date: "May 2021" },
    { name: "Programming with Python", issuer: "Dicoding", date: "Nov 2023" },
    { name: "Sertifikat Kompetensi - Pemrograman Web Level 4 KKNI", issuer: "LSK-TIK", date: "Dec 2022" },
    { name: "Docker for Beginners", issuer: "Udemy", date: "Sep 2021" },
    { name: "Modern JavaScript for React JS - ES6", issuer: "Udemy", date: "Feb 2021" },
    { name: "Android Firebase Firestore Masterclass", issuer: "Udemy", date: "Jan 2021" },
    { name: "Sertifikat Kompetensi - Metodologi Pelatihan", issuer: "BNSP", date: "Apr 2023" },
];

const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full" />
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-[#6C63FF]/50 transition-all duration-300 max-w-2xl mx-auto">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Teknik Informatika (S1)</h3>
                                <p className="text-[#00D9FF] text-sm mb-1">STMIK PPKIA Pradnya Paramita - Malang</p>
                                <p className="text-[#A0A0B0] text-sm">June 2023 - Present</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-bold text-center mb-6 text-white">
                        🏆 Awards
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="glass-card rounded-2xl p-6 hover:border-[#6C63FF]/50 transition-all duration-300"
                        >
                            <div className="text-[#6C63FF] text-sm font-medium mb-2">December 2023</div>
                            <h4 className="text-lg font-bold text-white mb-2">Profesional Tersertifikasi BNSP</h4>
                            <p className="text-[#A0A0B0] text-sm">
                                Mementori lebih dari 300 peserta program Prakerja selama 3 tahun, dengan fokus pada pengembangan web full-stack menggunakan Laravel.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="glass-card rounded-2xl p-6 hover:border-[#6C63FF]/50 transition-all duration-300"
                        >
                            <div className="text-[#00D9FF] text-sm font-medium mb-2">December 2022</div>
                            <h4 className="text-lg font-bold text-white mb-2">Programmer Web Tersertifikasi KKNI Level 4</h4>
                            <p className="text-[#A0A0B0] text-sm">
                                Meraih sertifikasi KKNI Level 4, standar nasional yang mengakui kemahiran profesional dalam Pemrograman Web.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-center mb-6 text-white">
                        📜 Certifications & Licenses
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-3">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                                whileHover={{ x: 8 }}
                                className="glass-card rounded-xl p-4 flex items-center justify-between gap-4 hover:border-[#6C63FF]/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D9FF]" />
                                    <div>
                                        <p className="text-white text-sm font-medium">{cert.name}</p>
                                        <p className="text-[#A0A0B0] text-xs">{cert.issuer}</p>
                                    </div>
                                </div>
                                <span className="text-[#A0A0B0] text-xs whitespace-nowrap">{cert.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;