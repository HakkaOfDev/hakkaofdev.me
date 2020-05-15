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
        <div className="navbar bg-blue sticky-top">
            <div className="navbar-brand">Logo</div>
            <div className="navbar-toggler">
                <div className="toggle-icon"></div>
            </div>
            <div className="navbar-container">
                <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                <div className="nav-link">
                    <Link href="/components/grid"><a>{t('Welcome')}</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="/components/show"><a>Show</a></Link>
                </div>
                <div className="nav-link">
                    <Link href="/test"><a>Tooltips</a></Link>
                </div>
            </div>
            <div className="navbar-overlay"></div>
        </div>

    )
}

export default Navbar;