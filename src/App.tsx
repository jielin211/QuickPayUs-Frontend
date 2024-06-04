import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux
import { selectSetting } from "./Redux/selectors";
import { updateSettingField } from "./Redux/settingSlice";

// routes
import AppRoutes from "./AppRoutes";

// styles
import "./App.css";
import "react-international-phone/style.css";

function App() {
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
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
