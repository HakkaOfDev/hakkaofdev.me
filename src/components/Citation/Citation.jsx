import React from "react";
import {useTranslation} from "react-i18next";
import {Fade} from "react-reveal";

const Citation = ({data}) => {

    const {citation, author} = data;

    const {t, i18n} = useTranslation();

    return (

        <div className="hero citation-container">
            <Fade bottom>
                <blockquote>
                    <p className="citation">❝ {t(citation)}</p>
                    <cite className="author">- {author}</cite>
                </blockquote>
            </Fade>
        </div>

    );
}

export default Citation;