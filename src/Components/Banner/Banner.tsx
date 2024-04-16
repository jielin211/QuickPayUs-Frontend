import { useEffect, useState, useRef } from "react";
import CopyToClipboard from 'react-copy-to-clipboard';
import { Badge, Menu, QRCode, Popover } from "antd";
import { useDevice } from "../../Utils/Hooks/useDevice";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { CheckOutlined, QrcodeOutlined, CopyOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useGetUnreadNotificationsCountQuery } from "../../Redux/slice";
import * as Styled from "./Banner.styled";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const Banner = () => {

  const [collapsed, setCollapsed] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (event.target.parentNode.id === "avatarMenu") {
        return
      }
      setCollapsed(false); // Collapse the menu
    }

    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      if (event.target.parentNode.parentNode.id === "mobileAvatarMenu") {
        return
      }
      setCollapsed(false); // Collapse the menu
    }
  };

  useEffect(() => {
    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    toggleCollapsed();
  }

  const [selectedKey, setSelectedKey] = useState(""); // Track selected option key

  const handleClick = (key) => {
    if (key === "dark" || key === "light" || key === "auto")
      setSelectedKey(key);
  };

  const menuItems = [
    getItem(<a href="/profile">Account</a>, '1', null, null, null),
    getItem(<a href="/settings">Settings</a>, '2', null, null, null),
    getItem(<a href="/support">Support</a>, '3', null, null, null),
    getItem('Mode', 'sub2', null, [
      getItem(selectedKey === "dark" ? <Styled.ModeItem><span>Dark</span><CheckOutlined /></Styled.ModeItem> : <Styled.ModeItem>Dark</Styled.ModeItem>, 'dark', null, null, null),
      getItem(selectedKey === "light" ? <Styled.ModeItem><span>Light</span><CheckOutlined /></Styled.ModeItem> : <Styled.ModeItem>Light</Styled.ModeItem>, 'light', null, null, null),
      getItem(selectedKey === "auto" ? <Styled.ModeItem><span>Auto</span><CheckOutlined /></Styled.ModeItem> : <Styled.ModeItem>Auto</Styled.ModeItem>, 'auto', null, null, null),
    ], null),
    {
      type: 'divider',
      key: "10"
    },
    getItem(<a href="/signin">Sign Out</a>, '4', null, null, null),
  ];

  const userMenu = <Menu
    onClick={(e) => handleClick(e.key)}
    selectedKeys={[selectedKey]}
    style={{
      width: 130,
      position: "absolute",
      top: "27px",
      left: "12px",
      boxShadow: "2px 4px 12px #00000014"
    }}
    defaultSelectedKeys={[]}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={menuItems}
  />

  const mobileUserMenu = <Menu
    onClick={(e) => handleClick(e.key)}
    style={{
      width: 120,
      position: "fixed",
      top: "40px",
      right: "6px",
      boxShadow: "2px 4px 12px #00000014"
    }}
    defaultSelectedKeys={[]}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={menuItems}
  />

  const device = useDevice();
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const handleNavigation = () => {
    setOpenCloseNav(!openCloseNav);
  };

  const [counter, setCounter] = useState(0);
  const {
    data: notifications,
    isError,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetUnreadNotificationsCountQuery(null);

  useEffect(() => {
    if (isFetching || isLoading) {
      return;
    }
    if (isError) {
      return;
    }

    if (isSuccess) {
      setCounter(notifications?.total);
    }
  }, [isError, isFetching, isLoading, isSuccess, notifications]);

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <Styled.StyledHeader className="header">
      {device?.isBreakpoint("MD") && (
        <Styled.HeaderContainer>
          <Styled.PcLogoWrapper>
            <Styled.PcLogo src={logo} alt="QUICKPAYUS" />
          </Styled.PcLogoWrapper>
          <Styled.CtaContainer>

            <Popover
              overlayInnerStyle={{
                padding: 0,
                transform: "translateY(-15px)"
              }}
              content={
                <>
                  <div>
                    <p style={{
                      padding: "10px 0px 0px 0px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}>Referral code</p>
                    <QRCode value="https://quickpayus.com/username" style={{
                      marginTop: "0px"
                    }} />
                    <div className="d-flex">
                      <CopyToClipboard text="https://quickpayus.com/username" onCopy={onCopy}>
                        <button style={{
                          border: "none",
                          background: "#fff",
                          cursor: "pointer",
                          color: "#f00000"
                        }}>{copied ? 'Copied!' : 'Copy'} <CopyOutlined /> </button>
                      </CopyToClipboard>
                      <button style={{
                        border: "none",
                        background: "#fff",
                        cursor: "pointer",
                        color: "#f00000"
                      }}>Share <ShareAltOutlined /></button>
                    </div>
                  </div>
                </>
              }
            >
              <QrcodeOutlined style={{
                cursor: "pointer"
              }} />
            </Popover>

            <Link to="/notifications">
              <Styled.BellWrapper>
                <Badge count={counter}>
                  <Styled.BellOutlinedNew />
                </Badge>
              </Styled.BellWrapper>
            </Link>
            <div>
              <a onClick={(e) => handleToggle(e)} >
                <Styled.AvatarWrapper>
                  <Styled.StyledAvatar>U</Styled.StyledAvatar>
                  <Styled.AvatarInfo id="avatarMenu">
                    <Styled.AvatarInfoP1>Username</Styled.AvatarInfoP1>
                    <Styled.AvatarInfoP2>Level 1</Styled.AvatarInfoP2>
                  </Styled.AvatarInfo>
                </Styled.AvatarWrapper>
              </a>
            </div>
            {!collapsed ? <div ref={menuRef} style={{ position: "absolute" }} className="fade-out">{userMenu}</div> : <div ref={menuRef} style={{ position: "absolute" }} className="fade-in">{userMenu}</div>}
          </Styled.CtaContainer>

        </Styled.HeaderContainer>
      )}
      {!device?.isBreakpoint("MD") && (
        <div
          className={`nav-container container-xxl ${openCloseNav ? "active menu-opened" : ""
            }`}
        >
          <nav>
            <ul className="mobile-nav ps-0">
              <li>
                <div
                  className="menu-icon-container"
                  onClick={() => handleNavigation()}
                >
                  <div className="menu-icon">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/" className="link-logo">
                  <Styled.PcLogoWrapper>
                    <Styled.MobileLogo src={logo} alt="QUICKPAYUS" />
                  </Styled.PcLogoWrapper>
                </Link>
              </li>
              <li style={{ position: "absolute", right: "80px" }}>
                <Popover
                  overlayInnerStyle={{
                    padding: 0,
                    transform: "translateY(-15px)"
                  }}
                  content={
                    <>
                      <div>
                        <p style={{
                          padding: "10px 0px 0px 0px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "600"
                        }}>Referral code</p>
                        <QRCode value="https://quickpayus.com/username" style={{
                          marginTop: "0px"
                        }} />
                        <div className="d-flex">
                          <CopyToClipboard text="https://quickpayus.com/username" onCopy={onCopy}>
                            <button style={{
                              border: "none",
                              background: "#fff",
                              cursor: "pointer",
                              color: "#f00000"
                            }}>{copied ? 'Copied!' : 'Copy'} <CopyOutlined /> </button>
                          </CopyToClipboard>
                          <button style={{
                            border: "none",
                            background: "#fff",
                            cursor: "pointer",
                            color: "#f00000"
                          }}>Share <ShareAltOutlined /></button>
                        </div>
                      </div>
                    </>
                  }
                >
                  <QrcodeOutlined style={{
                    cursor: "pointer"
                  }} />
                </Popover>
              </li>

              <li>
                <Link to="/notifications">
                  <Styled.MobileBellWrapper>
                    <Badge count={counter}>
                      <Styled.BellOutlinedNew />
                    </Badge>
                  </Styled.MobileBellWrapper>
                </Link>
              </li>
              <li>
                <a onClick={(e) => handleToggle(e)}>
                  <Styled.AvatarWrapper id="mobileAvatarMenu">
                    <Styled.StyledAvatar>U</Styled.StyledAvatar>
                  </Styled.AvatarWrapper>
                </a>
              </li>
              {!collapsed ? <div ref={mobileMenuRef} style={{ position: "absolute" }} className="fade-out">{mobileUserMenu}</div> : <div ref={mobileMenuRef} style={{ position: "absolute" }} className="fade-in">{mobileUserMenu}</div>}
            </ul>

            <ul className="desktop-nav ps-0">
              <li>
                <Link to="/#" className="link-logo" onClick={() => setOpenCloseNav(false)}></Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => setOpenCloseNav(false)}>Dashboard</Link>
              </li>
              <li>
                <Link to="/transaction" onClick={() => setOpenCloseNav(false)}>Transactions</Link>
              </li>
              <li>
                <Link to="/deposit" onClick={() => setOpenCloseNav(false)}>Deposit</Link>
              </li>
              <li>
                <Link to="/withdrawal" onClick={() => setOpenCloseNav(false)}>Withdrawal</Link>
              </li>
              <li>
                <Link to="/referrals" onClick={() => setOpenCloseNav(false)}>Referrals</Link>
              </li>
              <li>
                <Link to="/rank" className="nav-link me-0" onClick={() => setOpenCloseNav(false)}>
                  Rank
                </Link>
              </li>
              <li>
                <Link to="/share" id="get_started" onClick={() => setOpenCloseNav(false)}>
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link to="/announcements" id="get_started" onClick={() => setOpenCloseNav(false)}>
                  Announcemnets
                </Link>
              </li>
            </ul>

          </nav>
        </div>
      )}
    </Styled.StyledHeader>
  );
};

export default Banner;
