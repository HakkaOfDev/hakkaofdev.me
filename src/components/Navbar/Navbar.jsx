import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from "next/link";
import {ResponsiveNavbar} from "../../../public/js/navbar";

const Navbar = () => {
    const {pathname} = useRouter()

    useEffect(() => {
        ResponsiveNavbar()
    }, [])

    return (
        <div className="navbar bg-blue sticky-top">
            <div className="navbar-brand">Logo</div>
            <div className="navbar-toggler">
                <div className="toggle-icon"></div>
            </div>
            <div className="navbar-container">
                <div className="nav-link">
                    <Link href="/components/grid"><a>Grids</a></Link>
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