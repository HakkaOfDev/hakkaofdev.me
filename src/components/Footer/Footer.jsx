import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <div className="footer-container">
        <div className="columns">
          <Fade left>
            <div className="lg:col-6 sm:col-12 sm:order-1">
              <div className="footer-item">
                <p>
                  <span className="footer-item-title">Description</span>
                  <hr />
                  {t("Description-1")}
                  <br />
                  {t("Description-2")}
                </p>
              </div>
              <div className="footer-media">
                <a
                  href="https://github.com/HakkaOfDev/"
                  role="button"
                  className="btn btn:rounded background:amber-2"
                >
                  <i className="ti ti-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/hakkaofdev"
                  role="button"
                  className="btn btn:rounded background:amber-2"
                >
                  <i className="ti ti-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/MZMdev"
                  role="button"
                  className="btn btn:rounded background:amber-2"
                >
                  <i className="ti ti-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/hakkaofdev"
                  role="button"
                  className="btn btn:rounded background:amber-2"
                >
                  <i className="ti ti-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCL2DQSKkbk4JoTtrrguSqmA?view_as=subscriber"
                  role="button"
                  className="btn btn:rounded background:amber-2"
                >
                  <i className="ti ti-youtube"></i>
                </a>
              </div>
            </div>
          </Fade>
          <div className="lg:col-3 sm:hide md:hide sm:order-3 lg:order-2">
            <img src="/img/avatar.jpg" className="img-responsive w-100 h-100" />
          </div>
          <Fade right>
            <div className="lg:col-3 sm:col-12 sm:order-2 lg:order-3">
              <div className="footer-item">
                <p>
                  <span className="footer-item-title">{t("Useful-Links")}</span>
                  <hr />
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
        <div className="copyright background:amber-4">
          <p>Copyright © 2020</p>
          <a href="https://www.hakkaofdev.me">Alexandre Gossard</a>
          <p>{t("Copyright")}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
