import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-[#0A0A0F]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full mb-6" />
                    <p className="text-[#A0A0B0] max-w-lg mx-auto">
                        Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        onClick={() => copyToClipboard("baktiarmahardika08@gmail.com", "email")}
                        className="glass-card rounded-2xl p-6 text-center cursor-pointer hover:border-[#6C63FF]/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D9FF] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold mb-1">Email</h3>
                        <p className="text-[#A0A0B0] text-sm">baktiarmahardika08@gmail.com</p>
                        <p className="text-[#6C63FF] text-xs mt-2">
                            {copied === "email" ? "✓ Copied!" : "Click to copy"}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        onClick={() => copyToClipboard("+628988078239", "phone")}
                        className="glass-card rounded-2xl p-6 text-center cursor-pointer hover:border-[#6C63FF]/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#6C63FF] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold mb-1">Phone</h3>
                        <p className="text-[#A0A0B0] text-sm">+628988078239</p>
                        <p className="text-[#00D9FF] text-xs mt-2">
                            {copied === "phone" ? "✓ Copied!" : "Click to copy"}
                        </p>
                    </motion.div>
                </div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="glass-card rounded-2xl p-6 inline-block">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#6C63FF]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#A0A0B0]">Malang 65123, Indonesia</span>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16 pt-8 border-t border-[#1A1A2E]"
                >
                    <p className="text-[#A0A0B0] text-sm">
                        © 2025 Baktiar Mahardika. Built with React.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;