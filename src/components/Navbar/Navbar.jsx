import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {ResponsiveNavbar} from "../../../public/js/navbar";
import {useTranslation} from "react-i18next";
import {Dropdown} from "../../../public/js/dropdown";

const Navbar = () => {
    const {pathname} = useRouter()

    const langs = [
        "en", "fr"
    ]

    useEffect(() => {
        ResponsiveNavbar();
        Dropdown();
    }, [])

    const {t, i18n} = useTranslation();

    function handleScroll(event, link, behavior) {
        event.preventDefault();
        document.querySelector(link).scrollIntoView({behavior: 'smooth', block: behavior});
    }

    return (
        <div className="navbar background:grey-4 sticky-top">
            <div className="navbar-brand">
                <a href="https://www.hakkaofdev.me">
                    <img className="logo img-responsive" src="/img/hakkaofdevlogo.png"/>
                </a>
            </div>
            <div className="navbar-toggler">
                <div className="toggle-icon"></div>
            </div>
            <div className="navbar-container">
                <div className="nav-link link-animated">
                    <a className="hover:text:amber-2"
                       onClick={(event) => handleScroll(event, "#about", "center")}>{t("Link-About")}</a>
                </div>
                <div className="nav-link link-animated">
                    <a className="hover:text:amber-2"
                       onClick={(event) => handleScroll(event, "#skills", "center")}>{t("Link-Skills")}</a>
                </div>
                <div className="nav-link link-animated">
                    <a className="hover:text:amber-2"
                       onClick={(event) => handleScroll(event, "#projects", "start")}>{t("Link-Projects")}</a>
                </div>
                <div className="nav-link link-animated">
                    <a className="hover:text:amber-2"
                       onClick={(event) => handleScroll(event, "#portfolio", "start")}>{t("Link-Portfolio")}</a>
                </div>
                <div className="nav-link link-animated">
                    <a className="hover:text:amber-2"
                       onClick={(event) => handleScroll(event, "#contact", "start")}>{t("Link-Contact")}</a>
                </div>
                <a href="https://www.github.com/HakkaOfDev"
                   className="btn btn:rounded github-button background:amber-2"><i className="ti ti-github"></i> Github
                </a>
                <div className="nav-link lang-container">
                    <div className="dropdown">
                        <button className="dropdown-toggler" dropdown-autoclose="true" dropdown-target="#dropdown2"
                                dropdown-position="right" dropdown-action="hover">
                            {i18n.language.toUpperCase()} <i className="ti ti-angle-down"></i>
                        </button>
                        <div id="dropdown2" className="dropdown-container">
                            {
                                langs.map((lang) => {
                                    if (lang === i18n.language) {
                                        return <a role="button"
                                                  className="background:amber-2 sm:text:center">{lang.toUpperCase()}</a>
                                    } else {
                                        return <a role="button"
                                                  className="border:amber-2 lang-link hover:background:amber-1 sm:text:center"
                                                  onClick={() => i18n.changeLanguage(lang)}>{lang.toUpperCase()}</a>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-overlay"></div>
        </div>

    )
}

export default Navbar;