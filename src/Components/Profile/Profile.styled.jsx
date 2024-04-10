import styled from "styled-components";
import { Col, Row, Button } from "antd";

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
    background: #1e1e1e; 
    box-shadow: 2px 4px 12px #00000014;
    width: 70%;
    border-radius: 5px;  
    padding: 30px; 
    @media screen and (max-width: 580px) {
        width: 90%;
    }
`;
export const KycBoxH3 = styled.h3`
    font-weight: 700;  
    font-size: 26px;  
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
    display: block;
    margin: auto;
    padding: 8px 24px;
    height: 40px;
    width: 170px ;
    color: #fff;
    background: #f00000;
    border: 1px solid #f00000;
    font-weight: 600;
    text-transform: uppercase;   
`;