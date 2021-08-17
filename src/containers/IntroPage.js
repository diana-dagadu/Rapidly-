import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import images
import undraw_Traveling from "../img/undraw_Traveling_re_weve.svg";

const IntroPage = () => {
  return (
    <div classNameNameName="intro_page">
      <Navbar login="Login" signup="Sign Up" />
      <div className="container2">
        <div className="intro_content">
          <div className="intro_img">
            <img src={undraw_Traveling} alt="weve" />
          </div>
          <div className="company_info">
            <div className="info">
              <h2 className="subtitle">Providing Rich Company Data</h2>
              <br />
              <h4>
                Allow us furnish you with rich and accurate data on company
                size, year founded, headcount, location and many more.
              </h4>
            </div>
            <Link className="btn" to="/login">
             GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
