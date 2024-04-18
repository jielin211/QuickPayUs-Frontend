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
    } else if (pathname.includes("/withdraw")) {
      setSelectedOption("withdraw");
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
          <Link to="/dashboard">
            <Menu.Item
              key="dashboard"
              icon={
                <img
                  src={dashboard}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "dashboard" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span className="links">Dashboard</span>
            </Menu.Item>
          </Link>
          <Link to="/transaction">
            <Menu.Item
              key="transaction"
              icon={
                <img
                  src={statements}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "transaction" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Transactions
              </span>
            </Menu.Item>
          </Link>
          <Link to="/deposit">
            <Menu.Item
              key="deposit"
              icon={
                <img
                  src={deposit}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "deposit" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span className="links">Deposit</span>
            </Menu.Item>
          </Link>
          <Link to="/withdraw">
            <Menu.Item
              key="withdraw"
              icon={
                <img
                  src={withdrawal}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "withdraw" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Withdraw
              </span>
            </Menu.Item>
          </Link>
          <Link to="/referrals">
            <Menu.Item
              key="referrals"
              icon={
                <img
                  src={referral}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "referrals" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Referrals
              </span>
            </Menu.Item>
          </Link>
          <Link to="/rank">
            <Menu.Item
              key="rank"
              icon={
                <img
                  src={rank}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "rank" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Rank
              </span>
            </Menu.Item>
          </Link>
          {/* <Link to="/support">
            <Menu.Item
              key="support"
              icon={
                <img
                  src={support}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "support" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Support
              </span>
            </Menu.Item>
          </Link> */}
          <Link to="/share">
            <Menu.Item
              key="share"
              icon={
                <img
                  src={referral}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "share" ? "red" : "black",
                width: "100%",
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Refer a friend
              </span>
            </Menu.Item>
          </Link>
          <Link to="/announcements">
            <Menu.Item
              key="announcement"
              icon={
                <img
                  src={support}
                  style={{
                    width: !device?.isBreakpoint("MD") ? "22px" : "14px",
                    textAlign: "center",
                  }}
                />
              }
              style={{
                color: selectedOption === "announcements" ? "red" : "black",
                width: "100%", 
                paddingLeft: "30px",
                fontSize: "13px",
              }}
            >
              <span
                className="links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Announcements
              </span>
            </Menu.Item>
          </Link>
        </MenuCustom>
        
      </UiSiderCustom>
    </>
  );
};
