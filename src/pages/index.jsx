import {connect} from 'react-redux'
import initialize from '../utils/initialize'
import Layout from '../components/Layout'
import Project from "../components/Projects/Project";
import React, {Fragment, useEffect} from "react";
import './i18n';
import {Parallax} from "react-parallax";
import {Fade, Rotate, Zoom} from "react-reveal";
import {useTranslation} from "react-i18next";
import Typed from 'typed.js';
import About from "../components/About/About";
import Citation from "../components/Citation/Citation";
import Header from "../components/Header/Header";

const Index = () => {
    const projects = [
        {
            title: "FastLeaderboard",
            subTitle: "Project-Leaderboard-Lore",
            desc: "Project-Leaderboard-Desc",
            features: ["Project-Leaderboard-Feature-1", "Project-Leaderboard-Feature-2", "Project-Leaderboard-Feature-3", "Project-Leaderboard-Feature-4", "Project-Leaderboard-Feature-5", "Project-Leaderboard-Feature-6"],
            dateStart: new Date("2020-05-03"),
            dateEnd: -1,
            cta: "https://github.com/HakkaOfDev/FastLeaderboard",
            img: "/img/leaderboards.png"
        },
        {
            title: "HeavenMoon",
            subTitle: "Project-Heavenmoon-Lore",
            desc: "Project-Heavenmoon-Desc",
            features: ["Project-Heavenmoon-Feature-1", "Project-Heavenmoon-Feature-2", "Project-Heavenmoon-Feature-3", "Project-Heavenmoon-Feature-4", "Project-Heavenmoon-Feature-5"],
            dateStart: new Date("2020-04-24"),
            dateEnd: -1,
            cta: "https://www.hakkaofdev.me/heavenmoon.pdf",
            img: "/img/heavenmoon.jpg"
        },
        {
            title: "WorkersMc",
            subTitle: "Project-Workers-Lore",
            desc: "Project-Workers-Desc",
            features: ["Project-Workers-Feature-1", "Project-Workers-Feature-2", "Project-Workers-Feature-3", "Project-Workers-Feature-4", "Project-Workers-Feature-5"],
            dateStart: new Date("2002-07-20"),
            dateEnd: -1,
            cta: "#",
            img: "/img/workers.png"
        }
        // put env-zero
    ]

    useEffect(() => {
        new Typed('#typing', {
            stringsElement: '#typed',
            typeSpeed: 75,
            showCursor: false,
            onComplete: (() => {
                document.querySelector('#typing_end').setAttribute('style', `animation: typing_reveal .7s both`)
                document.querySelector('#typing_end2').setAttribute('style', `animation: typing_reveal .7s both`)
            })
        });
    }, []);

    const {t, i18n} = useTranslation();

    const options = {
        title:"HakkaOfDev",
        describe:"Official website of HakkaOfDev",
        image:"/img/citation.jpg"
    }

    return (
        <Layout title={options.title} describe={options.describe} image={options.image}>
            <Header />

            <Parallax
                bgImage={'/img/citation.jpg'}
                bgImageAlt="Citation Newton"
                blur={{min: -100, max: 100}}
                strength={-250}>
                <Citation data={{citation:"Citation-Newton", author:"Isaac Newton"}}/>
            </Parallax>

            <About/>

            <Parallax
                bgImage={'/img/citation.jpg'}
                bgImageAlt="Citation Voltaire"
                blur={{min: -100, max: 100}}
                strength={-250}>
                <Citation data={{citation:"Citation-Voltaire", author:"Voltaire"}}/>
            </Parallax>

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
                bgImage={'/img/citation.jpg'}
                bgImageAlt="Citation Gossard"
                blur={{min: -100, max: 100}}
                strength={-250}>
                <Citation data={{citation:"Citation-Gossard", author:"Alexandre Gossard"}}/>
            </Parallax>
        </Layout>
    );
}

Index.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(state => state)(Index)
