import React, {useEffect} from "react";
import {Fade} from "react-reveal";

const Media = () => {

    return (
        <Fade right opposite cascade>
            <div className="social-media">
                <div className="social-container">
                    <div className="social-item">
                        <div className="social-anim">
                            <a href="#" role="button" className="text:amber-2"><i className="ti ti-instagram social-logo"></i></a>
                        </div>
                    </div>
                    <div className="social-item">
                        <div className="social-anim">
                            <a href="#" role="button" className="text:amber-2"><i className="ti ti-twitter"></i></a>
                        </div>
                    </div>
                    <div className="social-item">
                        <div className="social-anim">
                            <a href="#" role="button" className="text:amber-2"><i className="ti ti-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="social-item">
                        <div className="social-anim">
                            <a href="#" role="button" className="text:amber-2"><i className="ti ti-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Media;