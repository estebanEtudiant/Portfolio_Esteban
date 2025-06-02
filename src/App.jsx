import React from "react";

const Section = ({ title, children }) => (
    <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">{title}</h2>
        <div className="text-gray-800 text-lg">{children}</div>
    </section>
);

export default function App() {
    return (
        <div className="font-sans">
            <header className="bg-blue-600 text-white py-10 text-center">
                <h1 className="text-4xl font-bold">Portfolio – Esteban</h1>
                <p className="mt-2 text-xl">BUT Informatique – Stage de 2e année</p>
            </header>

            <Section title="À propos">
                <p>
                    Je suis étudiant en 2e année de BUT Informatique. Mon stage m’a permis de développer une
                    application concrète de facturation en React avec un backend Node.js, en lien direct avec
                    les enseignements suivis cette année.
                </p>
            </Section>

            <Section title="UE4.1 – Réaliser un développement d'application">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Compétence visée :</strong> Développer une application de gestion complète (frontend et backend).</li>
                    <li><strong>Travail réalisé :</strong> Application de facturation : affichage des usagers, génération PDF, statistiques mensuelles.</li>
                    <li><strong>Technos :</strong> React, Tailwind CSS, Node.js, Express, Prisma</li>
                    <li><strong>Lien direct avec :</strong> Architecture logicielle, développement web, qualité logicielle.</li>
                </ul>
            </Section>

            <Section title="UE4.2 – Optimiser des applications">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Compétence visée :</strong> Structurer le code, améliorer les performances et la qualité.</li>
                    <li><strong>Travail réalisé :</strong> Refactorisation des composants React, séparation en hooks, tri des données côté client.</li>
                    <li><strong>Lien direct avec :</strong> Méthodes d’optimisation, organisation du projet, gestion des états avec React.</li>
                </ul>
            </Section>

            <Section title="Stage – Développement d'une application de facturation">
                <p>
                    Pendant 8 semaines, j’ai développé une application pour générer et gérer des factures
                    mensuelles pour des usagers. Le système inclut :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Saisie et édition des statistiques (jours, repas, présences)</li>
                    <li>Génération dynamique de factures en PDF</li>
                    <li>Tableau React avec tri, filtres, édition inline</li>
                </ul>
                <p className="mt-2">
                    Ce projet m’a permis de mettre en œuvre les compétences des UE de développement et
                    d’optimisation dans un contexte réel.
                </p>
            </Section>

            <Section title="Contact">
                <p>📧 esteban@example.com</p>
                <p>🔗 <a href="https://github.com/tonprofil" className="text-blue-600 underline">github.com/tonprofil</a></p>
            </Section>

            <footer className="bg-gray-100 text-center py-6 text-sm mt-6">
                © 2025 Esteban – Portfolio BUT Informatique
            </footer>
        </div>
    );
}
