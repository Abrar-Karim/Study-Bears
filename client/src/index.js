import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home'
import reportWebVitals from './reportWebVitals';
import Settings from "./pages/Settings";



ReactDOM.render(
  <Router>
     <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/setting" element={<Settings/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
