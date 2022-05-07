import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import bear from './images/bear.png'
import oski from "./images/oski.webp"
import Modal from 'react-modal';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth, logInWithEmailAndPassword,  registerWithEmailAndPassword,
  signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const App = () =>{
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false);
  const [modalLogInIsOpen, setModalLogInIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  const [user, loading, error] = useAuthState(auth);
    return (
      <div className="container">
        <div className="Bar">
          <img alt="logo" className="photo" src={bear} style={{width: "100px", height: "100px"}}/>
          <h1 style = {{marginRight: "43%", paddingTop: "10px"}}>StudyBear</h1>
          <Link className="barText" to="/aboutus" style={{textDecoration: "none", marginTop: "20px"}}>About us</Link>
          <Link className="barText" to="/" style={{textDecoration: "none", marginTop: "20px"}}>How it works</Link>
          <Link className="barText" to="/" style={{textDecoration: "none", marginTop: "20px"}}> Contact us</Link>
          <button className="topButton" onClick={() => setModalSignUpIsOpen(true)}> Join StudyBear!</button>
          <Modal isOpen={modalSignUpIsOpen} onRequestClose={() => setModalSignUpIsOpen(false)} style={{
            content: {
              marginLeft: "28%",
              marginTop: "100px",
              width: "500px",
              height: "300px",
              backgroundColor: "#00B4D8"
            }
          }}>
            <div className="register__container">
            <input
              type="text"
              className="register__textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="text"
              className="register__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="register__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            </div>
            <div>
            <Link className="register__btn" onClick={register}
            to= "/home">
                Register
            </Link>
            </div>
            <div>
              <button style={{marginLeft:" 100px", border: "none", background: "none", marginTop:"20px", color: "yellow", fontSize: "20px"}} 
              onClick={() =>  {setModalSignUpIsOpen(false); setModalLogInIsOpen(true)}}> Already have an account? 
              <span style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}> Log In!</span></button>
            </div>
          </Modal>
          <Modal isOpen={modalLogInIsOpen} onRequestClose={() => setModalLogInIsOpen(false)} style={{
            content: {
              marginLeft: "28%",
              marginTop: "100px",
              width: "500px",
              height: "300px"
            }
          }}>
            <div className="login__container">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Link
              className="login__btn"
              onClick={() => {logInWithEmailAndPassword(email, password);}}
              to="/home"
            >
              Login
            </Link>
            </div>
            <div>
            <button style={{marginLeft:" 150px", border: "none", background: "none"}} 
              onClick={() =>  {setModalLogInIsOpen(false); setModalSignUpIsOpen(true); }}> Don't have an account? 
              <span style={{color: "blue"}}> Sign Up!</span></button>
            </div>
          </Modal>
        </div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div className="leftTextBox">
            <p className="paragraph"> Tired of working 
            <span style={{color: "#FDB515"}}> alone</span>? Want to meet fellow bears <span style={{color: "#FDB515"}}>studying</span>?</p>
            <p className= "smallerParagraph"> Join StudyBear! A community of Berkeley students looking for fellow bears to study with.</p>
            <button className="topButton" style={{fontSize: "25px", width: "200px"}} onClick={() => setModalSignUpIsOpen(true)}>Join now!</button>
          </div>
          <div>
            <img alt="oski" className = "oski" src={oski}/>
          </div>
        </div>
        </div>
    );
}

export default App;