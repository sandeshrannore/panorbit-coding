import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProfileDashboard.css";
import SideNav from "../../components/sideNav/SideNav";
import ProfileBody from "../../components/profileBody/ProfileBody";
import LogoutSection from "../../components/logout/LogoutSection";

const ProfileDashboard = () => {
  const location = useLocation();
  const userData = location.state ||         {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

  const [showProfile, setShowProfile] = useState(false);

  const toggle = () => {
    setShowProfile(!showProfile)
  }

  return (
    <div className="profileMain">
      <SideNav id={userData?.id} />
      <LogoutSection show={showProfile} setShow={setShowProfile} data={userData} />
      <div className="content">
        <div className="header">
          <span>Profile</span>
          <div onClick={toggle} className="profile-d">
            <img src={userData?.profilepicture} alt="profile image" />
            <p>{userData?.name}</p>
          </div>
        </div>
        <hr />
        <ProfileBody data={userData} />
      </div>
    </div>
  );
};

export default ProfileDashboard;
