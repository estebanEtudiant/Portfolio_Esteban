import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaReact, FaNodeJs, FaTools, FaProjectDiagram, FaFileInvoiceDollar } from "react-icons/fa";


// Composant pour les sections avec animation
const Section = ({ title, children, className = "" }) => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // Déclenche l'animation plus tôt
        className={`py-16 px-6 max-w-5xl mx-auto ${className}`}
    >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-gray-800 relative pb-4">
            {title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <div className="text-gray-700 text-lg sm:text-xl leading-relaxed space-y-6">
            {children}
        </div>
    </motion.section>
);

// Composant pour les cartes de projet ou de compétence
const Card = ({ title, description, icon, technologies, link }) => (
    <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col h-full"
    >
        {icon && <div className="text-blue-600 text-5xl mb-4 text-center">{icon}</div>}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
        {technologies && (
            <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-600 mb-2">Technologies :</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        )}
        {link && (
            <div className="mt-6 text-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md">
                    Voir le projet
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </a>
            </div>
        )}
    </motion.div>
);


export default function App() {
    return (
        <div className="font-sans bg-gradient-to-br from-white to-blue-50 min-h-screen text-gray-900 overflow-hidden">
            {/* Header avec animation plus prononcée */}
            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-blue-700 text-white py-20 px-4 text-center shadow-2xl rounded-b-[4rem] relative z-10" // Rounded plus prononcé
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-6xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight"
                >
                    Esteban <span className="text-blue-200">Developpeur Web</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 text-2xl sm:text-3xl font-light max-w-2xl mx-auto"
                >
                    Étudiant en BUT Informatique, passionné par le développement d'applications web modernes et performantes.
                </motion.p>
                <div className="mt-10 flex justify-center space-x-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projets" // Lien vers la section projets
                        className="bg-white text-blue-700 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
                    >
                        Mes Projets
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact" // Lien vers la section contact
                        className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-blue-700 transition duration-300 transform hover:-translate-y-1"
                    >
                        Contactez-moi
                    </motion.a>
                </div>
            </motion.header>

            {/* Section À propos avec un fond légèrement différent */}
            <Section title="À propos de moi" className="bg-blue-50/50 rounded-xl my-12 shadow-inner">
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

            {/* Section Compétences techniques avec un grid de cartes */}
            <Section title="Compétences Techniques">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        title="Développement Frontend"
                        description="Maîtrise de React pour des interfaces utilisateur dynamiques et réactives. Expérience avec Tailwind CSS pour un stylisme rapide et efficace."
                        technologies={["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]}
                        icon={<FaReact size={40} />} // Exemple d'icône, tu devras importer FaReact
                    />
                    <Card
                        title="Développement Backend & BDD"
                        description="Conception et implémentation d'APIs robustes avec Node.js et Express. Gestion de bases de données relationnelles avec PostgreSQL et ORM Prisma."
                        technologies={["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST APIs"]}
                        icon={<FaNodeJs size={40} />} // Exemple d'icône, tu devras importer FaNodeJs
                    />
                    <Card
                        title="Optimisation & Qualité Log."
                        description="Application des principes de code propre, refactoring, gestion des états et optimisation des performances (useMemo, useCallback)."
                        technologies={["Refactoring", "Hooks personnalisés", "Performance", "Tests (notions)"]}
                        icon={<FaTools size={40} />} // Exemple d'icône, tu devras importer FaTools
                    />
                    <Card
                        title="Gestion de Projet & Autonomie"
                        description="Analyse fonctionnelle, modélisation (MCD), et gestion de projet autonome. Capacité à s'adapter aux besoins et à résoudre les problèmes."
                        technologies={["Analyse fonctionnelle", "MCD", "Gestion de projet", "Autonomie", "Adaptabilité"]}
                        icon={<FaProjectDiagram size={40} />} // Exemple d'icône, tu devras importer FaProjectDiagram
                    />
                    {/* Ajoute d'autres cartes de compétences si pertinent */}
                </div>
            </Section>

            {/* Section Projets - Mise en avant du projet de stage */}
            <Section title="Mes Projets Clés" id="projets" className="bg-gradient-to-r from-blue-50 to-white rounded-xl my-12 shadow-lg">
                <Card
                    title="Application Web de Facturation (Stage APF France Handicap)"
                    description="Développement d'une application web complète pour la gestion des factures mensuelles des usagers. Projet full-stack de l'analyse des besoins à la mise en production."
                    technologies={["React", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Axios", "ReactToPrint"]}
                    link="https://github.com/tonprofil/nom-du-repo-du-projet" // REMPLACE AVEC LE VRAI LIEN
                    icon={<FaFileInvoiceDollar size={40} />} // Exemple d'icône
                />
                <p className="mt-8 text-center text-lg">
                    Ce projet a été l'opportunité de concrétiser mes compétences en développant une solution utile et optimisée, en autonomie et en collaboration avec l'équipe.
                </p>
                {/* Tu peux ajouter d'autres projets ici sous forme de Card */}
            </Section>


            {/* Section Expérience de Stage - Plus détaillée */}
            <Section title="Mon Expérience en Stage">
                <p>
                    Mon stage à l'APF France Handicap à Besançon a été une immersion complète dans le cycle de vie d'un projet de développement logiciel. J'ai été responsable du projet de <strong className="text-blue-600">création d'une application web de facturation</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Missions Principales</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg">
                            <li>Analyse détaillée du système de facturation existant (basé sur Excel) et des besoins utilisateurs.</li>
                            <li>Modélisation de la base de données (MCD) et conception de l'architecture de l'application.</li>
                            <li>Développement du <strong className="text-blue-600">frontend avec React et Tailwind CSS</strong> pour une interface intuitive.</li>
                            <li>Implémentation du <strong className="text-blue-600">backend avec Node.js, Express et Prisma</strong> pour la gestion des données.</li>
                            <li>Mise en place de fonctionnalités clés : édition inline, tri, filtres avancés, génération de factures PDF.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Apports & Réalisations</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg">
                            <li>Découverte et maîtrise de <strong className="text-blue-600">Prisma ORM</strong>, un outil puissant pour l'interaction avec la base de données.</li>
                            <li>Optimisation des performances de l'application (limitation des re-rendus React, gestion des appels API).</li>
                            <li>Amélioration significative de l'expérience utilisateur par l'intégration de fonctionnalités ergonomiques.</li>
                            <li>Contribution à l'organisation du parc informatique et installation de postes en autonomie.</li>
                            <li>Développement de compétences en autonomie, rigueur, et analyse fonctionnelle en contexte professionnel.</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-8 text-center italic text-xl text-gray-600">
                    "Ce stage a été une expérience transformatrice, me permettant de passer de la théorie à la pratique et de construire une application concrète qui répond à un besoin réel."
                </p>
            </Section>

            {/* Section Conclusion - Appel à l'action subtil */}
            <Section title="Conclusion & Perspectives">
                <p>
                    Ce stage a solidifié ma passion pour le développement web et m'a doté de compétences pratiques essentielles. Je suis désormais mieux préparé à relever les défis de projets complexes et à apporter des solutions innovantes.
                </p>
                <p className="mt-4">
                    Je suis proactif, curieux et toujours désireux d'apprendre. Je suis à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets ambitieux et continuer à grandir en tant que développeur.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-2xl font-semibold text-blue-700 mb-4">Prêt à collaborer sur votre prochain projet ?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-xl transform hover:-translate-y-1">
                        Discutons-en !
                        <FaEnvelope className="ml-3 text-xl" />
                    </a>
                </motion.div>
            </Section>

            {/* Section Contact avec icônes */}
            <Section title="Me Contacter" id="contact" className="bg-gray-800 text-white rounded-t-[4rem] mt-12 shadow-2xl">
                <p className="text-center text-xl mb-8">N'hésitez pas à me contacter pour toute opportunité ou question !</p>
                <div className="flex justify-center space-x-8 text-4xl">
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#3182CE" }}
                        href="mailto:esteban@example.com"
                        className="transition-colors duration-300"
                        aria-label="Envoyer un email"
                    >
                        <FaEnvelope />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#6A7B8F" }}
                        href="https://github.com/tonprofil" // REMPLACE AVEC LE VRAI LIEN
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil GitHub"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#0A66C2" }}
                        href="https://linkedin.com/in/tonprofil" // REMPLACE AVEC LE VRAI LIEN
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil LinkedIn"
                    >
                        <FaLinkedin />
                    </motion.a>
                </div>
            </Section>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gray-900 text-center py-8 text-sm text-gray-400 rounded-t-lg shadow-inner"
            >
                <p>© {new Date().getFullYear()} Esteban – Portfolio BUT Informatique. Tous droits réservés.</p>
                <p className="mt-2 text-xs">Conçu avec React, Tailwind CSS et Framer Motion.</p>
            </motion.footer>
        </div>
    );
}

