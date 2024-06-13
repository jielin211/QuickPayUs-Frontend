import { Route, Routes, useLocation } from "react-router-dom";
import { Layout, theme } from "antd";

// hooks
import { useDevice } from "../../Utils/Hooks/useDevice";

// components
import UserDashboard from "../Dashboard/UserDashboard";
import Settings from "../Settings/Settings";
import Support from "../Support/Support";
import Rank from "../Rank/Rank";
import Deposit from "../Deposit/Deposit";
import Withdrawal from "../Withdraw";
import ChangePassword from "../Auth/Changepassword";
import { Notifications } from "../Notifications";
import Profile from "../Profile/Profile";
import { Announcements } from "../Announcements";
import Banner from "../Banner/Banner";
import TransactionsList from "../TransactionsList/TransactionsList";
import ReferralsList from "../ReferralsList/ReferralsList";
import { Sider } from "./Sider";
import { KycVerification } from "../KycVerification";
import CustomTicket from "../Support/CustomTicket";
import Feedback from "../Support/Feedback";
import DeleteAccount from "../DeleteAccount/Password";
import ChangeName from "../Settings/ChangeName";
import ChangeEmail from "../Settings/ChangeEmail";
import DeactivateAccount from "../Settings/DeactivateAccount";
import SignIn from "..//Auth/SignIn";
import SignupForm from "..//Auth/Signup";
import ForgotPassword from "..//Auth/ForgotPassword";

const { Content } = Layout;
const { useToken } = theme;

const App = () => {
  const location = useLocation();
  const device = useDevice();

  const isSignInRoute =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  const contentStyle = {
    marginLeft: device?.isBreakpoint("MD") && !isSignInRoute ? "250px" : "0px",
    minHeight: "calc(100vh - 44px)",
    marginTop: "44px",
    padding: "var(--padding-content)",
  };
  const layoutStyle = {
    // borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  };

  return (
    <>
      <Layout style={layoutStyle}>
        <Banner />
        <Layout
          style={{
            transition: "background 0.5s",
          }}
        >
          {!isSignInRoute && <Sider />}
          <Content style={contentStyle}>
            <Routes>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/referrals" element={<ReferralsList />} />
              <Route path="/transaction" element={<TransactionsList />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/change-name" element={<ChangeName />} />
              <Route path="/settings/change-email" element={<ChangeEmail />} />
              <Route
                path="/settings/deactivate-account"
                element={<DeactivateAccount />}
              />
              <Route path="/support" element={<Support />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/verification" element={<KycVerification />} />
              <Route path="/support/ticket" element={<CustomTicket />} />
              <Route path="/support/feedback" element={<Feedback />} />
              <Route
                path="/settings/account-deletion"
                element={<DeleteAccount />}
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
