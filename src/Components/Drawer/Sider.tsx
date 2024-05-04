import { useState, useEffect } from "react";
import { Menu, Collapse, Layout } from "antd";  
import { Link, useLocation } from "react-router-dom";
import hollowdashboard from "../../assets/images/dashboard-icon.svg";
import filleddashboard from "../../assets/images/filledDashboard.svg";
import hollowchart from "../../assets/images/chart.svg";
import filledchart from "../../assets/images/chart-1.svg";
import hollowdeposit from "../../assets/images/deposit-icon.svg";
import filleddeposit from "../../assets/images/wallet-add-1.svg";
import withdrawal from "../../assets/images/withdrawal-icon.svg";
import referral from "../../assets/images/referrals-icons.svg";
import rank from "../../assets/images/rank-icon.svg";
// import support from "../../assets/images/support-icon.svg";
import { useDevice } from "../../Utils/Hooks/useDevice";

import styled from "styled-components";
import SiderMenuItem from "./SiderMenuItem";

const { Panel } = Collapse; 
const { Sider: UiSider } = Layout;

const UiSiderCustom = styled(UiSider)`     
  padding: 10px 15px;
  position: fixed !important;
  top: 44px; 
  left: 0px;
  width: 25% !important;
  line-height: 120px; 
  min-height: 100vh;
  color: #fff;   
  background: #fff !important;  
  border-right: 1px solid #dfdfdf !important;   
  overflow: hidden;  
  @media (max-width: 575px) {   
      border-right: 0 !important;
  }
`;

const MenuCustom = styled(Menu)`
  border-inline-end: 0 !important;
`;

export const Sider: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();
  const device = useDevice();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const items = [ 
    {
      key: "1",
      label: <a href="/profile">My Profile</a>,
    },
    {
      key: "2",
      label: <a href="/settings">Settings</a>,
    },
  ];

  useEffect(() => {
    // Listen for route changes and update selectedOption accordingly
    const pathname = location.pathname;
    if (pathname.includes("/dashboard")) {
      setSelectedOption("dashboard");
    } else if (pathname.includes("/referrals")) {
      setSelectedOption("referrals");
    } else if (pathname.includes("/transaction")) {
      setSelectedOption("transaction");
    } else if (pathname.includes("/support")) {
      setSelectedOption("support");
    } else if (pathname.includes("/share")) {
      setSelectedOption("share");
    } else if (pathname.includes("/withdrawal")) {
      setSelectedOption("withdrawal");
    } else if (pathname.includes("/deposit")) {
      setSelectedOption("deposit");
    } else if (pathname.includes("/announcements")) {
      setSelectedOption("announcements");
    } else if (pathname.includes("/settings")) {
      setSelectedOption("settings");
    } else if (pathname.includes("/rank")) {
      setSelectedOption("rank");
    }
  }, [location.pathname]);

  useEffect(() => {
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  return (  
    <>
      <UiSiderCustom theme="light"  width={!device?.isBreakpoint("MD") ? "0" : "250"}>
        <div className="logo" />
        <MenuCustom theme="light" mode="inline" defaultSelectedKeys={["dashboard"]} selectedKeys={[selectedOption]}>
          <SiderMenuItem icon={selectedOption == 'dashboard' ?  filleddashboard:hollowdashboard} selectedOption={selectedOption} keyValue="dashboard" label="Dashboard"/>
          <SiderMenuItem icon={selectedOption == 'transaction' ?  filledchart:hollowchart} selectedOption={selectedOption} keyValue="transaction" label="Transactions"/>
          <SiderMenuItem icon={selectedOption == 'deposit' ?  filleddeposit:hollowdeposit} selectedOption={selectedOption} keyValue="deposit" label="Deposit"/>
          <SiderMenuItem icon={withdrawal} selectedOption={selectedOption} keyValue="withdrawal" label="Withdraw"/>
          <SiderMenuItem icon={referral} selectedOption={selectedOption} keyValue="referrals" label="Referrals"/>
          <SiderMenuItem icon={rank} selectedOption={selectedOption} keyValue="rank" label="Rank"/>
          {/* <SiderMenuItem icon={support} selectedOption={selectedOption} keyValue="announcements" label="Announcements"/> */}
        </MenuCustom>
        
      </UiSiderCustom>
    </>
  );
};
