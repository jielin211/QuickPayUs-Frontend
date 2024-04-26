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
            <Styled.CustomLink to="/change-password">
               <Styled.SettingsBoxP>
                  Change Password
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Styled.CustomLink>
            <Styled.CustomSettingBox>
               <Styled.SettingsBoxP>
                  Allow notifications on E-mail provided
               </Styled.SettingsBoxP>
               <Switch defaultChecked />
            </Styled.CustomSettingBox>
            <Styled.CustomLink to="/setting">
               <Styled.SettingsBoxP>
                  Change Name
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Styled.CustomLink>
            <Styled.CustomLink to="">
               <Styled.SettingsBoxP>
                  Change Email
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Styled.CustomLink>
         </div>
      </Styled.SettingsBox>
   );
};

export default GeneralSettings;
