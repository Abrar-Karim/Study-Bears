import React from 'react';
import bear from '../images/bear.png'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import '../App.css';
import { auth, logout } from "../firebase";
import Home from "./home/Home";

function Settings() {


    return(
        <div>
            <div className="Bar" style={{backgroundColor: "#FDB515"}}>
            <img alt="logo" className="photo" src={bear} style={{width: "100px", height: "100px"}}/>
            <h1 style = {{marginRight: "43%", paddingTop: "10px"}}>StudyBear</h1>
            <h3 className="logInBarText">Setting</h3>
            <h3 className="logInBarText">Profile</h3>
            {/* <h3 className="logInBarText">Matches</h3> */}
            <Link className="logInBarLink" to= '/home' component={<Home/>}> Matches</Link>
            <Link className="logInBarLink" onClick={() => logout} to= '/'> Signout</Link>
            </div>
            <div className="settingNav" style={{backgroundColor: "#00B0DA"}}>
                <h1 className="settingNavText" style={{margin: "0px",   paddingTop: "30px",   paddingLeft: "17%"}}> Navigation</h1>
                <div style={{width: "250px", paddingLeft: "15px"}}>
                    <h4 className="settingNavText" > Edit Profile</h4>
                    <hr className="line"></hr>
                    <h4 className="settingNavText" >Change password</h4>
                    <hr className="line"></hr>
                    <h4 className="settingNavText" >Contact Us</h4>
                    <hr className="line"></hr>
                </div>
            </div>
        </div>
        
    );
}

export default Settings;