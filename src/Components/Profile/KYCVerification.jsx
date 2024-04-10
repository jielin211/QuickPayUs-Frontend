import { Col, Row, Button } from "antd";
import * as Styled from "./Profile.styled.jsx"; 

const KYCVerification = () => {
  return (
    <>
      <Styled.KycMainRow >
        <Col span={24} style={{display: "flex", justifyContent: "center"}}>  
          <Styled.KycBox>       
            <Styled.KycBoxH3>Get your identity verified to explore QUICKPAYUS.</Styled.KycBoxH3>
            <Styled.KycBtn>Get Verified</Styled.KycBtn>   
          </Styled.KycBox>      
        </Col>  
      </Styled.KycMainRow> 
    </> 
  );
}; 

export default KYCVerification;
