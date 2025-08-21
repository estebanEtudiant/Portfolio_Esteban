import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaReact, FaNodeJs, FaTools, FaProjectDiagram, FaCode, FaLaptopCode } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";



import facturationImg from "./assets/facturation.png";
import quanticImg from "./assets/QuanticGP.png";
import tetePhotoImg from "./assets/tete.jpeg"

import ue41_pdf_export from "./assets/portfolio/Screenshot_facture.png";
import ue41_templater from "./assets/portfolio/Screenshot_editeur.png";
import ue41_security from "./assets/portfolio/Screenshot_secu.png";
import ue45_invoices_table from "./assets/portfolio/Screenshot_list_facture.png";
import ue45_settings_general from "./assets/portfolio/Screenshot_parametre.png";
import ue45_smtp from "./assets/portfolio/Screenshot_config_email.png";




const Figure = ({ src, alt, title, legendItems = [], analysis = [] }) => (
    <figure className="bg-gray-800/60 border border-gray-700 rounded-lg p-4 my-6">
        <img src={src} alt={alt} loading="lazy"
              className="w-full rounded-md border border-gray-700 min-h-[120px]" />
        <figcaption className="mt-4 text-sm">
            <p className="font-medium">{title}</p>
            {legendItems.length > 0 && (
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-300">
                    <li><b>Légende :</b></li>
                    {legendItems.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
            )}
            {analysis.length > 0 && (
                <div className="mt-3">
                    <p className="font-medium">Analyse :</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {analysis.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                </div>
            )}
        </figcaption>
    </figure>
);


const Section = ({ title, children, className = "", id, reveal = true }) => (
    <motion.section
        id={id}
        initial={reveal ? { opacity: 0, y: 30 } : false}
        animate={reveal ? undefined : { opacity: 1, y: 0 }}
        whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={reveal ? { once: true, amount: 0.3 } : undefined}
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
        whileHover={{ scale: 1.01 }}
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

const ProjectCard = ({ title, description, highlights = [], technologies, link, imageSrc, imageAlt }) => (
    <motion.div
        whileHover={{ scale: 1.01 }}
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
            {highlights.length > 0 && (
                <ul className="text-gray-300 text-base mb-6 list-disc pl-5 space-y-1">
                    {highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
            )}

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


const ScrollProgress = () => {
    useEffect(() => {
        const el = document.getElementById("scroll-progress");
        const update = () => {
            if (!el) return;
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            el.style.width = `${progress}%`;
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <div
            id="scroll-progress"
            className="fixed top-0 left-0 h-1 bg-blue-400 z-50"
            style={{ width: 0 }}
        />
    );
};


const StarParticles = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const count = isMobile ? 30 : 70;

    const particlesInit = async (engine) => { await loadStarsPreset(engine); };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: "stars",
                background: { color: "#0f172a" },
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    color: { value: "#ADD8E6" },
                    links: { color: "#ADD8E6", distance: isMobile ? 100 : 150, enable: true, opacity: 0.35, width: 1 },
                    move: { enable: true, speed: isMobile ? 0.3 : 0.5 },
                    number: { value: count },
                    opacity: { value: 0.45 },
                    size: { value: 2 }
                },
                detectRetina: true
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
                description="Cartographie du processus Excel, recueil besoins, périmètre fonctionnel priorisé."
                index={0}
            />
            <TimelineItem
                date="19 mai – 30 mai 2025"
                title="Début du développement"
                description="MCD, scaffolding projet, endpoints CRUD usagers/services, UI de base."
                index={1}
            />
            <TimelineItem
                date="3 juin – 21 juin 2025"
                title="Fonctionnalités avancées"
                description="Édition inline, tri/filtres, calculs mensuels, génération PDF, validations."
                index={2}
            />
            <TimelineItem
                date="24 juin – 11 juillet 2025"
                title="Finalisation & optimisation"
                description="Tests, simplification UX, corrections, doc d’installation/livraison."
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

const UECollapse = ({ id, title, defaultOpen = false, children }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <section id={id} className="mb-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
                <button
                    type="button"
                    onClick={() => setOpen(o => !o)}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                    <span className="text-lg sm:text-xl font-semibold text-white">{title}</span>
                    <svg
                        className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                    >
                        <path fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 011.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
                              clipRule="evenodd" />
                    </svg>
                </button>

                <div
                    id={`${id}-panel`}
                    className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                    <div className="overflow-hidden px-4 pb-4 sm:px-6 sm:pb-6 text-gray-300">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function App() {
    return (
        <div className="font-sans bg-gray-950 text-white overflow-x-hidden relative">
            <ScrollProgress/>
            <StarParticles/>

            <motion.header
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-14 px-4 text-center shadow-xl rounded-b-3xl relative z-10 border-b border-blue-800/50"
            >
                <motion.h1
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{delay: 0.3, duration: 0.6}}
                    className="text-6xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight"
                >
                    Esteban <span className="text-blue-400">Développeur Web</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6, duration: 0.6}}
                    className="mt-6 text-2xl sm:text-3xl font-light max-w-2xl mx-auto text-gray-200"
                >
                    Étudiant en BUT Informatique, passionné par le développement d'applications web modernes et
                    performantes.
                </motion.p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    <a href="#ue41" className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10">
                        UE 4.1 – Réaliser un développement d’application
                    </a>
                    <a href="#ue45" className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10">
                        UE 4.4 – Gérer des données de l’information
                    </a>
                </div>


                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.9, duration: 0.6, staggerChildren: 0.2}}
                    className="mt-10 flex justify-center space-x-6"
                >
                    <motion.a
                        aria-label="Voir mes projets"
                        whileHover={{scale: 1.05, backgroundColor: "#E0F2FE", color: "#1E40AF"}}
                        whileTap={{scale: 0.95}}
                        href="#projets"
                        className="bg-white text-blue-700 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
                    >
                        Mes Projets
                    </motion.a>
                    <motion.a
                        aria-label="Aller à la section Contact"
                        whileHover={{scale: 1.05, backgroundColor: "#1E40AF", borderColor: "#1E40AF"}}
                        whileTap={{scale: 0.95}}
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
                    Étudiant en 2ᵉ année de BUT Informatique, j’ai terminé un stage de 9 semaines (mai–juillet 2025) à l’APF France Handicap.
                    J’y ai conçu et livré une application web de facturation de A à Z.
                </p>
                <p>
                    Ce portfolio met en évidence, via des <b>traces commentées</b>, les compétences validées en <b>UE 4.1</b> (développement d’application)
                    et <b>UE 4.4</b> (gestion de données).
                </p>


            </Section>


            <Section title="Compétences (UE)" id="competences" reveal={false}
                     className="bg-gray-800/40 rounded-xl my-12 border border-gray-700">
                <UECollapse id="ue41" title="UE 4.1 — Réaliser un développement d’application" defaultOpen={false}>
                    <article className="mb-6">
                        <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><b>Architecture :</b> React (UI modulaire) + API Node/Express (auth, rôles, PDF).</li>
                            <li><b>Qualité :</b> composants réutilisables, validation, gestion d’erreurs.</li>
                            <li><b>Sécurité :</b> réinitialisation de mot de passe, journalisation connexions.</li>
                            <li><b>Livrable :</b> appli utilisable + doc d’installation.</li>
                        </ul>
                        <div className="mt-3 text-sm opacity-80">
                            <span className="font-medium">Traces :</span> captures (auth, PDF), extraits de code
                            (routes, validation).
                        </div>
                    </article>

                    <p className="text-base text-gray-300">
                        Pour garantir un rendu fiable et imprimable, j’ai conçu un pipeline de génération
                        (sélection → rendu → PDF) <i>(voir figure 1)</i>. Le choix de ReactToPrint permet
                        d’obtenir un PDF identique à l’aperçu, sans service externe.
                    </p>

                    <Figure
                        src={ue41_pdf_export}
                        alt="Sélection du mois et export PDF des factures avec aperçu"
                        title="Figure 1 — UE 4.1 — Pipeline de génération de factures (sélection → rendu → PDF)"
                        legendItems={[
                            "Bleu : sélection du mois et des modèles.",
                            "Vert : action de génération (impression/export PDF).",
                            "Gris : aperçu fidèle du document final."
                        ]}
                        analysis={[
                            "Savoir : structurer un flux de production (sources de données → rendu → livrable PDF).",
                            "Savoir-faire : câblage UI + service d’export (React + ReactToPrint) avec états cohérents.",
                            "Impact : livrable standardisé, impression en lot, réduction d’erreurs manuelles."
                        ]}
                    />

                    <p className="mt-4 text-base text-gray-300">
                        Le templating avec variables évite de toucher au code pour modifier la mise en page
                        <i> (voir figure 2)</i>. Les accolades lient le contenu aux données (date, usager, prix).
                    </p>

                    <Figure
                        src={ue41_templater}
                        alt="Éditeur visuel de modèle de facture avec variables"
                        title="Figure 2 - UE 4.1 — Conception de template dynamique (liaison données → variables)"
                        legendItems={[
                            "Bleu : bloc éditable du template.",
                            "Accolades {{...}} : variables injectées (date, numéro, usager, prix).",
                            "Panneaux latéraux : calques, styles, propriétés."
                        ]}
                        analysis={[
                            "Savoir : templating et séparation contenu/présentation.",
                            "Savoir-faire : création d’un modèle éditable (GrapesJS-like) relié aux champs de l’app.",
                            "Impact : autonomie métier pour ajuster la mise en page sans toucher le code."
                        ]}
                    />

                    <p className="mt-4 text-base text-gray-300">
                        Côté administration, certaines zones sont verrouillées et nécessitent un code
                        <i> (voir figure 3)</i> afin de limiter les erreurs et protéger les réglages sensibles.
                    </p>

                    <Figure
                        src={ue41_security}
                        alt="Écran sécurité : code admin requis et email d’administration"
                        title="Figure 3 - UE 4.1 — UX & sécurité d’administration (verrouillage des champs sensibles)"
                        legendItems={[
                            "Champ code admin : déverrouille l’édition sécurisée.",
                            "Email admin : utilisé pour la réinitialisation du code.",
                            "Boutons d’action : validation, enregistrement."
                        ]}
                        analysis={[
                            "Savoir : principes d’UX sécurisée (verrouillage, feedback, rôles).",
                            "Savoir-faire : mise en place de garde-fous côté UI et flux de reset administrateur.",
                            "Impact : réduction des erreurs et protection des paramètres sensibles."
                        ]}
                    />
                </UECollapse>

                <UECollapse id="ue45" title="UE 4.4 — Gérer des données de l’information">
                    <article className="mb-6">
                        <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><b>Modélisation & SQL :</b> schéma PostgreSQL, vues, index.</li>
                            <li><b>Intégration :</b> requêtes paramétrées, filtres, pagination, agrégations.</li>
                            <li><b>Traçabilité :</b> table de logs, graphiques de suivi.</li>
                            <li><b>Valorisation :</b> heatmap/plots, export PDF, filtres dynamiques.</li>
                        </ul>
                        <div className="mt-3 text-sm opacity-80">
                            <span className="font-medium">Traces :</span> schéma DB, requêtes, captures
                            (filtres/exports).
                        </div>
                    </article>


                    <p className="mt-4 text-base text-gray-300">
                        La vue liste est alimentée par des <b>requêtes paramétrées</b> (mois, modèle, tags) et
                        synchronise le <b>statut d’envoi</b> après chaque action (aperçu, renvoi, suppression, mail).
                        L’objectif est d’offrir un suivi <b>opérationnel</b> fiable tout en gardant la navigation fluide
                        <i> (voir figure&nbsp;4)</i>.
                    </p>

                    <Figure
                        src={ue45_invoices_table}
                        alt="Tableau des factures avec filtres, statuts et actions (vue liste)"
                        title="Figure 4 - UE 4.4 — Vue liste pilotée par données (filtres, statuts, envoi par e-mail)"
                        legendItems={[
                            "Filtres (mois, modèle, tags) : requêtes paramétrées.",
                            "Colonnes clés : mois, n° facture, type, total, statut.",
                            "Icônes : prévisualisation, renvoi, suppression, envoi mail."
                        ]}
                        analysis={[
                            "Savoir : modéliser et présenter des données transactionnelles.",
                            "Savoir-faire : pagination/tri/filtre + synchronisation des statuts d’envoi.",
                            "Impact : suivi opérationnel fiable (qu’est-ce qui est envoyé ? à qui ? quand ?)."
                        ]}
                    />

                    <p className="mt-4 text-base text-gray-300">
                        Le <b>paramétrage métier</b> (prix, forfait, modèles par défaut, jours d’ouverture) est
                        centralisé
                        et <b>persisté</b> pour garantir des calculs mensuels reproductibles. Chaque variable a un
                        format
                        contrôlé (bornes, types) afin de limiter les erreurs de saisie
                        <i> (voir figure&nbsp;5)</i>.
                    </p>

                    <Figure
                        src={ue45_settings_general}
                        alt="Paramètres de facturation et jours d’ouverture mensuels"
                        title="Figure 5 - UE 4.4 — Paramétrage métier persistant (prix/forfait, modèle par défaut, jours d’ouverture)"
                        legendItems={[
                            "Champs : prix repas, forfait jour (données de référence).",
                            "Sélecteurs : modèles par défaut (normal/repas).",
                            "Bloc calendrier : ajout des jours d’ouverture par mois."
                        ]}
                        analysis={[
                            "Savoir : gestion de référentiels et paramètres métiers persistants.",
                            "Savoir-faire : stockage et restitution cohérente pour les calculs mensuels.",
                            "Impact : transparence et reproductibilité des montants facturés."
                        ]}
                    />

                    <p className="mt-4 text-base text-gray-300">
                        L’<b>envoi e-mail</b> s’appuie sur une configuration SMTP <b>sécurisée</b> : identifiants
                        masqués,
                        déverrouillage pour les champs sensibles, et expéditeur déclaré. Couplé à un journal d’envoi,
                        cela
                        apporte <b>traçabilité</b> et diagnostic en cas d’échec
                        <i> (voir figure&nbsp;6)</i>.
                    </p>

                    <Figure
                        src={ue45_smtp}
                        alt="Configuration SMTP sécurisée (serveur, port, identifiants masqués)"
                        title="Figure 6 - UE 4.4 — Intégration d’un canal d’envoi e-mail (SMTP) sécurisée"
                        legendItems={[
                            "Serveur/port : configuration réseau.",
                            "Identifiants : champs masqués + déverrouillage sécurisé.",
                            "Expéditeur : nom + adresse utilisés pour les envois automatiques."
                        ]}
                        analysis={[
                            "Savoir : externaliser la configuration d’un service (SMTP) et protéger les secrets.",
                            "Savoir-faire : paramétrage runtime + masquage des credentials avec flux de déverrouillage.",
                            "Impact : acheminement fiable des factures par e-mail et traçabilité des envois."
                        ]}
                    />
                </UECollapse>

                <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-4 text-base space-y-2">
                    <p className="font-semibold">Synthèse réflexive (UE 4.1 / UE 4.4)</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <b>Décisions clés</b> — Pipeline de génération <i>(sélection → rendu → PDF)</i> pour un
                            rendu fidèle
                            <i> (voir figure&nbsp;1)</i> ; vue liste pilotée par filtres + statut d’envoi pour le suivi
                            opérationnel
                            <i> (voir figure&nbsp;4)</i>.
                        </li>
                        <li>
                            <b>Apprentissages déterminants</b> — Validation bout-en-bout (front/back), modélisation
                            relationnelle simple mais
                            robuste, et paramétrage métier persistant <i>(voir figure&nbsp;5)</i>.
                        </li>
                        <li>
                            <b>Limites assumées</b> — Impression de longues listes (latence), dépendance au navigateur
                            pour le PDF, gabarits
                            encore perfectibles. Contournements : filtrage/pagination, gabarits testés, journal d’envoi
                            pour diagnostiquer
                            <i> (voir figure&nbsp;6)</i>.
                        </li>
                        <li>
                            <b>Transférabilité</b> — Le pattern “données → template → rendu → export” s’applique à
                            devis, attestations, relevés
                            d’heures, etc. (adapter juste l’ORM et le moteur d’export).
                        </li>
                    </ul>
                </div>


            </Section>


            <Section title="Compétences Techniques">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        title="Développement Frontend"
                        description="Maîtrise de React pour des interfaces utilisateur dynamiques et réactives. Expérience avec Tailwind CSS pour un stylisme rapide et efficace."
                        technologies={["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"]}
                        icon={<FaReact size={40}/>}
                    />
                    <Card
                        title="Développement Backend & BDD"
                        description="Conception et implémentation d'APIs robustes avec Node.js et Express. Gestion de bases de données relationnelles avec PostgreSQL et ORM Prisma."
                        technologies={["Node.js", "Express", "Prisma", "PostgreSQL"]}
                        icon={<FaNodeJs size={40}/>}
                    />
                    <Card
                        title="Optimisation & Qualité Log."
                        description="Application des principes de code propre, refactoring, gestion des états et optimisation des performances (useMemo, useCallback)."
                        technologies={["React Hooks", "useMemo", "useCallback", "Clean Code"]}
                        icon={<FaTools size={40}/>}
                    />
                    <Card
                        title="Gestion de Projet & Autonomie"
                        description="Analyse fonctionnelle, modélisation (MCD), et gestion de projet autonome. Capacité à s'adapter aux besoins et à résoudre les problèmes."
                        technologies={["MCD", "Git", "Gestion de projet"]}
                        icon={<FaProjectDiagram size={40}/>}
                    />
                    <Card
                        title="Intégration & Déploiement"
                        description="Familiarisé avec les outils de versionnement (Git/GitHub) et les processus de déploiement continu."
                        technologies={["Git", "GitHub", "CI/CD"]}
                        icon={<FaCode size={40}/>}
                    />
                    <Card
                        title="UI/UX Design"
                        description="Sensibilité aux principes de l'expérience utilisateur et de l'interface utilisateur pour des applications intuitives."
                        technologies={["Figma", "Wireframing", "Prototypage", "Accessibilité"]}
                        icon={<FaLaptopCode size={40}/>}
                    />
                </div>

            </Section>

            <Section title="Mes Projets Clés" id="projets"
                     className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl my-12 shadow-lg border border-blue-700">
                <ProjectCard
                    title="Application Web de Facturation (Stage APF France Handicap)"
                    description="Refonte du processus de facturation usagers (Excel → application web) du recueil au PDF final."
                    highlights={[
                        "Problème : feuilles Excel manuelles, erreurs et lenteurs.",
                        "Solution : UI React + API Node/Express + Prisma/PostgreSQL, édition inline, tri/filtres, génération PDF.",
                        "Impact : gains de temps et fiabilité, process centralisé et traçable."
                    ]}
                    technologies={["React", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Axios", "ReactToPrint"]}
                    link="https://github.com/estebanEtudiant/Facturation"
                    imageSrc={facturationImg}
                    imageAlt="Capture d'écran du projet de facturation"
                />

                <ProjectCard
                    title="Quantic Grand Prix (QuanticGP) — Événement F1"
                    description="Application web full-stack pour un événement fictif de Formule 1 (style Monaco/GP Explorer) : billetterie, activités sur site et gestion des accès. Front en SPA Vue.js connecté à une API REST Express/Node ; sécurité par rôles et autorisations ; données relationnelles en MySQL."
                    highlights={[
                        "SPA Vue.js : navigation fluide et composants réutilisables",
                        "API REST Express/Node : logique métier centralisée",
                        "Sécurité : rôles et autorisations pour fonctionnalités différenciées",
                        "Base PostgreSQL : modèle relationnel évolutif pour billets/activités/utilisateurs",
                        "Travail d’équipe (BUT2) : VUILLIN, BALTA, VOELIN, ASLAN, BARTHOD-MALAT"
                    ]}
                    technologies={["Vue.js (SPA)", "Node.js", "Express", "PostgreSQL", "REST API", "Auth/Rôles"]}
                    link="https://github.com/SemihAslan123/QuanticGP"
                    imageSrc={quanticImg}
                    imageAlt="QuanticGP – carte de l'événement et parcours"
                />


                <p className="mt-8 text-center text-lg text-gray-300">
                    Ce projet a été l'opportunité de concrétiser mes compétences en développant une solution utile et
                    optimisée, en autonomie et en collaboration avec l'équipe.
                </p>
            </Section>

            <Section title="Mon Expérience en Stage">
                <p className="text-gray-300">
                    Mon stage à l'APF France Handicap à Besançon a été une immersion complète dans le cycle de vie d'un
                    projet de développement logiciel. J'ai été responsable du projet de <strong
                    className="text-blue-400">création d'une application web de facturation</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, ease: "easeOut", delay: 0.1}}
                        viewport={{once: true, amount: 0.3}}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Missions Principales</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
                            <motion.li initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.2}}>Analyse détaillée du système de facturation existant
                                (basé sur Excel) et des besoins utilisateurs.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.3}}>Modélisation de la base de données (MCD) et conception
                                de l'architecture de l'application.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.4}}>Développement du <strong className="text-blue-400">frontend
                                avec React et Tailwind CSS</strong> pour une interface intuitive.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.5}}>Implémentation du <strong className="text-blue-400">backend
                                avec Node.js, Express et Prisma</strong> pour la gestion des données.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.6}}>Mise en place de fonctionnalités clés : édition inline,
                                tri, filtres avancés, génération de factures PDF.
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, ease: "easeOut", delay: 0.2}}
                        viewport={{once: true, amount: 0.3}}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Apports & Réalisations</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
                            <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.2}}>Découverte et maîtrise de <strong
                                className="text-blue-400">Prisma ORM</strong>, un outil puissant pour l'interaction avec
                                la base de données.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.3}}>Optimisation des performances de l'application
                                (limitation des re-rendus React, gestion des appels API).
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.4}}>Amélioration significative de l'expérience utilisateur
                                par l'intégration de fonctionnalités ergonomiques.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.5}}>Contribution à l'organisation du parc informatique et
                                installation de postes en autonomie.
                            </motion.li>
                            <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}}
                                       transition={{delay: 0.6}}>Développement de compétences en autonomie, rigueur, et
                                analyse fonctionnelle en contexte professionnel.
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
                <p className="mt-8 text-center italic text-xl text-gray-400">
                    "Ce stage a été une expérience transformatrice, me permettant de passer de la théorie à la pratique
                    et de construire une application concrète qui répond à un besoin réel."
                </p>
            </Section>

            <Timeline/>

            <Section title="Objectifs de progression" id="progression">
                <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-4 text-base space-y-4">
                    <p className="font-semibold text-lg">Bilan & pistes d’amélioration (niveau BUT2)</p>

                    {/* UE 4.1 */}
                    <div>
                        <p className="font-semibold">UE 4.1 — Produit & code</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <b>Règles de saisie cohérentes</b> (mêmes vérifications côté interface et côté API).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> messages d’erreur clairs et identiques partout.<br/>
                                    <span className="font-medium">Idée :</span> partager les mêmes règles de validation.
                                </div>
                            </li>

                            <li>
                                <b>Suppression plus sûre</b> (boîte de confirmation + possibilité d’annuler juste après).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> éviter les suppressions par erreur.
                                </div>
                            </li>

                            <li>
                                <b>Retour visuel rapide</b> pour l’envoi d’e-mail (l’interface change tout de suite puis confirme avec le serveur).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> interface plus réactive, sans incohérence.
                                </div>
                            </li>

                            <li>
                                <b>Composant réutilisable</b> {`<InvoiceRow />`} pour la ligne de facture.
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> code plus simple à maintenir quand la liste grandit.
                                </div>
                            </li>

                            <li>
                                <b>Accessibilité de base</b> (navigation au clavier, focus visible).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> utilisation plus confortable pour tous.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* UE 4.4 */}
                    <div>
                        <p className="font-semibold">UE 4.4 — Données & perfs</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <b>Index sur les colonnes filtrées</b> (ex. mois, modèle, statut) + <b>numéro de facture unique</b> (année, numéro).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> recherches plus rapides et numérotation fiable.
                                </div>
                            </li>

                            <li>
                                <b>Pagination côté serveur</b> avec <b>tri</b> et <b>recherche</b>.
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> réponses légères, tableau fluide même avec beaucoup de données.
                                </div>
                            </li>

                            <li>
                                <b>Export CSV</b> en respectant les filtres actifs.
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> partage direct dans Excel/LibreOffice.
                                </div>
                            </li>

                            <li>
                                <b>Journal d’envoi e-mail</b> (succès/échec, heure) avec quelques <b>réessais automatiques</b>.
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> comprendre rapidement les problèmes d’envoi.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Transverse */}
                    <div>
                        <p className="font-semibold">Transverse — Qualité & usage</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <b>Tester les chemins importants</b> (montant total, génération PDF, filtre par mois).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> sécuriser ce qui sert tous les jours.
                                </div>
                            </li>

                            <li>
                                <b>Configuration propre</b> (<code>.env.example</code> + vérification au démarrage).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> éviter les erreurs de variables manquantes.
                                </div>
                            </li>

                            <li>
                                <b>Mini check-list de recette</b> (ouvrir un modèle, générer un PDF, filtrer un mois, envoyer un mail test).
                                <div className="text-gray-300 text-sm">
                                    <span className="font-medium">But :</span> livrer sans bug bloquant.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>




            

    <Section title="Conclusion">
        <p>
            Ce stage m’a surtout appris à <b>transformer un besoin métier en produit testable</b> : génération de documents fiable
            <i> (fig. 1)</i>, <b>écran liste</b> piloté par les données <i>(fig. 4)</i>, <b>paramétrage persistant</b> <i>(fig. 5)</i>
            et <b>envoi traçable</b> <i>(fig. 6)</i>. J’ai pris du recul sur les compromis (perfs d’impression, dépendance navigateur)
            et leur impact utilisateur.
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><b>Compétences consolidées</b> — UE 4.1 (conception, qualité, sécurité) et UE 4.4 (modélisation, filtres, traçabilité).</li>
            <li><b>Points de vigilance</b> — Volume de données en impression, maintenabilité des gabarits.</li>
            <li><b>Suite directe</b> — Les axes concrets sont listés dans <a href="#progression" className="underline">Objectifs de progression</a>.</li>
        </ul>
    </Section>

            <Section title="Me Contacter" id="contact"
                     className="bg-gray-900 text-white rounded-t-3xl mt-12 shadow-xl border-t border-blue-800/50">
                <p className="text-center text-xl mb-8 text-gray-300">N'hésitez pas à me contacter pour toute
                    opportunité ou question!</p>
                <div className="flex justify-center space-x-8 text-4xl">
                    <motion.a
                        whileHover={{scale: 1.3, color: "#3B82F6"}}
                        href="mailto:esteban.barthod-malat@edu.univ-fcomte.fr"
                        className="transition-colors duration-300"
                        aria-label="Envoyer un email"
                    >
                        <FaEnvelope/>
                    </motion.a>
                    <motion.a
                        whileHover={{scale: 1.3, color: "#60A5FA"}}
                        href="https://github.com/estebanEtudiant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil GitHub"
                    >
                        <FaGithub/>
                    </motion.a>
                    <motion.a
                        whileHover={{scale: 1.3, color: "#2563EB"}}
                        href="https://www.linkedin.com/in/esteban-barthod-malat-419aa1339/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        aria-label="Voir mon profil LinkedIn"
                    >
                        <FaLinkedin/>
                    </motion.a>
                </div>
            </Section>

            <motion.footer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3, duration: 0.8}}
                className="bg-gray-950 text-center py-6 text-sm text-gray-500"
            >
                <p>© {new Date().getFullYear()} Esteban — Portfolio BUT Informatique.</p>
            </motion.footer>

        </div>
    );
}