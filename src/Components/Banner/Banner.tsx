import { useEffect, useState, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Badge, Menu, QRCode, Popover } from "antd";
import { useDevice } from "../../Utils/Hooks/useDevice";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {
  CheckCircleOutlined,
  CopyOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useGetUnreadNotificationsCountQuery } from "../../Redux/slice";
import * as Styled from "./Banner.styled";

const AnnouncementIcon = (props) => (
  <svg
    fill="#0a0a0a"
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: "2px" }}
    {...props}
  >
    <path d="M5,7.087a3,3,0,0,0-3,3v3.826a3,3,0,0,0,2,2.816V21a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V17.423l10.609,4.5A1,1,0,0,0,22,21V3a1,1,0,0,0-1.391-.921L8.8,7.087ZM8,20H6V16.913H8Zm0-5.087H5a1,1,0,0,1-1-1V10.087a1,1,0,0,1,1-1H8Zm2-6.164L20,4.51V19.49L10,15.251Z" />
  </svg>
);

function getItem(label: any, key: any, icon: any, children: any, type: any) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Banner = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [avatarColor, setAvatarColor] = useState(getRandomColor()); // Set random color

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (event.target.parentNode.className.includes("avatarMenu0")) {
        return;
      }
      if (
        event.target.parentNode.id === "avatarMenu0" ||
        event.target.parentNode.id === "avatarMenu1"
      ) {
        return;
      }
      setCollapsed(false);
    }

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      if (event.target.parentNode.parentNode.id === "mobileAvatarMenu") {
        return;
      }
      setCollapsed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    toggleCollapsed();
  };

  const [selectedKey, setSelectedKey] = useState("");

  const handleClick = (key) => {
    if (key === "dark" || key === "light" || key === "auto")
      setSelectedKey(key);
  };

  const handleShare = async () => {
    if (navigator && navigator.share) {
      navigator
        .share({
          title: "Awesome Content",
          text: "Check out this awesome content!",
          url: "https://example.com",
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed:", error));
    } else {
      alert("Please use Share API support web browser");
    }
  };

  const menuItems = [
    getItem(
      <a href="/profile" style={{ color: "#0a0a0a" }}>
        Profile
      </a>,
      "1",
      null,
      null,
      null
    ),
    getItem(
      <a href="/settings" style={{ color: "#0a0a0a" }}>
        Settings
      </a>,
      "2",
      null,
      null,
      null
    ),
    getItem(
      <a href="/support" style={{ color: "#0a0a0a" }}>
        Support
      </a>,
      "3",
      null,
      null,
      null
    ),
    getItem(
      "Mode",
      "sub2",
      null,
      [
        getItem(
          selectedKey === "dark" ? (
            <Styled.ModeItem>
              <span style={{ color: "#0a0a0a" }}>Dark</span>
              <CheckCircleOutlined style={{ color: "#08c" }} />
            </Styled.ModeItem>
          ) : (
            <Styled.ModeItem>Dark</Styled.ModeItem>
          ),
          "dark",
          null,
          null,
          null
        ),
        getItem(
          selectedKey === "light" ? (
            <Styled.ModeItem>
              <span style={{ color: "#0a0a0a" }}>Light</span>
              <CheckCircleOutlined style={{ color: "#08c" }} />
            </Styled.ModeItem>
          ) : (
            <Styled.ModeItem>Light</Styled.ModeItem>
          ),
          "light",
          null,
          null,
          null
        ),
        getItem(
          selectedKey === "auto" ? (
            <Styled.ModeItem>
              <span style={{ color: "#0a0a0a" }}>Auto</span>
              <CheckCircleOutlined style={{ color: "#08c" }} />
            </Styled.ModeItem>
          ) : (
            <Styled.ModeItem>Auto</Styled.ModeItem>
          ),
          "auto",
          null,
          null,
          null
        ),
      ],
      null
    ),
    {
      type: "divider",
      key: "10",
    },
    getItem(
      <a href="/signin" style={{ color: "#0a0a0a" }}>
        Sign Out
      </a>,
      "4",
      null,
      null,
      null
    ),
  ];

  const userMenu = (
    <Menu
      onClick={(e) => handleClick(e.key)}
      selectedKeys={[selectedKey]}
      style={{
        width: 130,
        position: "absolute",
        top: "27px",
        left: "25px",
        boxShadow: "2px 4px 12px #00000014",
        borderInlineEnd: 0,
      }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={menuItems}
    />
  );

  const mobileUserMenu = (
    <Menu
      onClick={(e) => handleClick(e.key)}
      style={{
        width: 120,
        position: "fixed",
        top: "46px",
        right: "6px",
        boxShadow: "2px 4px 12px #00000014",
        borderInlineEnd: 0,
      }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={menuItems}
    />
  );

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
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Styled.StyledHeader className="header">
      {device?.isBreakpoint("MD") && (
        <Styled.HeaderContainer>
          <Styled.PcLogoWrapper>
            <Link to="/dashboard">
              <Styled.PcLogo src={logo} alt="QUICKPAYUS" />
            </Link>
          </Styled.PcLogoWrapper>
          <Styled.CtaContainer>
            <Popover
              overlayInnerStyle={{
                padding: 10,
                transform: "translateY(-0px)",
              }}
              content={
                <>
                  <div>
                    <Styled.ReferralTitle>Referral code</Styled.ReferralTitle>
                    <QRCode
                      value="https://quickpayus.com/username"
                      color="#0a0a0a"
                    />
                    <div className="d-flex">
                      <CopyToClipboard
                        text="https://quickpayus.com/username"
                        onCopy={onCopy}
                      >
                        <Styled.CopyToClipboardContent>
                          {copied ? "Copied!" : "Copy"} <CopyOutlined />{" "}
                        </Styled.CopyToClipboardContent>
                      </CopyToClipboard>
                      <Styled.ShareBtn onClick={handleShare}>
                        Share <ShareAltOutlined />
                      </Styled.ShareBtn>
                    </div>
                  </div>
                </>
              }
            >
              <Styled.CustomQrCodeIcon />
            </Popover>

            <Link to="/notifications">
              <Styled.BellWrapper>
                <Badge count={counter}>
                  <Styled.BellOutlinedNew />
                </Badge>
              </Styled.BellWrapper>
            </Link>
            <Link to="/announcements">
              <Styled.BellWrapper>
                <AnnouncementIcon />
              </Styled.BellWrapper>
            </Link>
            <div>
              <a onClick={(e) => handleToggle(e)}>
                <Styled.AvatarWrapper>
                  <Styled.StyledAvatar
                    className="avatarMenu0"
                    style={{ background: avatarColor }}
                  >
                    U
                  </Styled.StyledAvatar>
                  <Styled.AvatarInfo id="avatarMenu1">
                    <Styled.AvatarInfoP1>Username</Styled.AvatarInfoP1>
                    <Styled.AvatarInfoP2>Level 1</Styled.AvatarInfoP2>
                  </Styled.AvatarInfo>
                </Styled.AvatarWrapper>
              </a>
            </div>
            {!collapsed ? (
              <div
                ref={menuRef}
                style={{ position: "absolute" }}
                className="fade-out"
              >
                {userMenu}
              </div>
            ) : (
              <div
                ref={menuRef}
                style={{ position: "absolute" }}
                className="fade-in"
              >
                {userMenu}
              </div>
            )}
          </Styled.CtaContainer>
        </Styled.HeaderContainer>
      )}
      {!device?.isBreakpoint("MD") && (
        <div
          className={`nav-container container-xxl ${
            openCloseNav ? "active menu-opened" : ""
          }`}
        >
          <nav>
            <ul className="mobile-nav ps-0 ">
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
              {/* <li>
                <Link to="/" className="link-logo">
                  <Styled.PcLogoWrapper>
                    <Styled.MobileLogo src={logo} alt="QUICKPAYUS" />
                  </Styled.PcLogoWrapper>
                </Link>
              </li> */}
              <li style={{ position: "absolute", right: "80px" }}>
                <Popover
                  overlayInnerStyle={{
                    padding: 0,
                    transform: "translateY(-15px)",
                  }}
                  content={
                    <>
                      <div>
                        <p
                          style={{
                            padding: "10px 0px 0px 0px",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          Referral code
                        </p>
                        <QRCode
                          value="https://quickpayus.com/username"
                          style={{
                            marginTop: "0px",
                          }}
                        />
                        <div className="d-flex">
                          <CopyToClipboard
                            text="https://quickpayus.com/username"
                            onCopy={onCopy}
                          >
                            <Styled.CopyToClipboardContent>
                              {copied ? "Copied!" : "Copy"} <CopyOutlined />{" "}
                            </Styled.CopyToClipboardContent>
                          </CopyToClipboard>
                          <Styled.ShareBtn onClick={handleShare}>
                            Share <ShareAltOutlined />
                          </Styled.ShareBtn>
                        </div>
                      </div>
                    </>
                  }
                >
                  <Styled.CustomQrCodeIcon />
                </Popover>
              </li>

              <li>
                <Link to="/announcements">
                  <Styled.BellWrapper>
                    <AnnouncementIcon />
                  </Styled.BellWrapper>
                </Link>
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
              {!collapsed ? (
                <div
                  ref={mobileMenuRef}
                  style={{ position: "absolute" }}
                  className="fade-out"
                >
                  {mobileUserMenu}
                </div>
              ) : (
                <div
                  ref={mobileMenuRef}
                  style={{ position: "absolute" }}
                  className="fade-in"
                >
                  {mobileUserMenu}
                </div>
              )}
            </ul>

            <ul className="desktop-nav ps-0">
              <li>
                <Link
                  to="/#"
                  className="link-logo"
                  onClick={() => setOpenCloseNav(false)}
                ></Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => setOpenCloseNav(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/transaction" onClick={() => setOpenCloseNav(false)}>
                  Transactions
                </Link>
              </li>
              <li>
                <Link to="/deposit" onClick={() => setOpenCloseNav(false)}>
                  Deposit
                </Link>
              </li>
              <li>
                <Link to="/withdrawal" onClick={() => setOpenCloseNav(false)}>
                  Withdrawal
                </Link>
              </li>
              <li>
                <Link to="/referrals" onClick={() => setOpenCloseNav(false)}>
                  Referrals
                </Link>
              </li>
              <li>
                <Link
                  to="/rank"
                  className="nav-link me-0"
                  onClick={() => setOpenCloseNav(false)}
                >
                  Rank
                </Link>
              </li>
            </ul>

            <Styled.MobileLogoWrapper>
              <Styled.MobileLogo src={logo} alt="QUICKPAYUS" />
            </Styled.MobileLogoWrapper>
          </nav>
        </div>
      )}
    </Styled.StyledHeader>
  );
};

export default Banner;
