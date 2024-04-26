import { Switch } from "antd";
import logoutIcon from "../../assets/images/logout-icon.svg";
import * as Styled from "./settings.styled.js"; 

const AccountDeactivation = () => {
   return (
      <Styled.SettingsBox>
         <Styled.SettingsBoxH2>
            Account Deactivation
         </Styled.SettingsBoxH2>
         <div>
            <Styled.CustomSettingBox>
               <Styled.SettingsBoxP>
                  Deactivate Account
               </Styled.SettingsBoxP>
               <Switch />
            </Styled.CustomSettingBox>
            <Styled.CustomSettingBox>
               <Styled.SettingsBoxP>
                  Sign out{" "}
               </Styled.SettingsBoxP>
               <img src={logoutIcon} alt="." style={{ display: "block" }} />
            </Styled.CustomSettingBox>
         </div>
      </Styled.SettingsBox>
   );
};

export default AccountDeactivation;
