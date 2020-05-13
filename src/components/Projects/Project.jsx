import React from "react";

const Project = ({ title, subTitle, desc, dateStart, dateEnd, cta, img }) => {

    return (
        <div className="item-container">
            <div className="text">
                <div className="container">
                    {/*Fade reveal*/}
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                    <h4 className="text-gray" style={{fontWeight: 300}}>Durée : {(dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24)} jours</h4>
                    <div className="item-describes">
                        {desc}
                    </div>
                    <a href={cta} className="call-to-action btn bg-blue text-white">
                        <i className="icon icon-arrow-right"></i> J'en profite
                    </a>
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