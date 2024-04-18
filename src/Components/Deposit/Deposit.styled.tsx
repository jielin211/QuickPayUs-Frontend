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

  box-sizing: border-box;
  gap: 0.5em;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding:0px;
  }


`;  

export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  padding: 3em;
  



  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;  
 
export const StyledCard = styled(Card)`
  text-align: left;  

  background-color:#f9f9f9;
  box-shadow: none; 
  border: none;
  box-shadow: 2px 4px 12px #00000014;

  width: 100%;
 

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

  border-radius: 5px; 
  width: 100%;
  border: 2px solid #d9d9d9;


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
  font-weight: 700;  
  font-size: 30px;    

`; 


export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;


  margin-top: 20px;
  padding: 0px 24px;  

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
 

