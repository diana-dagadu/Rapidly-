import React from "react";

// images
import wave from "../img/wave.png";

const AuthTemplate = (props) => {
  return (
    <>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={props.image} alt="login" />
        </div>
        {props.children}
      </div>
    </>
  );
};

export default AuthTemplate;
