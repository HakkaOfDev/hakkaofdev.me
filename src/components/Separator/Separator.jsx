import React, {Fragment} from "react";
import Particles from "react-particles-js";

const Separator = ({content}) => {

    return (
        <Fragment>
            <div className="separator-field">
                <Particles height="100px"
                           params={{
                               particles: {
                                   number: {
                                       value: 200,
                                       density: {
                                           enable: true,
                                           value_area: 1000,
                                       }
                                   },
                               },
                           }}>
                </Particles>
                <p className="separator-content">
                    {content}
                </p>
            </div>
        </Fragment>
    );

}

export default Separator;
