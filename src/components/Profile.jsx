import React from "react";
import ProfileName from "./ProfileName";
import ProfileLinks from "./ProfileLinks";
import ProfilePhoto from "./ProfilePhoto";

function Profile(props){
  let profileWrapper = {
    height: "240px",
    width: "300px",
    border: "solid 2px grey",
  }
  let topBg = {
    backgroundColor: "#2295e1",
    height: "60%",
    position: "relative"

  }
  let profileInfo = {
    borderTop: "solid 2px grey",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
  return (
    <div style={profileWrapper}>
      <div style={topBg}>
        <ProfilePhoto/>
      </div>
      <div style={profileInfo}>
        <ProfileName/>
        <ProfileLinks/>
      </div>
    </div>
  );
}

export default Profile;
