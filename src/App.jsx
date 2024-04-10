import Sidenav from "./Components/Drawer/Drawer";
import AppRoutes from "./AppRoutes/Authroutes";
import { BrowserRouter as Router } from "react-router-dom";
import "react-international-phone/style.css";

function App() {
  return (
    <Router>
      <Sidenav />
      <AppRoutes />
    </Router>
  );
}

export default App;
