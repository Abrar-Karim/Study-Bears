import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/setting" style={{ textDecoration: "none" }}>
          <span className="logo">StudyBear</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <span className="rank">StudyBear Ranking</span>
        <span className="desc">helps you find the most suitable studybear for you</span>
      </div>
      <div className="topbarRight">
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
