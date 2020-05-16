import React from "react";
import {Fade} from "react-reveal";
import {useTranslation} from "react-i18next";
import Link from "next/link";

const Project = ({title, subTitle, desc, dateStart, dateEnd, cta, img}) => {

    const {t, i18n} = useTranslation();

    return (
        <div className="item-container">
            <div className="text">
                <div className="container">
                    <Fade left opposite>
                        <p>
                            <span className="title text:cyan-1">{title}</span><br/>
                            <span className="subtitle">{t(subTitle)}</span>
                        </p>
                        <h4 className="time text:black">
                            <i className="ti ti-angle-double-right"></i>
                            {
                                (dateEnd === -1) ? (t("Project-Progress")) : (t("Project-Duration") + ": " + (dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24) + " " + t("Project-Days"))
                            }
                            <i className="ti ti-timer"></i>
                        </h4>
                        <div>
                            <p className="desc text:grey-3">{desc}</p>
                        </div>
                        <br/>
                        <Link href={cta}>
                            <button onClick={() => {console.log(dateEnd); console.log(dateStart);}} className="btn btn:rounded background:cyan-1">
                                {t("Project-Button")} <i className="ti ti-arrow-right"></i>
                            </button>
                        </Link>
                    </Fade>
                </div>
            </div>
            <div className="image">
                <img src={img} className="img-responsive w-100 h-100"
                     alt="multiple-image-viewport"/>
            </div>
        </div>
    );
}

export default Project;