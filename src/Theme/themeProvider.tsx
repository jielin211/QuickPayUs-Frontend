import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment-timezone";

// antd
import { ConfigProvider, theme } from "antd";

// redux
import { selectSetting } from "../Redux/selectors";
import { updateSettingField } from "../Redux/settingSlice";

// constants
import { lightTheme, darkTheme } from "../Utils/constants";

// services
import api from "../services/ApiServices";

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();

  const setting = useSelector(selectSetting);

  useEffect(() => {
    if (setting.themeMode === "auto") {
      api.get("http://worldtimeapi.org/api/ip").then((response) => {
        const hour = moment(response.datetime).tz(response.timezone).hours();
        if (hour > 6 && hour < 18) {
          dispatch(updateSettingField({ field: "themeMode", value: "light" }));
        } else {
          dispatch(updateSettingField({ field: "themeMode", value: "dark" }));
        }
      });
    }
  }, [setting]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          setting.themeMode === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: setting.themeMode === "dark" ? darkTheme : lightTheme,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
