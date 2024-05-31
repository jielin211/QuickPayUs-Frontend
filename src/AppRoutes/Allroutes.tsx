import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SideNav from "../Components/Drawer/Drawer";
import AppRoutes from "./Authroutes";

export default function AllRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      if (document.cookie.includes("token=")) {
        navigate("/dashboard");
      } else {
        navigate("/signin");
      }
    }
  }, [navigate, location]);

  const isSignInRoute = location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/forgot-password";

  return isSignInRoute ? <AppRoutes /> : <SideNav />;
}
