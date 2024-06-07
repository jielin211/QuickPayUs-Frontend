import AccountDeactivation from "./AccountDeactivation";
import GeneralSettings from "./GeneralSettings";

import * as Styled from "./settings.styled.js";

const Settings = () => {
  return (
    <div
      style={{
        // backgroundColor: "#f4f4f4",
        height: "100%",
        marginTop: "-15px",
      }}
    >
      <Styled.SettingsH1>Settings</Styled.SettingsH1>

      <GeneralSettings />
      <AccountDeactivation />
    </div>
  );
};

export default Settings;
