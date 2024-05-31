import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SideNav from "../Components/Drawer/Drawer";
import AuthRoutes from "./Authroutes";

export default function AllRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignInRoute = useMemo(() => {
    return (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password"
    );
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      if (document.cookie.includes("token=")) {
        navigate("/dashboard");
      } else {
        navigate("/signin");
      }
    }
  }, [navigate, location]);

  return isSignInRoute ? <AuthRoutes /> : <SideNav />;
}
