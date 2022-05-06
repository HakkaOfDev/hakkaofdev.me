import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

const Project = ({
  title,
  subTitle,
  desc,
  features,
  dateStart,
  dateEnd,
  cta,
  img,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="item-container">
      <div className="text">
        <Fade left>
          <div className="container">
            <p>
              <span className="title text:amber-2">{title}</span>
              <br />
              <span className="subtitle">{t(subTitle)}</span>
            </p>
            <h4 className="time text:grey-1">
              <i className="ti ti-angle-double-right"></i>
              {dateEnd === -1
                ? t("Project-Progress") + " "
                : t("Project-Duration") +
                  ": " +
                  (dateEnd.getTime() - dateStart.getTime()) /
                    (1000 * 3600 * 24) +
                  " " +
                  t("Project-Days") +
                  " "}
              <i className="ti ti-timer"></i>
            </h4>
            <div>
              <div className="desc text:grey-3">
                <span className="desctitle">{t(desc)}</span>
                <br />
                <ul className="features">
                  {features.map((feature) => {
                    return (
                      <li key={feature}>
                        <i className="ti ti-shift-right sm:mr-2"></i>{" "}
                        {t(feature)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <br />
            <a
              href={cta}
              className="btn btn:rounded discover-button background:amber-2"
            >
              {t("Project-Button")} <i className="ti ti-arrow-right"></i>
            </a>
          </div>
        </Fade>
      </div>
      <div className="image">
        <img
          src={img}
          className="img-responsive w-100 h-100"
          alt="multiple-image-viewport"
        />
      </div>
    </div>
  );
};

export default Project;
