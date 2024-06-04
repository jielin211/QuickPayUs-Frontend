import { useSelector } from "react-redux";

// antd
import { ConfigProvider, theme } from "antd";

// redux
import { selectSetting } from "../Redux/selectors";

// constants
import { lightTheme, darkTheme } from "../Utils/constants";

const ThemeProvider = ({ children }) => {
  const setting = useSelector(selectSetting);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          setting.themeMode === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: setting.themeMode === "light" ? lightTheme : darkTheme,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
