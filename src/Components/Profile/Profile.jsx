import React, { useState } from "react";
import { Skeleton } from "antd";
import KYCVerification from "./KYCVerification";
import ProfileAbout from "./ProfileAbout";
import ProfileHero from "./ProfileHero";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after a delay
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {/* Display skeletons while loading */}
      {isLoading ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : (
        <>
           {/* <ProfileHero />  */}
          <ProfileAbout />
          <KYCVerification />
        </>
      )}
    </>
  );
};

export default Profile;
