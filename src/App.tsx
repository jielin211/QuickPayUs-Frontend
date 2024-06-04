import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// antd
import { ConfigProvider, theme } from "antd";

// redux
import { selectSetting } from "./Redux/selectors";
import { updateSettingField } from "./Redux/settingSlice";

// routes
import AppRoutes from "./AppRoutes";

// constants
import { lightTheme, darkTheme } from "./Utils/constants";

// styles
import "./App.css";
import "react-international-phone/style.css";

function App() {
  const setting = useSelector(selectSetting);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeMode = localStorage.getItem("themeMode");
    dispatch(
      updateSettingField({
        field: "themeMode",
        value: themeMode ? themeMode : "light",
      })
    );
  }, []);

  return (
    <ConfigProvider
      theme={
        setting.themeMode === "light"
          ? {
              algorithm: theme.defaultAlgorithm,
              token: lightTheme,
            }
          : {
              algorithm: theme.darkAlgorithm,
              token: darkTheme,
            }
      }
    >
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}

export default App;
