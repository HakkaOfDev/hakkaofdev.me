import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Link-About": "About",
            "Link-Skills": "Skills",
            "Link-Projects": "My Projects",
            "Link-Portfolio": "Portfolio",
            "Link-Contact": "Contact",

            "Citation-Newton": "If I could see further, it was because I was standing on the shoulders of giants.",
            "Citation-Voltaire": "Man wasn't born for rest.",
            "Citation-Gossard": "Software development is the way of wisdom.",

            "About-Lore-1": "Prodigy of mathematics, I was passionate about computer science with the aim of exploiting my abilities and sharing them at all times.",
            "About-Lore-2": "Blinded by the thirst for knowledge, I develop every day to give you ideas, projects, open-sources, etc...",
            "About-Lore-Citation": "Live as if you had to die tomorrow. Learn as if you had to live forever.",
            "About-Lore-SubCitation": "This is my philosophy...",
            "About-Lore-End": "Developer Java/Web & Designer",

            "Project-Duration": "Duration",
            "Project-Progress": "IN PROGRESS",
            "Project-Button": "Discover",
            "Project-Days": "days",

            "Project-Leaderboard-Lore": "Bukkit Leaderboard API with 1.7 to 1.15 support !",
            "Project-Leaderboard-Desc": "Features",
            "Project-Leaderboard-Feature-1": "Fully customizable (100%)",
            "Project-Leaderboard-Feature-2": "You can assimilate several leaderboards per player.",
            "Project-Leaderboard-Feature-3": "Easy to use.",
            "Project-Leaderboard-Feature-4": "MySQL Support.",
            "Project-Leaderboard-Feature-5": "Updatable.",
            "Project-Leaderboard-Feature-6": "Interactions available ! (click listener)",

            "Project-Heavenmoon-Lore": "An unique Pvp/Faction minecraft server !",
            "Project-Heavenmoon-Desc": "Come and have fun on a server with multiple possibilities !",
            "Project-Heavenmoon-Feature-1": "100% FarmToWin",
            "Project-Heavenmoon-Feature-2": "A redesigned and optimised economy.",
            "Project-Heavenmoon-Feature-3": "An unique system of guildes and factions !",
            "Project-Heavenmoon-Feature-4": "Reliable and bug-free.",
            "Project-Heavenmoon-Feature-5": "Powerful anticheat.",

            "Project-Workers-Lore": "Special workers on your server !",
            "Project-Workers-Desc": "A plugin putting at your disposal a set of workers !",
            "Project-Workers-Feature-1": "Fully customizable (100%)",
            "Project-Workers-Feature-2": "Miner available !",
            "Project-Workers-Feature-3": "Farmer available !",
            "Project-Workers-Feature-4": "Easy to configure.",
            "Project-Workers-Feature-5": "Interactions available ! (click listener)",

            "HeaderText-Lore": "Developer & Designer"
        }
    },
    fr: {
        translation: {
            "Link-About": "A propos",
            "Link-Skills": "Compétences",
            "Link-Projects": "Mes projets",
            "Link-Portfolio": "Portefeuille",
            "Link-Contact": "Contactez-moi",

            "Citation-Newton": "Si j'ai pu voir plus loin, c'est que je me tenais sur les épaules de géants.",
            "Citation-Voltaire": "L'homme n'est pas né pour le repos.",
            "Citation-Gossard": "Le développement informatique est la voie de la sagesse.",

            "About-Lore-1": "Prodige des mathématiques, je me suis passionné dans l'informatique dans le but d'exploiter mes capacités et de les partager à tout va.",
            "About-Lore-2": "Aveuglé par la soif de connaissances, je développe chaque jour afin de vous donner des idées, des projets, des open-sources, etc...",
            "About-Lore-Citation": "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
            "About-Lore-SubCitation": "Telle est ma philosophie...",
            "About-Lore-End": "Développeur Java/Web & Graphiste",

            "Project-Duration": "Durée",
            "Project-Progress": "EN COURS",
            "Project-Days": "jours",
            "Project-Button": "Découvrir",

            "Project-Leaderboard-Lore": "Une API Bukkit de Leaderboard avec un support 1.7 à 1.15 !",
            "Project-Leaderboard-Desc": "Ressources",
            "Project-Leaderboard-Feature-1": "Entièrement customisable (100%)",
            "Project-Leaderboard-Feature-2": "Vous pouvez assimiler plusieurs leaderboards par joueur.",
            "Project-Leaderboard-Feature-3": "Simple à utiliser.",
            "Project-Leaderboard-Feature-4": "Un support MySQL.",
            "Project-Leaderboard-Feature-5": "Actualisable.",
            "Project-Leaderboard-Feature-6": "Intéractions disponible ! (click listener)",

            "Project-Heavenmoon-Lore": "Un serveur minecraft Pvp/Faction unique !",
            "Project-Heavenmoon-Desc": "Venez vous amuser sur un serveur aux multiples possibilités !",
            "Project-Heavenmoon-Feature-1": "100% FarmToWin",
            "Project-Heavenmoon-Feature-2": "Une économie revisitée et optimisée.",
            "Project-Heavenmoon-Feature-3": "Un système unique de guildes et de factions !",
            "Project-Heavenmoon-Feature-4": "Fiable et sans bugs.",
            "Project-Heavenmoon-Feature-5": "Anticheat performant.",

            "Project-Workers-Lore": "Des ouvriers spéciaux sur votre serveur !",
            "Project-Workers-Desc": "Un plugin mettant à votre disposition un ensemble d'ouvriers !",
            "Project-Workers-Feature-1": "Entièrement customisable (100%)",
            "Project-Workers-Feature-2": "Mineur disponible !",
            "Project-Workers-Feature-3": "Farmeur disponible !",
            "Project-Workers-Feature-4": "Simple à configurer.",
            "Project-Workers-Feature-5": "Intéractions disponible ! (click listener)",

            "HeaderText-Lore": "Développeur & Graphiste"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;