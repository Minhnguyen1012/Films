import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faEnvelopeSquare,
  faPhone,
  faPhoneSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo2 from "../images/logo2.png";
import {
  faFacebook,
  faGoogle,
  faGoogleDrive,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bigFotterBox">
        <div className="footerBox">
          <div>
            <img src={logo2} alt="SMovies" width="200px" />
          </div>
        </div>
        <div className="footerBox">
          <div>
            <h2>Contact</h2>
            <p>Copac Square, 12 Ton Dan St., Ward 13, Dist 4</p>
            <p>Ho Chi Minh</p>
            <p>Vietnam</p>
            <div className="flexify">
              <FontAwesomeIcon icon={faPhoneSquareAlt} size={"lg"} />
              <p>&nbsp; 1900 326 991</p>
            </div>
            <div className="flexify">
              <FontAwesomeIcon icon={faGoogle} size={"lg"} />
              <p>&nbsp;SaiGonYa@cinema.vn</p>
            </div>
          </div>
        </div>
        <div className="footerBox">
          <div>
            <h3>Follow us:</h3>
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"2x"}
                  color={"#95a5a6"}
                />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={"2x"}
                  color={"#95a5a6"}
                />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={"2x"}
                  color={"#95a5a6"}
                />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size={"2x"}
                  color={"#95a5a6"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
