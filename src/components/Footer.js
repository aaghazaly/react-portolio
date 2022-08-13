import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon  type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://www.instagram.com/?hl=en';}} />
        <TwitterIcon  type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://twitter.com/?lang=en';}} />
        <FacebookIcon type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://www.facebook.com/';}}  />
        <LinkedInIcon type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/omar-ghazaly-519a68245/';}} />
      </div>
      <p> &copy; 2022 aaghazaly</p>
    </div>
  );
}

export default Footer;
