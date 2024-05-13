import styled from "styled-components";
import { Col, Row, Button, Avatar, Skeleton } from "antd";

export const AboutBoxH4 = styled.h4`
    margin: 0;
    font-size: 16px; 
    padding-right: 10px;
    font-weight: 600;

  @media screen and (max-width: 580px) {
    font-size: 14px; 
  }
`;
export const AboutBoxP = styled.p`
    margin: 0;   
    font-size: 16px; 
    font-weight: 400;

  @media screen and (max-width: 580px) {
    font-size: 14px; 
  }
`;
export const KycBox = styled.div`
    background: white; 
    width: 70%;
    border-radius: 5px;  
    @media screen and (max-width: 580px) {
        width: 90%;
    }
`;
export const KycBoxH3 = styled.h3`
    font-weight: 700;  
    font-size: 24px;  
    color: #fff; 
    margin: 0 0 30px 0;
    text-align: center;
    @media screen and (max-width: 580px) {
        font-size: 20px;  
        margin: 0 0 20px 0;
    }
`;



export const AboutMainRow = styled(Row)`
  padding: 46px;
  
  @media screen and (max-width: 580px) {
    padding: 40px 10px;
  }

`;
export const AboutBoxRow = styled(Row)`
    box-shadow: 2px 4px 12px #00000014;
    padding: 10px 0;
    border-radius: 10px;
    margin-bottom: 20px;
`;
export const AboutBoxCol = styled(Col)`
    display: flex;
    align-items: center; 
    padding: 10px;       
    border-right: 1px solid #d9d9d9;
`;
export const AboutBoxCol2 = styled(Col)`
    display: flex;
    align-items: center; 
    padding: 10px;       
`;
export const KycMainRow = styled(Row)`
    padding: 0px 46px; 
    padding-bottom: 100px;    
    @media screen and (max-width: 580px) {
        padding: 0px; 
    } 
`;
export const KycBtn = styled(Button)`
    && {
        display: block;
        margin: auto;
        padding: 8px 16px;
        height: 40px;
        width: 140px;
        color: #fff;
        border-radius: 5px;
        background: #007AFF;
        font-weight: 600;
        text-transform: uppercase;
    }
`;


export const StyledProfileAvatar = styled(Avatar)`
  color: #121212; 
  width: 100px;
  height: 100px; 
  font-size: 64px;
`
export const StyledNameLabel = styled.h1`
  margin-bottom: 5px;
`
export const StyledLevelLabel = styled.p`
  font-size: 18px; 
  margin: 0;
  font-weight: 600; 
  color: #000 
`
export const StyledUserInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
export const StyledKYCCol = styled(Col)`
  display: flex;
  justify-content: center;
`
export const ProfileHeroHeader = styled.div`
  height: 185px;
  background: url(/images/profile-bg.png);
`
export const ProfileHeroContent = styled.div`
  max-height: 120px;
  padding: 20px 34px 34px 46px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`
export const ProfileHeroLevel = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #DF0B0B;
`
export const ProfileHeroLocation = styled.p`
  margin: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ProfileHeroName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 25px;
`
export const ProfileHeroImage = styled.img`
  display: block;
  border-radius: 6px;
  width: 170px;
  height: 170px;
  margin-top: -105px;
`
export const ProfileHeroImageWrapper = styled.div`
  display: flex;
  gap: 26px;
`
export const SkeletonInputCustom = styled(Skeleton.Input)`
    @media (max-width: 575px) {   
        min-width: 80px !important;
        width: 80px !important
    }
`