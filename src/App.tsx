// import Sidenav from "./Components/Drawer/Drawer";
// import AppRoutes from "./AppRoutes/Authroutes";
import { BrowserRouter as Router } from "react-router-dom";
import "react-international-phone/style.css";

import Allroutes from "./AppRoutes/Allroutes";

function App() {

  return (
    <Router>
      <Allroutes/>
    </Router>
  );
}

export default App;
