import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import profileImg from "../../blogimg4.jpg";

const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="" className="settingsLebel">
              Profile Picture
            </label>
            <div className="settingsPP">
              <img src={profileImg} alt="" width="100% " className="settingsImg" />
              <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input type="text" id="fileInput"  style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text"  placeholder="Anurag Pal"/>

            <label>Email</label>
            <input type="mail"  placeholder="anuragpal@gmail.com"/>

            <label>Password</label>
            <input type="password"  placeholder="Anurag Pal"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Settings;
