import styled from "styled-components";
import { Col, Row, Button, Avatar } from "antd";

export const AboutMainRow = styled(Row)`
  padding: 46px;
  height: auto;

  @media screen and (max-width: 580px) {
    padding: 40px 10px;
  }
`;

export const AboutBoxRow = styled(Row)`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
`;

export const AboutBoxCol = styled(Col)`
  display: flex;
  align-items: center;
  border-right: 1px solid #eee;
  padding: 10px;
`;

export const StyledProfileAvatar = styled(Avatar)`
  color: #fff;
  background-color: #000;
  width: 100px;
  height: 100px;
  font-size: 48px;
`;

export const StyledNameLabel = styled.h1`
  margin-bottom: 5px;
  font-size: 24px;
  color: #333;
`;

export const StyledLevelLabel = styled.p`
  font-size: 18px;
  color: #FF9090;
  margin: 0;
  font-weight: 600;
`;

export const StyledUserInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const StyledKYCCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const AboutBoxH4 = styled.h4`
  margin: 0;
  font-size: 16px;
  padding: 10px;
  font-weight: 600;
  color: #333;

  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
`;

export const AboutBoxP = styled.p`
  margin: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #666;

  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
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
    display: block;
    margin: auto;
    padding: 8px 24px;
    height: 40px;
    width: 170px ;
    color: #fff;
    background: #f00000;
    border: 1px solid #f00000;
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;   
`;

export const KycBox = styled.div`
    background: #f9f9f9; 
    box-shadow: 2px 4px 12px #00000014;
    width: 40%;
    border-radius: 5px;  
    padding: 30px; 
    @media screen and (max-width: 580px) {
        width: 90%;
    }
`;
export const KycBoxH3 = styled.h3`
    font-weight: 600;  
    font-size: 24px;  
    color: #2e2e2e; 
    margin: 0 0 30px 0;
    text-align: center;
    @media screen and (max-width: 580px) {
        font-size: 20px;  
        margin: 0 0 20px 0;
    }
`;
