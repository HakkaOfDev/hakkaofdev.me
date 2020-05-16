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

            "Project-Duration": "Duration",
            "Project-Progress": "In progress",
            "Project-Button": "Discover",
            "Project-Days": "days",

            "Project-Leaderboard-Lore": "Bukkit Leaderboard API with 1.7 to 1.15 support !",

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

            "Project-Duration": "Durée",
            "Project-Progress": "En cours",
            "Project-Days": "jours",
            "Project-Button": "Découvrir",

            "Project-Leaderboard-Lore": "Une API Bukkit de Leaderboard avec un support 1.7 à 1.15 !",

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