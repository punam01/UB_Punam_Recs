import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className="container my-5 fixed-top">
        <div className="alert alert-secondary my-3" role="alert">
          {props.message}
        </div>
      </div>
    </>
  );
};

export default Alert;
