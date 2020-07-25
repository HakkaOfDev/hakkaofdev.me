import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";

const CardImage = ({title, subTitle, desc, img}) => {

    const {t, i18n} = useTranslation();

    return (
        <Fragment>
            <div className="card card:border border:amber-2">
                <img src={"/img/" + img} alt="" style={{objectFit: "cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">{t(title)}</h5>
                    <div className="card-subtitle">{t(subTitle)}</div>
                    <p className="card-text">
                        {t(desc)}
                    </p>
                </div>
            </div>
        </Fragment>
    );

}

export default CardImage;