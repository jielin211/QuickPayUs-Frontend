import { Route, Routes } from "react-router-dom";
import SignIn from "../Components/Auth/SignIn";
import SignupForm from "../Components/Auth/Signup";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignupForm />} />
      </Routes>
   );
};

export default AppRoutes;
