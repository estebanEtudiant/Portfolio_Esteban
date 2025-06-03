import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaReact, FaNodeJs, FaTools, FaProjectDiagram, FaCode, FaLaptopCode } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


import facturationImg from "./assets/facturation.png";
import tetePhotoImg from "./assets/tete.jpg"


const Section = ({ title, children, className = "" }) => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className={`py-16 px-6 max-w-5xl mx-auto ${className}`}
    >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-white relative pb-4">
            {title}
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-blue-400 rounded-full"
            ></motion.span>
        </h2>
        <div className="text-gray-300 text-lg sm:text-xl leading-relaxed space-y-6">
            {children}
        </div>
    </motion.section>
);

const Card = ({ title, description, icon, technologies, link }) => (
    <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col h-full hover:border-blue-600 transition-colors duration-300"
    >
        {icon && <div className="text-blue-400 text-5xl mb-4 text-center">{icon}</div>}
        <h3 className="text-2xl font-bold text-white mb-3 text-center">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
        {technologies && (
            <div className="mt-4 pt-4 border-t border-gray-600">
                <p className="text-sm font-semibold text-gray-400 mb-2">Technologies :</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-900 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        )}
        {link && (
            <div className="mt-6 text-center">
                <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                    whileTap={{ scale: 0.95 }}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
                >
                    Voir le projet
                </motion.a>
            </div>
        )}
    </motion.div>
);

const ProjectCard = ({ title, description, technologies, link, imageSrc, imageAlt }) => (
    <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700 flex flex-col lg:flex-row gap-8 items-center"
    >
        {imageSrc && (
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:w-1/2 w-full flex-shrink-0"
            >
                <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-xl border border-gray-700 object-cover w-full h-auto" />
            </motion.div>
        )}
        <div className="flex flex-col flex-grow lg:w-1/2 w-full">
            <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 text-lg mb-6 flex-grow">{description}</p>
            {technologies && (
                <div className="mt-auto pt-4 border-t border-gray-600">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Technologies utilisées :</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-900 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {link && (
                <div className="mt-6 text-center lg:text-left">
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                        whileTap={{ scale: 0.95 }}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Voir le projet sur GitHub
                        <FaGithub className="ml-2" />
                    </motion.a>
                </div>
            )}
        </div>
    </motion.div>
);

const SkillChart = () => {
    const data = {
        labels: ["React", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Axios"],
        datasets: [
            {
                label: "Niveau",
                data: [85, 75, 70, 65, 80, 70],
                fill: true,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "#3B82F6",
                pointBackgroundColor: "#3B82F6",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#3B82F6",
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: "#ccc" }
            },
            title: {
                display: true,
                text: "Mes compétences techniques (%)",
                color: "#fff",
                font: {
                    size: 20,
                    weight: "bold"
                }
            },
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.7)",
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "#3B82F6",
                borderWidth: 1
            }
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(255,255,255,0.1)"
                },
                ticks: { color: "#ccc" }
            },
            y: {
                grid: {
                    color: "rgba(255,255,255,0.1)"
                },
                ticks: {
                    color: "#ccc",
                    beginAtZero: true,
                    max: 100,
                    callback: function(value) {
                        return value + "%";
                    }
                }
            }
        }
    };

    return (
        <div className="mt-10 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700" style={{ height: "400px" }}>
            <Line data={data} options={options} />
        </div>
    );
};

const ScrollProgress = () => {
    useEffect(() => {
        const progressBar = document.getElementById("scroll-progress");
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${progress}%`;
        };
        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 bg-blue-400 z-50" id="scroll-progress"></div>
    );
};

const StarParticles = () => {
    const particlesInit = async (engine) => {
        await loadStarsPreset(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: "stars",
                background: { color: "#0f172a" },
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    color: {
                        value: "#ADD8E6"
                    },
                    links: {
                        color: "#ADD8E6",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 0.5
                    },
                    number: {
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    size: {
                        value: 2
                    }
                }
            }}
        />
    );
};

const TimelineItem = ({ date, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mb-8 pl-8 sm:pl-12 border-l-4 border-blue-600 last:border-l-0"
    >
        <div className="absolute -left-2 sm:-left-2.5 top-0 w-4 h-4 bg-blue-400 rounded-full shadow-lg border-2 border-gray-900"></div>
        <p className="text-sm text-gray-400 mb-1">{date}</p>
        <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </motion.div>
);

const Timeline = () => (
    <Section title="Timeline du Stage">
        <div className="relative">
            <TimelineItem
                date="13 mai – 16 mai 2025"
                title="Découverte de l’environnement"
                description="Présentation de l’association, étude du système de facturation Excel, inventaire du parc informatique."
                index={0}
            />
            <TimelineItem
                date="19 mai – 30 mai 2025"
                title="Début du développement"
                description="Conception du MCD, mise en place du backend (Node.js, Prisma) et de l’interface usagers en React."
                index={1}
            />
            <TimelineItem
                date="3 juin – 21 juin 2025"
                title="Fonctionnalités avancées"
                description="Génération PDF, édition inline, gestion mensuelle, configuration des paramètres de facturation."
                index={2}
            />
            <TimelineItem
                date="24 juin – 11 juillet 2025"
                title="Finalisation & optimisation"
                description="Optimisation UX, organisation du code, test du système et rédaction du rapport."
                index={3}
            />
        </div>
    </Section>
);

const ProfilePicture = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center mb-8"
    >
        <img
            src={tetePhotoImg}
            alt="Esteban - Développeur Web"
            className="rounded-full w-40 h-40 object-cover border-4 border-blue-400 shadow-xl"
        />
    </motion.div>
);

export default function App() {
    return (
        <div className="font-sans bg-gray-950 text-white overflow-hidden relative">
            <ScrollProgress />
            <StarParticles />

            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20 px-4 text-center shadow-2xl rounded-b-[8rem] relative z-10 border-b-4 border-blue-700"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-6xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight"
                >
                    Esteban <span className="text-blue-400">Développeur Web</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 text-2xl sm:text-3xl font-light max-w-2xl mx-auto text-gray-200"
                >
                    Étudiant en BUT Informatique, passionné par le développement d'applications web modernes et performantes.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6, staggerChildren: 0.2 }}
                    className="mt-10 flex justify-center space-x-6"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#E0F2FE", color: "#1E40AF" }}
                        whileTap={{ scale: 0.95 }}
                        href="#projets"
                        className="bg-white text-blue-700 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
                    >
                        Mes Projets
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#1E40AF", borderColor: "#1E40AF" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-blue-700 transition duration-300 transform hover:-translate-y-1"
                    >
                        Contactez-moi
                    </motion.a>
                </motion.div>
            </motion.header>

            <Section title="À propos de moi" className="bg-gray-800/50 rounded-xl my-12 shadow-inner border border-gray-700 backdrop-blur-sm">
                <ProfilePicture />
                <p>
                    Étudiant en 2e année de BUT Informatique, j’ai récemment achevé un stage de 9 semaines (du 13 mai au 11 juillet 2025) au sein de l’APF France Handicap à Besançon. Cette expérience a été l'occasion de transformer mes connaissances théoriques en solutions concrètes.
                </p>
                <p>
                    Mon projet principal fut le développement d’une application web de facturation, remplaçant un système Excel existant pour optimiser la gestion des usagers et des services. Ce portfolio met en lumière les compétences clés acquises et renforcées durant ce projet, notamment à travers les unités d’enseignement UE4.1 et UE4.2.
                </p>
                <p>
                    Je suis passionné par la création d'applications intuitives et robustes, et toujours à l'affût des nouvelles technologies pour enrichir mes compétences.
                </p>
            </Section>

            <Section title="Compétences Techniques">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        title="Développement Frontend"
                        description="Maîtrise de React pour des interfaces utilisateur dynamiques et réactives. Expérience avec Tailwind CSS pour un stylisme rapide et efficace."
                        technologies={["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"]}
                        icon={<FaReact size={40} />}
                    />
                    <Card
                        title="Développement Backend & BDD"
                        description="Conception et implémentation d'APIs robustes avec Node.js et Express. Gestion de bases de données relationnelles avec PostgreSQL et ORM Prisma."
                        technologies={["Node.js", "Express", "Prisma", "PostgreSQL"]}
                        icon={<FaNodeJs size={40} />}
                    />
                    <Card
                        title="Optimisation & Qualité Log."
                        description="Application des principes de code propre, refactoring, gestion des états et optimisation des performances (useMemo, useCallback)."
                        technologies={["React Hooks", "useMemo", "useCallback", "Clean Code"]}
                        icon={<FaTools size={40} />}
                    />
                    <Card
                        title="Gestion de Projet & Autonomie"
                        description="Analyse fonctionnelle, modélisation (MCD), et gestion de projet autonome. Capacité à s'adapter aux besoins et à résoudre les problèmes."
                        technologies={["MCD", "Git", "Gestion de projet"]}
                        icon={<FaProjectDiagram size={40} />}
                    />
                    <Card
                        title="Intégration & Déploiement"
                        description="Familiarisé avec les outils de versionnement (Git/GitHub) et les processus de déploiement continu."
                        technologies={["Git", "GitHub", "CI/CD"]}
                        icon={<FaCode size={40} />}
                    />
                    <Card
                        title="UI/UX Design"
                        description="Sensibilité aux principes de l'expérience utilisateur et de l'interface utilisateur pour des applications intuitives."
                        technologies={["Figma", "Wireframing", "Prototypage", "Accessibilité"]}
                        icon={<FaLaptopCode size={40} />}
                    />
                </div>
                <SkillChart />
            </Section>

            <Section title="Mes Projets Clés" id="projets" className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl my-12 shadow-lg border border-blue-700">
                <ProjectCard
                    title="Application Web de Facturation (Stage APF France Handicap)"
                    description="Développement d'une application web complète pour la gestion des factures mensuelles des usagers. Projet full-stack de l'analyse des besoins à la mise en production. J'ai transformé un système Excel manuel en une solution numérique robuste, améliorant l'efficacité de la gestion des services et des usagers."
                    technologies={["React", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Axios", "ReactToPrint"]}
                    link="https://github.com/tonprofil/nom-du-repo-du-projet"
                    imageSrc={facturationImg}
                    imageAlt="Capture d'écran du projet de facturation"
                />
                <p className="mt-8 text-center text-lg text-gray-300">
                    Ce projet a été l'opportunité de concrétiser mes compétences en développant une solution utile et optimisée, en autonomie et en collaboration avec l'équipe.
                </p>
            </Section>

            <Section title="Mon Expérience en Stage">
                <p className="text-gray-300">
                    Mon stage à l'APF France Handicap à Besançon a été une immersion complète dans le cycle de vie d'un projet de développement logiciel. J'ai été responsable du projet de <strong className="text-blue-400">création d'une application web de facturation</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Missions Principales</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Analyse détaillée du système de facturation existant (basé sur Excel) et des besoins utilisateurs.</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Modélisation de la base de données (MCD) et conception de l'architecture de l'application.</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>Développement du <strong className="text-blue-400">frontend avec React et Tailwind CSS</strong> pour une interface intuitive.</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>Implémentation du <strong className="text-blue-400">backend avec Node.js, Express et Prisma</strong> pour la gestion des données.</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>Mise en place de fonctionnalités clés : édition inline, tri, filtres avancés, génération de factures PDF.</motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Apports & Réalisations</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
                            <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Découverte et maîtrise de <strong className="text-blue-400">Prisma ORM</strong>, un outil puissant pour l'interaction avec la base de données.</motion.li>
                            <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Optimisation des performances de l'application (limitation des re-rendus React, gestion des appels API).</motion.li>
                            <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>Amélioration significative de l'expérience utilisateur par l'intégration de fonctionnalités ergonomiques.</motion.li>
                            <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>Contribution à l'organisation du parc informatique et installation de postes en autonomie.</motion.li>
                            <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>Développement de compétences en autonomie, rigueur, et analyse fonctionnelle en contexte professionnel.</motion.li>
                        </ul>
                    </motion.div>
                </div>
                <p className="mt-8 text-center italic text-xl text-gray-400">
                    "Ce stage a été une expérience transformatrice, me permettant de passer de la théorie à la pratique et de construire une application concrète qui répond à un besoin réel."
                </p>
            </Section>

            <Timeline />

            <Section title="Conclusion & Perspectives">
                <p className="text-gray-300">
                    Ce stage a solidifié ma passion pour le développement web et m'a doté de compétences pratiques essentielles. Je suis désormais mieux préparé à relever les défis de projets complexes et à apporter des solutions innovantes.
                </p>
                <p className="mt-4 text-gray-300">
                    Je suis proactif, curieux et toujours désireux d'apprendre. Je suis à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets ambitieux et continuer à grandir en tant que développeur.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-2xl font-semibold text-blue-400 mb-4">Prêt à collaborer sur votre prochain projet?</p>
                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-xl transform hover:-translate-y-1"
                    >
                        Discutons-en!
                        <FaEnvelope className="ml-3 text-xl" />
                    </motion.a>
                </motion.div>
            </Section>

            <Section title="Me Contacter" id="contact" className="bg-gray-900 text-white rounded-t-[8rem] mt-12 shadow-2xl border-t-4 border-blue-700">
                <p className="text-center text-xl mb-8 text-gray-300">N'hésitez pas à me contacter pour toute opportunité ou question!</p>
                <div className="flex justify-center space-x-8 text-4xl">
                    <motion.a
                        whileHover={{ scale: 1.3, color: "#3B82F6" }}
                        href="mailto:esteban@example.com"
                        className="transition-colors duration-300"
                        aria-label="Envoyer un email"
                    >
                        <FaEnvelope />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.3, color: "#60A5FA" }}
                        href="https://github.com/tonprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil GitHub"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.3, color: "#2563EB" }}
                        href="https://linkedin.com/in/tonprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil LinkedIn"
                    >
                        <FaLinkedin />
                    </motion.a>
                </div>
            </Section>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gray-950 text-center py-8 text-sm text-gray-500 rounded-t-lg shadow-inner"
            >
                <p>© {new Date().getFullYear()} Esteban – Portfolio BUT Informatique. Tous droits réservés.</p>
                <p className="mt-2 text-xs">Conçu avec React, Tailwind CSS et Framer Motion.</p>
            </motion.footer>
        </div>
    );
}