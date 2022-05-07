import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home'
import reportWebVitals from './reportWebVitals';
import Settings from "./pages/Settings";
import About from './pages/About';


ReactDOM.render(
  <Router>
     <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/setting" element={<Settings/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
