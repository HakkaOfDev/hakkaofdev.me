import React, { Fragment } from "react";

const Separator = ({ content }) => {
  return (
    <Fragment>
      <div className="separator-field">
        <p className="separator-content">{content}</p>
      </div>
    </Fragment>
  );
};

export default Separator;
