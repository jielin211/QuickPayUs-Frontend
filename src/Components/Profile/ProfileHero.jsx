import profilePic from "../../assets/images/profile-pic.png";
import editIcon from "../../assets/images/edit-icon.svg";
import locationIcon from "../../assets/images/location-icon.svg";

const ProfileHero = () => {
   return (
      <>
         <div
            style={{ 
               height: "185px",
               background: "url(/images/profile-bg.png)",
            }}
         ></div>

         <div
            style={{
               maxHeight: "120px",
               padding: "20px 34px 34px 46px",
               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <div style={{ display: "flex", gap: "26px" }}>
               <img
                  src={profilePic}
                  alt="user"
                  style={{
                     display: "block",
                     borderRadius: "6px",
                     width: "170px",
                     height: "170px",
                     marginTop: "-105px",
                  }}
               />
               <div>
                  <h1
                     style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        margin: "0",
                        display: "flex",
                        alignItems: "center",
                        gap: "25px",
                     }}
                  >
                     Christine Joseph
                     <img
                        src={editIcon}
                        alt="e"
                        style={{ cursor: "pointer" }}
                     />
                  </h1>
                  <p
                     style={{
                        margin: "0",
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                     }}
                  >
                     <img src={locationIcon} alt="e" />
                     Paris, France.
                  </p>
               </div>
            </div>
            <div>
               <h3
                  style={{
                     margin: "0",
                     fontSize: "24px",
                     fontWeight: "bold",
                     color: "#DF0B0B",
                  }}
               >
                  Lvl. 2
               </h3>
            </div>
         </div>
      </>
   );
};

export default ProfileHero;
