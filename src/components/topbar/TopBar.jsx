import "../topbar/topbar.css";
import profile from "../../profile.jpg";
import { Link } from "@mui/material";
import "../../pages/home/Home"

const TopBar = () => {
  // const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="../../pages/home/Home" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {/* {user && "LOGOUT"} */}
            <Link to="../" className="link">
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* {user ? ( */}
          <img src={profile} alt="profile" className="topImg" />
        {/* ) : ( */}
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>

            </li>
            <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
              
            </li>
          </ul>
          
          {/* )} */}
          <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
