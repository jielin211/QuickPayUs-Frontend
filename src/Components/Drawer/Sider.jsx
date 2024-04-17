import { useState, useEffect } from "react";
import { Menu, Collapse } from "antd";
import { Link, useLocation } from "react-router-dom";
import dashboard from "../../assets/images/dashboard-icon.svg";
import statements from "../../assets/images/statements-icon.svg";
import deposit from "../../assets/images/deposit-icon.svg";
import withdrawal from "../../assets/images/withdrawal-icon.svg";
import referral from "../../assets/images/referrals-icons.svg";
import rank from "../../assets/images/rank-icon.svg";
import support from "../../assets/images/support-icon.svg";
import { useDevice } from "../../Utils/Hooks/useDevice";

import styled from "styled-components";

const { Panel } = Collapse;
import { Layout } from "antd";

const { Sider: UiSider } = Layout;

const UiSiderCustom = styled(UiSider)`     
  padding-top: 16px;
  position: fixed !important;
  top: 44px; 
  left: 0;
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
`

export const Sider = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
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
    const pathname = location.pathname;
    const pathToOptionMap = {
      "/dashboard": "dashboard",
      "/referrals": "referrals",
      "/transaction": "transaction",
      "/support": "support",
      "/share": "share",
      "/withdrawal": "withdraw",
      "/deposit": "deposit",
      "/announcements": "announcements",
      "/settings": "settings",
      "/rank": "rank",
    };
    const defaultOption = "dashboard";

    setSelectedOption(pathToOptionMap[pathname] || defaultOption);
  }, [location.pathname])

  useEffect(() => {
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);
  const menuItems = [
    { key: "dashboard", icon: dashboard, text: "Dashboard", link: "/dashboard" },
    { key: "transaction", icon: statements, text: "Transactions", link: "/transaction" },
    { key: "deposit", icon: deposit, text: "Deposit", link: "/deposit" },
    { key: "withdrawal", icon: withdrawal, text: "Withdrawal", link: "/withdrawal" },
    { key: "referrals", icon: referral, text: "Referrals", link: "/referrals" },
    { key: "rank", icon: rank, text: "Rank", link: "/rank" },
    { key: "support", icon: support, text: "Support", link: "/support" },
    { key: "share", icon: referral, text: "Refer a friend", link: "/share" },
    { key: "announcement", icon: support, text: "Announcements", link: "/announcements" },
  ];
  const MenuItem = ({ item, selectedOption }) => (
    <Link to={item.link}>
      <Menu.Item
        key={item.key}
        icon={<img src={item.icon} style={{ width: "14px", textAlign: "center" }} />}
        style={{
          color: selectedOption === item.key ? "red" : "black",
          width: "100%",
          paddingLeft: "30px",
          fontSize: "14px",
        }}
      >
        <span
          className="links"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {item.text}
        </span>
      </Menu.Item>
    </Link>
  );


  return (
    <>
      <UiSiderCustom
        theme="light"
        width={!device?.isBreakpoint("MD") ? "0" : "250"}
      >
        <div className="logo" />
        <MenuCustom
          theme="light"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          selectedKeys={[selectedOption]}
          width={200}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.key} item={item} selectedOption={selectedOption} />
          ))}

        </MenuCustom>

      </UiSiderCustom>
    </>
  );
};
