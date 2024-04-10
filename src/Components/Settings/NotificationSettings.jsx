import { Switch } from "antd";
import * as Styled from "./settings.styled.jsx"; 

const NotificationSettings = () => {
   return (
      <Styled.SettingsBox>
         <Styled.SettingsBoxH2>
            Notification Settings
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
                  Alert notifications
               </Styled.SettingsBoxP>
               <Switch defaultChecked />
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
                  Allow notifications of important events on E-mail provided
               </Styled.SettingsBoxP>
               <Switch />
            </div>
         </div>
      </Styled.SettingsBox>
   );
};

export default NotificationSettings;
