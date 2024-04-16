import { Col, Row, Button } from "antd";
import * as Styled from "./Profile.styled.js"; 

const KYCVerification = () => {
  return (
    <>
      <Styled.KycMainRow >
        <Styled.StyledKYCCol span={24}>  
          <Styled.KycBox>       
            <Styled.KycBoxH3>Get your identity verified to explore QUICKPAYUS.</Styled.KycBoxH3>
            <Styled.KycBtn>Get Verified</Styled.KycBtn>   
          </Styled.KycBox>      
        </Styled.StyledKYCCol>  
      </Styled.KycMainRow> 
    </> 
  );
}; 

export default KYCVerification;
