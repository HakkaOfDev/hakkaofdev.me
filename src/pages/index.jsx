import { connect } from 'react-redux'
import initialize from '../utils/initialize'
import Layout from '../components/Layout'
import Project from "../components/Projects/Project";
import React, {Fragment} from "react";
import './i18n';

const Index = () => {

    const projects = [
        {
            title: "Like",
            subTitle: "Obvious",
            desc: "Like awesome",
            dateStart: new Date("2002-07-20"),
            dateEnd: new Date("2003-07-20"),
            cta: "#",
            img: "https://via.placeholder.com/500"
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

    return (
        <Layout>
            <div style={{height:"50vh"}}>
                <h1>Bienvenue</h1>
            </div>
            <div className="projects">
                <div className="container">
                    {projects.map((project, index) => (
                        <Fragment>
                            <Project {...project} key={index}/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

Index.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(state => state)(Index)
