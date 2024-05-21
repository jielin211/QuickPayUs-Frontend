import { BrowserRouter as Router } from "react-router-dom";
import "react-international-phone/style.css";
import { Button, ConfigProvider, Input, Space, theme } from "antd";

import Allroutes from "./AppRoutes/Allroutes";

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Allroutes />
      </Router>
    </ConfigProvider>
  );
}

export default App;
