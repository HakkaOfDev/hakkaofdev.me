import React from "react";
import {useTranslation} from "react-i18next";
import {Fade} from "react-reveal";

const About = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id="about" className="about-container hero">
            <div className="lg:py-5 lg:grid-lg">
                <div className="columns">
                    <div className="avatar-container p:relative sm:col-12 md:col-4 lg:col-6">
                        <Fade bottom>
                            <img src="/img/profil.jpg" className="about-avatar img-responsive"/>
                        </Fade>
                    </div>
                    <div className="sm:col-12 md:col-8 lg:col-4">
                        <Fade right cascade>
                            <div className="about-text">
                                <h1 className="author-title text:amber-2">
                                    ALEXANDRE GOSSARD |
                                </h1>
                                <h4 className="author-subtitle text:amber-4">
                                    {t("About-Lore-End")}
                                </h4>
                                <p>{t("About-Lore-1")}</p>
                                <p>{t("About-Lore-2")}</p>
                                <p className="about-citation text:amber-4 hover:text:amber-2">
                                    ❝ {t("About-Lore-Citation")} ❞ <br/>
                                    - Gandhi <br/>
                                    <span className="about-subcitation">{t("About-Lore-SubCitation")}</span>
                                </p>
                                <div className="about-media">
                                    <a href="https://github.com/HakkaOfDev/" role="button" className="btn btn:rounded background:amber-2"><i
                                        className="ti ti-github"></i></a>
                                    <a href="https://www.instagram.com/hakkaofdev" role="button" className="btn btn:rounded background:amber-2"><i
                                        className="ti ti-instagram"></i></a>
                                    <a href="https://twitter.com/MZMdev" role="button" className="btn btn:rounded background:amber-2"><i
                                        className="ti ti-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/hakkaofdev" role="button" className="btn btn:rounded background:amber-2"><i
                                        className="ti ti-linkedin"></i></a>
                                    <a href="https://www.youtube.com/channel/UCL2DQSKkbk4JoTtrrguSqmA?view_as=subscriber" role="button" className="btn btn:rounded background:amber-2"><i
                                        className="ti ti-youtube"></i></a>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;