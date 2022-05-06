import "./top3.css";
import { PermMedia } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Users } from "../../dummy";

export default function Top3({ username }) {


  return (
      <div className="wrapper">
        <div className="titlewrap">
            <div className="title">Your Top 3 StudyBears</div>
        </div>
        <div className="Top3">
            <div className="left">
                <img 
                    className="photo"
                    src={Users.filter((u) => u.id === 2)[0].profilePicture}
                />
                <div className="name">
                    {Users.filter((u) => u.id === 2)[0].username}
                </div>
                <div className="desc1">
                    {Users.filter((u) => u.id === 2)[0].description}
                </div>
            </div>
            <div className="mid">
                <img 
                    className="photo"   
                    src={Users.filter((u) => u.id === 2)[0].profilePicture}
                />
                <div className="name">
                    {Users.filter((u) => u.id === 4)[0].username}
                </div> 
                <div className="desc1">
                    {Users.filter((u) => u.id === 4)[0].description}
                </div>
            </div>
            <div className="right">
                <img 
                    className="photo"
                    src={Users.filter((u) => u.id === 2)[0].profilePicture}
                />
                <div className="name">
                    {Users.filter((u) => u.id === 3)[0].username}
                </div>
                <div className="desc1">
                    {Users.filter((u) => u.id === 4)[0].description}
                </div>
            </div>
        </div>
      </div>
  )
}
