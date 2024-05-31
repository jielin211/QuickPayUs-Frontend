import { BrowserRouter as Router } from "react-router-dom";
import "react-international-phone/style.css";
import { Button, ConfigProvider, Input, Space, theme } from "antd";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ConfigProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}

export default App;
