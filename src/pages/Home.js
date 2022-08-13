
import React from "react";
import  { Component } from 'react';
import {Link} from 'react-router-dom'

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="name"> Hi, Here it is Omar Mahmoud Ghazaly</h2>
        <div className="prompt">
          <p>A software Enginner </p>
          
          <LinkedInIcon type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/omar-ghazaly-519a68245/';}} />
          <EmailIcon type="button" target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://mail.google.com/mail/u/0/#inbox';}}/>
          <GithubIcon target="_blank"  onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/aaghazaly';}} />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, BootStrap, HTML, CSS,
              MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Spring , Django  , ExpressJS, 
              MySQL, MongoDB, DynamoDB  
            </span>
          </li>
          <h2>Automation & Tools </h2>
            <span>
            DOCKER ,JENKIN , MAVEN , TERRAFORM
            CI/CD PIPELINE ,  Gitlab  ,Git 
            </span>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, HTML ,CSS , SQL</span>
          </li>
          <li className="item">
            <h2>Cloud Technoliges AWS  </h2>
            <span> EC2 , S3 , EBS , VPC , LAMBDA </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
