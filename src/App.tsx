import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

// antd
import { theme } from "antd";

// redux
import { updateSettingField } from "./Redux/settingSlice";

// routes
import AppRoutes from "./AppRoutes";

// styles
import "./App.css";
import "react-international-phone/style.css";

const { useToken } = theme;

function App() {
  const dispatch = useDispatch();

  const { token } = useToken();

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
    <Router>
      <div
        style={{
          "--color-bg-layout": token.colorBgLayout,
          "--color-bg-container": token.colorBgContainer,
          "--color-bg-list-item-actived": token.colorBgListItemActived,
          "--color-text": token.colorText,
          "--color-border-primary": token.colorBorderPrimary,
          "--border-radius-input": "12px",
          "--border-radius-button": "12px",
          "--border-radius-container": "18px",
        }}
      >
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
