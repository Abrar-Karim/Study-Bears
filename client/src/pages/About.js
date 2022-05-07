import React from 'react';
import bear from '../images/bear.png'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function About() {
    return(
    <div style= {{backgroundColor: '#0077B6', height: "800px"}}>
        <div className="Bar">
          <img alt="logo" className="photo" src={bear} style={{width: "100px", height: "100px"}}/>
          <h1 style = {{marginRight: "43%", paddingTop: "10px"}}>StudyBear</h1>
          <Link className="barText" to="/aboutus" style={{textDecoration: "none", marginTop: "20px"}}>About us</Link>
          <Link className="barText" to="/" style={{textDecoration: "none", marginTop: "20px"}}>How it works</Link>
          <Link className="barText" to="/" style={{textDecoration: "none", marginTop: "20px"}}> Contact us</Link>
          <button className="topButton"> Join StudyBear!</button>

          </div>
        <div>
            <h1 style={{marginLeft: "45%", color: "#ffffff"}}> About us</h1>
            <p style={{margin: "2%", color: "yellow", lineHeight: "3", fontSize: "20px"}}> We decided to make this website because we noticed, especially during the COVID pandemic, that it can be hard 
                to find study groups when you are unable to attend discussion, labs, etc. Even if you attend those sections,
                it can be difficult to find a study group. IN addition to that, currently, there's no centralized platform to find
                a study group. You have to join a bunch of discords, reach out on piazza, etc if you don't already know people in the class.
                So we thought what could make this process easier? Well why not make a website where Berkeley students can sign up, put in
                their studying preferences and match them up!
            </p>
        </div>
    </div>
          );
}

export default About;