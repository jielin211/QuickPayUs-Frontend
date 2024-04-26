import styled from "styled-components";
import { Badge, Layout, Avatar} from "antd"; 
import { BellOutlined, QrcodeOutlined } from "@ant-design/icons";
const { Header } = Layout;  
 
export const HeaderContainer = styled.div`
  background-color: white;
  padding: 0px 32px; 
  position: fixed;
  top: 0;
  left: 0; 
  width: 100%;
  height: 44px; 
  padding-inline: 32px;
  z-index: 99;
  border-bottom: 1px solid #ece8e8; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const BalanceTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
  line-height: 22px;
`;

export const BalanceValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
  line-height: 22px;
`;

export const BellIconCounter = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: red;
  top: 15px;
  border-radius: 2px;
  display: block;
  font-size: 8px;  
`;
export const MobileBellWrapper = styled.div`
  position: absolute;
  display: flex;    
  align-items: center;   
  top: 16px; 
  right: 55px;  
  @media (min-width: 576px) and (max-width: 768px) { 
    top: 16px; 
    right: 55px;   
  }  
`;    
export const BellWrapper = styled.div`
  position: relative;
  display: flex;  
  align-items: center;  
  height: 44px;  
`;  
export const PcLogoWrapper = styled.div`
  display: flex; 
  align-items: center;   
  @media (min-width: 576px) and (max-width: 768px) { 
    transform: translateX(50%);   
  }
`;  
export const PcLogo = styled.img`
  width: 28%;  
  transform: translateX(-20px);
  src: "/src/assets/images/logo.svg";   
`;  
export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;  
  align-items: center;    
`;  
export const AvatarInfo = styled.div`
  line-height: 2px;     
  padding-left: 10px;    
`;    
export const AvatarInfoP1 = styled.p` 
  font-size: 12px;
  font-weight: 600; 
  color: #000;        
`; 
export const AvatarInfoP2 = styled.p` 
  font-size: 11px; 
  font-weight: 400;   
  color: #F00000;        
`;  
export const MobileLogo = styled.img`
  width: 100%;   
  transform: translateX(39%) translateY(-12px);
`;  
export const StyledHeader = styled(Header)`
  height: 44px;   
`;    
export const BellOutlinedNew = styled(BellOutlined)`
  font-size: 14px; 
  color: black;    
`;   
export const StyledAvatar = styled(Avatar)`
  font-size: 14px;   
  width: 26px;    
  height: 26px; 
  color: #fff;  
  background: #121212;
`;  
export const ModeItem = styled.div`
  display: flex;
  justify-content: space-between
`;
export const ShareBtn = styled.button`
  border: none;
  background: #fff;
  cursor: pointer;
  color: #f00000;
`
export const ReferralTitle = styled.p`
  padding: 10px 0px 0px 0px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`
export const CopyToClipboardContent = styled.button`
  border: none;
  background: #fff;
  cursor: pointer;
  color: #f00000;
`
export const CustomQrCodeIcon = styled(QrcodeOutlined)`
  cursor: pointer;
`