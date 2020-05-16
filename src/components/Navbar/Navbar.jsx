import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from "next/link";
import {ResponsiveNavbar} from "../../../public/js/navbar";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {pathname} = useRouter()

    useEffect(() => {
        ResponsiveNavbar()
    }, [])

    const {t,i18n} = useTranslation();

    return (
        <div className="navbar background:grey-4 sticky-top">
            <div className="navbar-brand"><img className="logo img-responsive" src="/img/hakkaofdevlogo.png" style={{maxHeight:"80%"}}/></div>
            <div className="navbar-toggler">
                <div className="toggle-icon"></div>
            </div>
            <div className="navbar-container">
                <button className="btn btn:rounded border:blue" onClick={() => i18n.changeLanguage('fr')}>FR</button>
                <button className="btn btn:rounded border:blue" onClick={() => i18n.changeLanguage('en')}>EN</button>
                <div className="nav-link">
                    <Link href="#about"><a className="hover:text:amber-2">{t("Link-About")}</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="#skills"><a className="hover:text:amber-2">{t("Link-Skills")}</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="#projects"><a className="hover:text:amber-2">{t("Link-Projects")}</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="#portfolio"><a className="hover:text:amber-2">{t("Link-Portfolio")}</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="#contact"><a className="hover:text:amber-2">{t("Link-Contact")}</a></Link>
                </div>
                <button className="btn btn:rounded hover:background:purple"><i className="ti ti-github"></i> Github</button>
            </div>
            <div className="navbar-overlay"></div>
        </div>

    )
}

export default Navbar;