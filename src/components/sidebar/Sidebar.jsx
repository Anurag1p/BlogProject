import "./sidebar.css";
import aboutme from "../../blogimg2.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebartitle">About Me</span>
        <img src={aboutme} width="100%" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, facere,
          impedit cumque repellendus dignissimos dolorem molestiae at cupiditate
          vitae possimus officiis sit dicta minima.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
