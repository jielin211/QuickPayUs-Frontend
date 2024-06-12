import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";

// antd
import { theme } from "antd";

// hooks
import usePreventZoomOnFocus from "./Utils/Hooks/usePreventZoomOnFocus";

// redux
import { updateSettingField } from "./Redux/settingSlice";

// routes
import AppRoutes from "./AppRoutes";

// styles
import "./App.css";
import "react-international-phone/style.css";

const { useToken } = theme;

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    body {
      --color-bg-layout: ${theme.colorBgLayout};
      --color-bg-container: ${theme.colorBgContainer};
      --color-bg-list-item-actived: ${theme.colorBgListItemActived};
      --color-border-primary: ${theme.colorBorderPrimary};
      --border-radius-input: ${theme.borderRadiusInput};
      --border-radius-button: ${theme.borderRadiusButton};
      --border-radius-container: ${theme.borderRadiusContainer};
      --padding-content: ${theme.paddingContent};
      --padding-container: ${theme.paddingContainer};
      --color-text: ${theme.colorText};
      --font-size-page-title: ${theme.fontSizePageTitle};
      --font-weight-page-title: ${theme.fontWeightPageTitle};
      --margin-bottom-page-title: ${theme.marginBottomPageTitle};
    }
    input, select, textarea {
      font-size: 16px !important;
    }`}
`;

function App() {
  const dispatch = useDispatch();

  const { token } = useToken();

  usePreventZoomOnFocus();

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
      <GlobalStyle
        theme={{
          colorBgLayout: token.colorBgLayout,
          colorBgContainer: token.colorBgContainer,
          colorBgListItemActived: token.colorBgListItemActived,
          colorText: token.colorText,
          colorBorderPrimary: token.colorBorderPrimary,
          borderRadiusInput: "12px",
          borderRadiusButton: "12px",
          borderRadiusContainer: "18px",
          paddingContent: "25px",
          paddingContainer: "24px",
          fontSizePageTitle: "20px",
          fontWeightPageTitle: "600",
          marginBottomPageTitle: "20px",
        }}
      />
      <AppRoutes />
    </Router>
  );
}

export default App;
