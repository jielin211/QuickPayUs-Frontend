import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "antd";
import UserDashboard from "../Dashboard/UserDashboard";
import Settings from "../Settings/Settings";
import Support from "../Support/Support";
import Rank from "../Rank/Rank";
import Deposit from "../Deposit/Deposit";
import Withdrawal from "../Withdrawal/Withdrawal";
import ShareWithFriend from "../ShareLink/Sharelink";
import ChangePassword from "../Auth/Changepassword"; 
import { Notifications } from "../Notifications";
import Profile from "../Profile/Profile"; 
import { Announcements } from "../Announcements";
import Banner from "../Banner/Banner";
import TransactionsList from "../TransactionsList/TransactionsList";
import ReferralsList from "../ReferralsList/ReferralsList";
import { useDevice } from "../../Utils/Hooks/useDevice";
import { Sider } from "./Sider";
import { KycVerification } from "../KycVerification";
import CustomTicket from "../Support/CustomTicket";
import FAQ from "../Support/FAQ";
import ContactInfo from "../Support/Contact";
import DeleteAccount from '../DeleteAccount/Password'

const { Content } = Layout; 

const App = () => {
  const location = useLocation();
  const device = useDevice();
  const isSignInRoute =
    location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/forgot-password";

  const contentStyle = {
    marginLeft: device?.isBreakpoint("MD") ? "250px" : "0px",
    backgroundColor: "#F5F5F7",
    minHeight: "100vh",
  }; 
  const layoutStyle = {
    // borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  };

  return (
    <>
      {!isSignInRoute && (
        <Layout style={layoutStyle}>
          <Banner />
          <Layout>
            <Sider />
            <Content style={contentStyle}>
              <Routes> 
                <Route path="/" element={<UserDashboard />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/referrals" element={<ReferralsList />} />
                <Route path="/transaction" element={<TransactionsList />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/support" element={<Support />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdrawal" element={<Withdrawal />} />
                <Route path="/share" element={<ShareWithFriend />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/verification" element={<KycVerification />} />
                <Route path="/support/ticket" element={<CustomTicket/>} />
                <Route path="/support/faq" element={<FAQ/>} />
                <Route path="/support/contact" element={<ContactInfo/>} />
                <Route path="/settings/account-deletion" element={<DeleteAccount/>} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default App;
