import styled from "styled-components";
import { Alert, Card, Select, Input, Button } from "antd"; 
  
export const DepositContainer = styled.div` 
display: flex;
flex-direction: column;
width: 100%; 
padding:30px;
height: 100%;
background-color: #fafafc;
`;  

export const FormContainer = styled.div`

  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 18px;
  padding:20px;
  background-color:#fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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
  overflow: hidden;
  
`; 

 


export const PageHeading  = styled.h2` 
   
  @media screen and (max-width:768px){
    text-align: center;
  }
   font-size:23px;
   
   padding-left:25px;    
`; 


export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 0px 24px;
  margin: 0px !important;  
`; 
 
export const PageCover = styled.div`
  width: 100%; 
`; 
  
export const AlertMessage = styled(Alert)`
  margin-top: 16px;
`;

export const SelectOne = styled(Select)`
  flex: 1;
  box-shadow: none;  
`;  
    
export const InputBox = styled(Input)`  
  flex: 1; 
  outline: none;   
`;     
export const GradientButton = styled(Button)`   
  border: none; 
  background: linear-gradient(120deg,rgb(255,107,0,66%),rgb(223,11,11)) ; 
`;

