import styled from "styled-components";
import { Card, Select, Collapse } from "antd";

export const CustomTicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 32px;
  height: 100%;
  border-radius: 10px;
`;
export const StyledH2 = styled.h2`
  text-align: center;
`; 
export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto; 
  width: 650px; 

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
export const StyledForm = styled.form`
  text-align: left; 
`;  
export const InputWrapper = styled.div`
  margin-bottom: 16px; 
`;     
export const StyledSelect = styled(Select)`  
  width: 100%;    
`;  
export const StyledCard= styled(Card)`  
  border: none;    
`;   
export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;  
  padding: 0 24px;
`;
export const StyledModalTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`
export const StyledFAQContent = styled(Collapse)`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
export const StyledContactContent = styled.div`
  margin: 0 auto;
  width: 350px;
  margin-top: 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
export const ContactIconWrapper = styled.div`
  font-size: 24px;
  background: #4f95f7;
  padding: 10px 12px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`
export const ContactItemWrapper = styled.div`
  display: flex;
  margin: 20px;
`
export const ContactItemContentWrapper = styled.div`
  padding: 0 10px;
  wordWrap: break-word";
`