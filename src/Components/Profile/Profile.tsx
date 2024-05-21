import React, { useState } from "react";
import { Skeleton } from "antd";
import KYCVerification from "./KYCVerification";
import ProfileAbout from "./ProfileAbout";
import ProfileHero from "./ProfileHero";

const Profile = () => {
  return (
    <>
      <div style={{ background: "#f4f4f4", height: "100%" }}>
        <ProfileAbout />
        <KYCVerification />
      </div>
    </>
  );
};

export default Profile;
