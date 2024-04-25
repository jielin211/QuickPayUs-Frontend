import styled from "styled-components";
import { Alert, Card, Select, Input, Button } from "antd"; 
  
export const DepositContainer = styled.div` 
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

export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
  padding-bottom: 48px;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
    box-shadow: none;
  }
`;  
 
export const StyledCard = styled(Card)`
  text-align: left;  
  width: 100%;
  box-shadow: none; 
  border: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1); 
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 16px;
`;

export const StyledLabel  = styled.label`
  margin-bottom: 8px;  
  text-align: left;       
  display: flex;
  justify-content: space-between; 
`; 

export const FieldCover  = styled.div` 
  display: flex;
  justify-content: center; 
  border-radius: 8px; 
  border: 1px solid #d9d9d9;
`; 

export const FieldLeft  = styled.div` 
  display: flex;
  align-items: center;  
  border-right: 1px solid lightgray;
  height: 40px;    
`; 

export const TooltipImg  = styled.img` 
  width: 15px; 
  margin-top: 10px;     
`; 
export const FieldLeftImg  = styled.img` 
  margin: 5px;   
`;  
export const FieldLeftImg2  = styled.img` 
  margin: 10px;    
`; 

export const PageHeading  = styled.h2` 
  text-align: center;    
`; 


export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 0 24px;  
`; 
 
export const PageCover = styled.div`
  width: 100%; 
`; 
  
export const AlertMessage = styled(Alert)`
  margin-top: 16px;
`;

export const SelectOne = styled(Select)`
  flex: 1;
  border: none;
  box-shadow: none; 
  height: 40px; 
`;  
    
export const InputBox = styled(Input)`  
  flex: 1; 
  border: none;  
  outline: none;   
`;     
export const GradientButton = styled(Button)`   
  border: none; 
  background: linear-gradient(120deg,rgb(255,107,0,66%),rgb(223,11,11)); 
`;    
 

