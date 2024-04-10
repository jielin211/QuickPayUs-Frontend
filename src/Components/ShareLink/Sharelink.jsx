import copyIcon from "../../assets/images/copy-icon.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import whatsappIcon from "../../assets/images/whatsapp.svg";
import telegramIcon from "../../assets/images/telegram.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import announcementIcon from "../../assets/images/announcement-icon.png";
import referalImg from "../../assets/images/referral-link-img.png";
import * as Styled from "./ShareLink.styled";  
import { Button, Col, Row } from "antd";
const ShareWithFriend=()=>{
return(
    <Row justify="center">  
<Styled.ColStyled md={24} xl={8}> 
  <Styled.ShareWrapper> 
    <img src={referalImg} alt="referral" /> 
 
    <div>  
      <Styled.StyledH3>Your Referral Link</Styled.StyledH3>
      <Styled.TopSection> 
        <Styled.StyledP>  
          https://www.google.com
        </Styled.StyledP>   
        <Styled.CopyBtn type="primary">     
          <Styled.CopyImg src={copyIcon} alt="c"/> 
        </Styled.CopyBtn>    
      </Styled.TopSection>  
    </div>

    {/* Social Links */} 
    <Styled.SocialArea> 
      <Styled.SocialBtn type="primary">  
        <Styled.CopyImg  
          src={facebookIcon} 
          alt="f"
        /> 
      </Styled.SocialBtn>
      <Styled.SocialBtn type="primary">
        <Styled.CopyImg
          src={whatsappIcon}
          alt="f"
        />
      </Styled.SocialBtn>
      <Styled.SocialBtn type="primary"> 
        <Styled.CopyImg
          src={telegramIcon}
          alt="f"
        /> 
      </Styled.SocialBtn>
      <Styled.SocialBtn type="primary"> 
        <Styled.CopyImg
          src={instagramIcon}
          alt="f" 
        /> 
      </Styled.SocialBtn>
    </Styled.SocialArea>  
  </Styled.ShareWrapper>
</Styled.ColStyled>
</Row>
)}
export default ShareWithFriend