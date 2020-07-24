import React from "react";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

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
            "Citation-Hugo": "Happiness is sometimes hidden in the unknown.",

            "About-Lore-1": "Prodigy of mathematics, I was passionate about computer science with the aim of exploiting my abilities and sharing them at all times.",
            "About-Lore-2": "Blinded by the thirst for knowledge, I develop every day to give you ideas, projects, open-sources, etc...",
            "About-Lore-Citation": "Live as if you had to die tomorrow. Learn as if you had to live forever.",
            "About-Lore-SubCitation": "This is my philosophy...",
            "About-Lore-End": "Developer Java/Web & Designer",

            "Check-LG-Message": "In order to watch the tree of my skills, please go to an lg screen.",

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

            "HeaderText-Lore": "Developer & Designer",

            "Hydraulic-Ascent-Title": "The hydraulic ascent",
            "Hydraulic-Ascent-SubTitle": "~ Spirit of the sea",
            "Hydraulic-Ascent-Desc": "Phoho from a photo montage, reworked for hours, the result speaks for itself.",

            "Background-Title": "Power Manga",
            "Background-SubTitle": "Wallpaper",
            "Background-Desc": "My personal wallpaper, one of my first designs.",

            "Marianne-Title": "Marian",
            "Marianne-SubTitle": "~ Street Art",
            "Marianne-Desc": "A very specific picture showing the moral and material damage of the war.",

            "Brothers-Title": "Brothers Family",
            "Brothers-SubTitle": "Logo",
            "Brothers-Desc": "Logo for the e-sport team Brothers Family.",

            "HeavenMoon-Title": "HeavenMoon",
            "HeavenMoon-SubTitle": "Logo",
            "HeavenMoon-Desc": "Logo for my minecraft server HeavenMoon.",

            "Description-1": "A computer fan since I was 7 years old, I learn new things every day in various fields and I share my progress to make it a story that I tell you.",
            "Description-2": "Developer since recently, I am heading towards a better future with the possibility of changing this low world in which we live.",
            "Useful-Links": "Useful Links",

            "Copyright": "All right reserved."
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
            "Citation-Hugo": "Le bonheur est parfois caché dans l'inconnu.",

            "About-Lore-1": "Prodige des mathématiques, je me suis passionné dans l'informatique dans le but d'exploiter mes capacités et de les partager à tout va.",
            "About-Lore-2": "Aveuglé par la soif de connaissances, je développe chaque jour afin de vous donner des idées, des projets, des open-sources, etc...",
            "About-Lore-Citation": "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
            "About-Lore-SubCitation": "Telle est ma philosophie...",
            "About-Lore-End": "Développeur Java/Web & Graphiste",

            "Check-LG-Message": "Afin de regarder l'arbre de mes compétences, veuillez vous rendre sur un écran lg.",

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

            "HeaderText-Lore": "Développeur & Graphiste",

            "Hydraulic-Ascent-Title": "L'ascension hydraulique",
            "Hydraulic-Ascent-SubTitle": "~ Esprit de la mer",
            "Hydraulic-Ascent-Desc": "Phoho issue d'un photo montage, retravaillée pendant des heures, le résultat parle de lui même.",

            "Background-Title": "Power Manga",
            "Background-SubTitle": "Fond d'écran",
            "Background-Desc": "Mon fond d'écran personnel, un de mes premiers design.",

            "Marianne-Title": "Marianne",
            "Marianne-SubTitle": "~ Street Art",
            "Marianne-Desc": "Un tableau très spécifique montrant les dégâts moraux et matériels de la guerre.",

            "Brothers-Title": "Brothers Family",
            "Brothers-SubTitle": "Logo",
            "Brothers-Desc": "Logo pour la team e-sport Brothers Family.",

            "HeavenMoon-Title": "HeavenMoon",
            "HeavenMoon-SubTitle": "Logo",
            "HeavenMoon-Desc": "Logo pour mon serveur minecraft HeavenMoon.",

            "Description-1": "Fan d'informatique depuis mes 7 ans, j'apprends chaque jour des nouveautés dans divers domaines et je vous partage mon avancée afin d'en faire un récit que je vous raconte.",
            "Description-2": "Développeur depuis peu, je me dirige vers un avenir meilleur avec la possibilité de changer ce bas monde dans lequel nous vivons.",
            "Useful-Links": "Liens Utiles",

            "Copyright": "Tous droits réservés."
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