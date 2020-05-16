import {connect} from 'react-redux'
import initialize from '../utils/initialize'
import Layout from '../components/Layout'
import Project from "../components/Projects/Project";
import React, {Fragment} from "react";
import './i18n';
import {Parallax} from "react-parallax";
import {Fade, Rotate, Zoom} from "react-reveal";
import {useTranslation} from "react-i18next";

const Index = () => {
    const projects = [
        {
            title: "FastLeaderboard",
            subTitle: "Project-Leaderboard-Lore",
            desc: "Like awesome",
            dateStart: new Date("2020-05-03"),
            dateEnd: -1,
            cta: "#",
            img: "/img/leaderboards.png"
        },
        {
            title: "Gusta",
            subTitle: "Obvious",
            desc: "Like awesome",
            dateStart: new Date("2002-07-20"),
            dateEnd: new Date("2003-07-20"),
            cta: "#",
            img: "https://via.placeholder.com/500"
        },
        {
            title: "Love",
            subTitle: "Obvious",
            desc: "Like awesome",
            dateStart: new Date("2002-07-20"),
            dateEnd: new Date("2003-07-20"),
            cta: "#",
            img: "https://via.placeholder.com/500"
        }
    ]

    const {t, i18n} = useTranslation();

    return (
        <Layout>
            <div style={{height:"50vh", background: "url('/img/welcome.jpg') no-repeat center", backgroundSize:"cover", lineHeight:"5rem"}} className="hero">
                <Fade left big cascade>
                    <p className="sm:text:center textheader text:amber-2 hover:text:amber">ALEXANDRE GOSSARD</p>
                </Fade>
                <Fade right>
                    <span className="separator background:cyan-1"></span>
                </Fade>
                <Zoom>
                   <p className="sm:text:center subtextheader text:amber-2"><i className="ti ti-desktop"></i> {t("HeaderText-Lore")} <i className="ti ti-pencil-alt"></i></p>
                </Zoom>
            </div>
            <div className="projects">
                <div className="container">
                    {projects.map((project) => (
                        <Fragment>
                            <Project {...project}/>
                        </Fragment>
                    ))}
                </div>
            </div>
            <Parallax
                bgImage={'/img/welcome.jpg'}
                bgImageAlt="Header"
                blur={{ min: -100, max: 100 }}
                strength={-250}
            >
                <div style={{height: "50vh", backgroundProperty: "no-repeat center", backgroundSize: "cover"}}/>
            </Parallax>
            <div style={{height:"50vh"}} className="hero">
                <h1 className="sm:text:center md:text:center textheader">Bienvenue</h1>
            </div>
        </Layout>
    );
}

Index.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(state => state)(Index)
