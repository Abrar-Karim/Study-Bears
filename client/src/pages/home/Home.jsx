import Topbar from "../../components/topbar/Topbar";
import Top3 from "../../components/top3/Top3";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        {/* <Sidebar />
        <Feed />
        <Rightbar /> */}
        <Top3 />
      </div>
    </>
  );
}
