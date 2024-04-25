import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/red-right-arrow.svg";
import { Switch } from "antd";
import * as Styled from "./settings.styled.js"; 

const GeneralSettings = () => {
   return (
      <Styled.SettingsBox>
         <Styled.SettingsBoxH2>
            General Settings
         </Styled.SettingsBoxH2>
         <div>
            <Link
               to="/change-password"
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
                  
               }}
            >
               <Styled.SettingsBoxP>
                  Change Password
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Link>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
               }}
            >
               <Styled.SettingsBoxP>
                  Allow notifications on E-mail provided
               </Styled.SettingsBoxP>
               <Switch defaultChecked />
            </div>
            <Link
               to={"/"}
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
               }}
            >
               <Styled.SettingsBoxP>
                  Change Name
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Link>
            <Link
               to="/change-password"
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
               }}
            >
               <Styled.SettingsBoxP>
                  Change Email
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Link>
         </div>
      </Styled.SettingsBox>
   );
};

export default GeneralSettings;
