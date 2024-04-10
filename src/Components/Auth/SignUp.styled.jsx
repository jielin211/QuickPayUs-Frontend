import styled from "styled-components";
import { Card, Input, Button, Checkbox} from "antd";     
  

export const StyledWrapper = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;   
`; 
export const InputBox = styled.div`     
    margin-top: 20px;     
`; 
export const InputLabel = styled.label`     
    font-size: 16px; 
    margin-bottom: 5px; 
    display: block;      
`;  
export const InputWrapper = styled.div`     
    margin-bottom: 20px;      
`;    
export const BtnGrp = styled.div`     
    margin-top: 30px; 
    display: flex;   
    justify-content: right;       
`;
export const SignInWrapper = styled.div`     
    display: flex;        
    align-items: center; 
    justify-content: center;
    margin-top: 20px; 
`;   
export const MainCard = styled(Card)`  
    width: 500px;  
    border: none;
`;       
export const InputField = styled(Input)`  
    font-size: 16px; 
    border: 1px solid #1e1e1e;
    border-radius: 5px; 
    padding: 7px 15px;      
`; 
export const InputFieldPassword = styled(Input.Password)`  
    font-size: 16px;  
    border: 1px solid #1e1e1e; 
    border-radius: 5px; 
    padding: 7px 15px;      
`;
export const PreviousBtn = styled(Button)`  
    background-color: #f00000; 
    border-color: #f00000;      
    color: #fff;
    margin-right: 20px; 
    font-size: 16px;  
    padding: 8px 40px;     
    height: 42px;    
`;  
export const NextBtn = styled(Button)`   
    background-color: #f00000;  
    border-color: #f00000;      
    color: #fff; 
    font-size: 16px;  
    padding: 8px 40px;       
    height: 42px;  
`; 
export const SignInBtn = styled(Button)`   
    border: none; 
    background: transparent; 
    font-size: 16px;
    color: red;      
    padding-right: 5px; 
`;  
export const PrivacyTxt = styled.p`    
    font-size: 12px; 
    color: #121212;    
`; 
export const PrivacyTxt2 = styled.p`     
    font-size: 12px;  
    color: #121212;      
`; 
export const LearnMoreButton = styled.a`     
    cursor: pointer;  
    padding-left: 5px;   
    color: #f00000;  
    &:hover{
        color: #f00000;
    }
`;
export const StyledCheckbox = styled(Checkbox)`   
    margin-top: 0px;    
`;   