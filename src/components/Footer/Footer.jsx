import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";
import {Fade} from "react-reveal";

const Footer = () => {

    const {t, i18n} = useTranslation();

    return (
        <Fragment>
            <div className="footer-container">
                <div className="columns">
                    <Fade left>
                        <div className="lg:col-6 sm:col-12">
                            <div className="footer-item">
                                <p>
                                    <span className="footer-item-title">Description</span>
                                    <hr/>
                                    {t("Description-1")}
                                    <br/>
                                    {t("Description-2")}
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="lg:col-3 sm:hide">
                            <img src="/img/avatar.jpg" className="img-responsive w-100 h-100"/>
                        </div>
                    </Fade>
                    <Fade rigth>

                        <div className="lg:col-3 sm:col-6">
                            <div className="footer-item">
                                <p>
                                    <span className="footer-item-title">{t("Useful-Links")}</span>
                                    <hr/>
                                    <ul>
                                        <li>
                                            <a href="#about">{t("Link-About")}</a>
                                        </li>
                                        <li>
                                            <a href="#skills">{t("Link-Skills")}</a>
                                        </li>
                                        <li>
                                            <a href="#projects">{t("Link-Projects")}</a>
                                        </li>
                                        <li>
                                            <a href="#portfolio">{t("Link-Portfolio")}</a>
                                        </li>
                                        <li>
                                            <a href="#contact">{t("Link-Contact")}</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="copyright background:amber-4">
                <p>
                    Copyright © 2020 <a href="https://www.hakkaofdev.me">Alexandre Gossard</a> - {t("Copyright")}
                </p>
            </div>
        </Fragment>
    );
}

export default Footer;