import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import CardImage from "./CardImage";

const Portfolio = () => {
  const datas = [
    {
      title: "Hydraulic-Ascent-Title",
      subTitle: "Hydraulic-Ascent-SubTitle",
      desc: "Hydraulic-Ascent-Desc",
      img: "hydraulic.jpg",
    },
    {
      title: "Marianne-Title",
      subTitle: "Marianne-SubTitle",
      desc: "Marianne-Desc",
      img: "Marianne.jpg",
    },
    {
      title: "Background-Title",
      subTitle: "Background-SubTitle",
      desc: "Background-Desc",
      img: "background.jpg",
    },
    {
      title: "Brothers-Title",
      subTitle: "Brothers-SubTitle",
      desc: "Brothers-Desc",
      img: "logo_brothers.jpg",
    },
    {
      title: "HeavenMoon-Title",
      subTitle: "HeavenMoon-SubTitle",
      desc: "HeavenMoon-Desc",
      img: "logo_moon.jpg",
    },
  ];

  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <div className="portfolio-container container">
        <p className="portfolio-title">{t("Link-Portfolio")}</p>
        <div className="cards-container">
          {datas.map((card) => (
            <Fragment key={card.title}>
              <CardImage {...card} />
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
