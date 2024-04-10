import AccountDeactivation from "./AccountDeactivation";
import GeneralSettings from "./GeneralSettings";
import LanguageAndRegionSettings from "./LanguageAndRegionSettings";
import NotificationSettings from "./NotificationSettings";
import * as Styled from "./settings.styled.jsx"; 

const Settings = () => {
   return (
      <div>
         <Styled.SettingsH1>
            Settings
         </Styled.SettingsH1>

         <GeneralSettings />
         <NotificationSettings />
         <LanguageAndRegionSettings />
         <AccountDeactivation />
      </div>
   );
};

export default Settings;
