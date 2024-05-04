import { Switch } from "antd";
import logoutIcon from "../../assets/images/logout-icon.svg";
import deleteicon from "../../assets/images/delete.svg";
import rightArrow from "../../assets/images/red-right-arrow.svg";
import * as Styled from "./settings.styled.js";
import {LogoutOutlined} from "@ant-design/icons"  
import {RightOutlined } from "@ant-design/icons"  


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
               <RightOutlined />
               {/* <Switch checked /> */}
            </Styled.CustomSettingBox>
            <Styled.CustomSettingBox>
               <Styled.SettingsBoxP>
                  Sign out{" "}
               </Styled.SettingsBoxP>
               <LogoutOutlined />
            </Styled.CustomSettingBox>
            <Styled.CustomLink to="/settings/account-deletion">
               <Styled.deletebtn >
                  Delete Account{" "}
               </Styled.deletebtn>
               <img src={deleteicon} alt="." style={{ display: "block", width:"18px",opacity:"0.7" }} />
            </Styled.CustomLink>
         </div>
      </Styled.SettingsBox>
   );
};

export default AccountDeactivation;
