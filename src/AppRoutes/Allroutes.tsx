import { useLocation } from "react-router-dom";

import SideNav from "../Components/Drawer/Drawer";
import AppRoutes from "./Authroutes";

export default function AllRoutes() {
    const location = useLocation();

    const isSignInRoute = location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/forgot-password";

    return isSignInRoute ? <AppRoutes/> : <SideNav/>
}