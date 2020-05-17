import React from "react";
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t, i18n} = useTranslation();

    return(
        // <div className="hero header-container">
        //     <span><p id="typing" className="sm:text:center textheader text:amber-2 hover:text:amber"></p></span>
        //     <div id="typed"><p>ALEXANDRE GOSSARD</p></div>
        //     <span id="typing_end" className="separator background:amber-4"></span>
        //     <p id="typing_end2" className="sm:text:center subtextheader text:amber-2"><i
        //         className="ti ti-desktop"></i> {t("HeaderText-Lore")} <i className="ti ti-pencil-alt"></i></p>
        // </div>
        <div className="hero header-container">
            <p id="typing" className="sm:text:center textheader text:amber-2 hover:text:amber"></p>
            <div id="typed"><p>ALEXANDRE GOSSARD</p></div>
            <span id="typing_end" className="separator background:amber-4"></span>
            <p id="typing_end2" className="sm:text:center subtextheader text:amber-2">
                <i className="ti ti-desktop"></i> {t("HeaderText-Lore")} <i className="ti ti-pencil-alt"></i>
            </p>
        </div>
    );
}

export default Header;