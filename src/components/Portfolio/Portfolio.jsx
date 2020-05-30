import React, {Fragment, useEffect} from "react";

const Portfolio = () => {

    return (
        <Fragment>
            <div className="portfolio-container">
                <ul className="portfolio">
                    <li>
                        <figure>
                            <img src="http://farm3.staticflickr.com/2675/4029465977_e0ec2d53c6_z.jpg?zz=1"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a className="" href="#">link</a></figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="http://farm1.staticflickr.com/212/461888176_cd0894c52c_z.jpg?zz=1"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a href="#">link</a></figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src="http://farm3.staticflickr.com/2431/3949931873_c5f441a386_b.jpg?zz=1"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a href="#">link</a></figcaption>
                        </figure>
                    </li>

                    <li>
                        <figure>
                            <img src="http://farm3.staticflickr.com/2431/3949931873_c5f441a386_b.jpg"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a href="#">link</a></figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="http://farm1.staticflickr.com/212/461888176_cd0894c52c_z.jpg?zz=1"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a href="#">link</a></figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="http://farm3.staticflickr.com/2675/4029465977_e0ec2d53c6_z.jpg?zz=1"
                                 alt="placeholder"/>
                            <h3>The Title</h3>
                            <figcaption><a href="#">link</a></figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </Fragment>
    );

}

export default Portfolio;