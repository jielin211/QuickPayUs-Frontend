import { useEffect, useState } from "react";  
import CopyToClipboard from 'react-copy-to-clipboard';
import { Badge, Layout, Dropdown, Menu, QRCode, Popover, Button } from "antd"; 
import { useDevice } from "../../Utils/Hooks/useDevice";
import logo from "../../assets/images/logo.svg";  
import { Link } from "react-router-dom";   
import { DownOutlined, CheckOutlined, QrcodeOutlined, CopyOutlined, ShareAltOutlined  } from '@ant-design/icons';
import { useGetUnreadNotificationsCountQuery } from "../../Redux/slice";
const { Header } = Layout;    
import * as Styled from "./Banner.styled"; 
export const Banner = () => {   

  const items3 = [   
    { 
      label: <a href="#">Dark</a>, 
      key: '0',  
    },      
    { 
      label: <a href="#">Light</a>,
      key: '1',
    },
    { 
      label: <a href="#">Auto</a>,
      key: '2',
    },
  ];     
    const [selectedKey, setSelectedKey] = useState(null); // Track selected option key
  
    const handleClick = (key) => {
      setSelectedKey(key);
    };
  
    const menu = (      
      <Menu className="mode"     
        onClick={(e) => handleClick(e.key)} // Handle option click
        selectedKeys={[selectedKey]} // Highlight selected option
      >   
        {items3.map((item) => (    
          <Menu.Item key={item.key}>
            {selectedKey === item.key ? (
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>   
                  {item.label}  
                </span> 
                <CheckOutlined/> 
              </div>
               
            ) : (
              item.label
            )}
          </Menu.Item>  
        ))} 
      </Menu>
    ); 
    const menu2 = (  
      <Menu className="mode-mobile"   
        onClick={(e) => handleClick(e.key)} // Handle option click
        selectedKeys={[selectedKey]} // Highlight selected option
      >
        {items3.map((item) => (    
          <Menu.Item key={item.key}>   
            {selectedKey === item.key ? (
              <div style={{display: "flex", justifyContent: "space-between"}}>
              <span>   
                {item.label}   
              </span> 
              <CheckOutlined/> 
            </div> 
            ) : (
              item.label
            )}
          </Menu.Item> 
        ))}
      </Menu>
    ); 

  const items = [       
    { 
      label: <a href="/profile">Account</a>, 
      key: '0',
    },  
    {
      label: <a href="/settings">Settings</a>,
      key: '1',
    },       
    {     
      label: <Dropdown     
      overlay={menu}    
      trigger={['click']}      
    >   
        <a onClick={(e) => e.preventDefault()} style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          Mode   
          <DownOutlined style={{transform: "rotate(270deg)"}}/>
        </a>     
    </Dropdown>,     
      key: '2',  
    },  
    {  
      label: <a href="#">Sign Out</a>,
      key: '3',    
    }   
  ]; 

  const items2 = [       
    { 
      label: <a href="/profile" className="mobile-username">Username</a>,
      key: '0',
    },  
    {
      label: <a href="/profile" className="mobile-level">Level: 1</a>,
      key: '1',
    },     
    { 
      label: <a href="/profile">Account</a>, 
      key: '2',
    },  
    { 
      label: <a href="/settings">Settings</a>, 
      key: '3',
    },   
    {     
      label: <Dropdown      
      overlay={menu2}    
      trigger={['click']}      
    >   
        <a onClick={(e) => e.preventDefault()} style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          Mode    
          <DownOutlined style={{transform: "rotate(270deg)"}}/>
        </a>     
    </Dropdown>,      
      key: '4',  
    }, 
    { 
      label: <a href="#">Sign Out</a>,
      key: '5', 
    }  
  ];

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
  } = useGetUnreadNotificationsCountQuery();

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
            <Styled.PcLogo src={logo} alt="QUICKPAYUS"/> 
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
            <QrcodeOutlined  style={{ 
              cursor: "pointer"  
            }}/> 
            </Popover> 

            <Link to="/notifications">   
              <Styled.BellWrapper>
                <Badge count={counter}> 
                  <Styled.BellOutlinedNew />     
                </Badge> 
              </Styled.BellWrapper>   
            </Link>     
            <Dropdown    
              menu={{  
                items, 
              }}    
              trigger={['click']}  
            >   
                <a onClick={(e) => e.preventDefault()}>
                  <Styled.AvatarWrapper>   
                    <Styled.StyledAvatar>U</Styled.StyledAvatar>
                    <Styled.AvatarInfo>    
                      <Styled.AvatarInfoP1>Username</Styled.AvatarInfoP1>   
                      <Styled.AvatarInfoP2>Level 1</Styled.AvatarInfoP2>  
                    </Styled.AvatarInfo> 
                  </Styled.AvatarWrapper> 
                </a>    
            </Dropdown> 
          </Styled.CtaContainer>   
        </Styled.HeaderContainer>
      )} 
      {!device?.isBreakpoint("MD") && (
        <div
          className={`nav-container container-xxl ${
            openCloseNav ? "active" : ""
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
                    <Styled.MobileLogo src={logo} alt="QUICKPAYUS"/> 
                  </Styled.PcLogoWrapper>     
                </Link>     
              </li>  
              <li style={{ position: "absolute", right: "80px"}}>
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
                <QrcodeOutlined  style={{ 
                  cursor: "pointer"  
                }}/> 
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
                <Dropdown  className="second"    
                  menu={{       
                    items: items2,        
                  }}      
                  trigger={['click']}    
                >      
                    <a onClick={(e) => e.preventDefault()}>
                      <Styled.AvatarWrapper>   
                        <Styled.StyledAvatar>U</Styled.StyledAvatar>
                      </Styled.AvatarWrapper>  
                    </a>     
                </Dropdown>
              </li>   
            </ul>   
            <ul className="desktop-nav ps-0">
              <li>
                <Link to="/#" className="link-logo"></Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>  
              <li>
                <Link to="/transaction">Transactions</Link>
              </li>
              <li>
                <Link to="/deposit">Deposit</Link>
              </li>
              <li>
                <Link to="/withdrawal">Withdrawal</Link>
              </li>
              <li> 
                <Link to="/referrals">Referrals</Link>
              </li> 
              <li>
                <Link to="/rank" className="nav-link me-0">
                  Rank
                </Link>
              </li>
              <li>
                <Link to="/support" id="get_started">
                  Support
                </Link> 
              </li>
              <li>
                <Link to="/share" id="get_started">
                  Refer a Friend
                </Link> 
              </li> 
              <li>
                <Link to="/announcements" id="get_started">
                  Announcemnets 
                </Link> 
              </li> 
              <li>
                <Link to="/profile" id="get_started">
                  Profile
                </Link>
              </li> 
              <li>
                <Link to="/settings" id="get_started">
                  Settings
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
