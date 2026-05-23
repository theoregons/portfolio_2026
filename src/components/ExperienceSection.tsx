import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Karisma Academy",
        location: "Malang",
        role: "Instruktur & Fullstack Web Developer",
        period: "March 2021 - Present",
        points: [
            "Mengonversi mockup desain menjadi situs web fungsional dengan React.JS, Next.JS, MYSQL, Express.JS, Laravel, dan Bun Hono",
            "Sukses meluncurkan lebih dari 8 situs web sesuai spesifikasi klien dan tenggat waktu",
            "Meningkatkan keterlibatan siswa sebesar 15% dan partisipasi kelas sebesar 50%",
            "Mementori lebih dari 5 pengajar baru dalam manajemen kelas dan teknik pengajaran",
        ],
    },
    {
        company: "ICUBE Inc",
        location: "Jakarta",
        role: "Backend Developer",
        period: "August 2021 - July 2022",
        points: [
            "Berkontribusi pada kesuksesan penyelesaian lebih dari 3 proyek berskala besar",
            "Peningkatan efisiensi kode sebesar 15% dan pengurangan waktu pemrosesan sebesar 20%",
            "Tingkat kepuasan klien mencapai 99% untuk lebih dari 2 aplikasi client-facing",
            "Berkolaborasi dengan tim lintas divisi melibatkan lebih dari 7 anggota tim",
        ],
    },
    {
        company: "PT. Global Media Solution",
        location: "Malang",
        role: "Fullstack Web Developer",
        period: "January 2019 - December 2019",
        points: [
            "Mengembangkan situs web menggunakan HTML, CSS, JavaScript, dan jQuery",
            "Merilis lebih dari 3 situs web responsif dengan peningkatan user engagement 25%",
            "Mengonversi mockup desain menjadi situs web fungsional dengan HTML, JavaScript, AJAX, dan JSON",
            "Merancang desain front-end yang selaras dengan identitas merek",
        ],
    },
];

const ExperienceCard = ({
                            exp,
                            index,
                        }: {
    exp: (typeof experiences)[0];
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="relative flex items-center mb-12 md:mb-16">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF] to-[#00D9FF] md:-translate-x-px" />

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 rounded-full bg-[#6C63FF] border-2 border-[#00D9FF] -translate-x-1.5 md:-translate-x-1.5 z-10 animate-glow" />

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`ml-10 md:ml-0 md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
            >
                <div className="glass-card rounded-2xl p-6 hover:border-[#6C63FF]/50 transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-[#00D9FF] font-medium px-2 py-1 rounded-full bg-[#00D9FF]/10">
              {exp.period}
            </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#6C63FF] transition-colors">
                        {exp.role}
                    </h3>
                    <p className="text-[#A0A0B0] text-sm mb-4">
                        {exp.company} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-[#A0A0B0] text-sm">
                                <span className="text-[#6C63FF] mt-1 flex-shrink-0">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

const ExperienceSection = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-20 md:py-32 relative">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://mgx-backend-cdn.metadl.com/generate/images/1217999/2026-05-11/olqyckaaagpq/experience-timeline-bg.png)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Title */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.company} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;