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
                  Deactivate Account
               </Styled.SettingsBoxP>
               <Switch />
            </div>
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
                  Sign out{" "}
               </Styled.SettingsBoxP>
               <img src={logoutIcon} alt="." style={{ display: "block" }} />
            </div>
         </div>
      </Styled.SettingsBox>
   );
};

export default AccountDeactivation;
