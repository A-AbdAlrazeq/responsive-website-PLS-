import React from "react";
import "./Footer.css";
/* import { Button } from "../Button"; */
import { Link } from "react-router-dom";
/* function OpenUrl(type) {
  switch (type) {
    case 1:
      window.open("https://www.instagram.com/abood.razeq/");
      break;
    default:
      break;
  }
} */
const URL = (event, id) => {
  event.preventDefault();
  switch (id) {
    case 1:
      window.open("https://www.instagram.com/abood.razeq/");
      break;
    case 2:
      window.open("https://www.facebook.com/aboodrazeq1/");
      break;
    case 3:
      window.open("https://www.linkedin.com/in/abd-alrahman-abd-alrazeq/");
      break;
    case 4:
      window.open("//github.com/A-AbdAlrazeq");
      break;

    default:
      break;
  }
};

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i style={{ color: "red" }} class="fa-solid fa-flag" />{" "}
              <h2 style={{ color: "black" }}>P</h2>
              <h4 style={{ color: "white" }}>L</h4>
              <h5 style={{ color: "green" }}>S</h5>
            </Link>
          </div>
          <small className="website-rights">PLS © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              onClick={(event, id) => URL(event, 2)}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              onClick={(event, id) => URL(event, 1)}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>

            <Link
              className="social-icon-link twitter"
              to="/"
              onClick={(event, id) => URL(event, 3)}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              onClick={(event, id) => URL(event, 4)}
              target="_blank"
              aria-label="Github"
            >
              <i class="fa-brands fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
