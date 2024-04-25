import styled from "styled-components";
import { Row, Card, Input, Button} from "antd"; 
import { Link } from "react-router-dom";
  
export const StyledH1 = styled.h1` 
    text-align: center;
    font-size: 24px;
    font-weight: 600;    
    margin-bottom: 40px;   
`;     

export const ForgetTxt = styled.p`   
    text-align: center; 
    color: #f00000; 
`;  
export const PrivacyTxt = styled.p`    
    font-size: 12px; 
    color: #121212;   
`; 
export const PrivacyTxt2 = styled.p`     
    font-size: 12px; 
    color: #121212; 
    opacity: 0;
    transition: height .5s ease, opacity .5s ease;
    visibility: hidden;
`; 
export const LearnMoreButton = styled.a`     
    cursor: pointer;  
    padding-left: 5px;   
    color: #f00000;  
    &:hover{
        color: #f00000;
    }
`;
export const MainRow = styled(Row)`  
  justify-content: center;    
  min-height: 100vh;  
  align-items: center;  
`;    
export const MainCard = styled(Card)`  
  border: none;
`;     
export const StyledInput = styled(Input)`  
    padding: 7px 15px; 
    font-size: 18px;
    border-radius: 5px;   
    border: 1px solid #1e1e1e;   
`;   
export const StyledInputPassword = styled(Input.Password)`  
    padding: 7px 15px; 
    font-size: 18px; 
    border-radius: 5px;   
    border: 1px solid #1e1e1e;   
`;  

export const SignInButton = styled(Button)`  
    width: 100%; 
    padding: 7px 15px;
    height: 45px; 
    font-size: 18px;    
    background: #f00000; 
    border-radius: 5px;  
    margin-top: 20px;
`; 
export const SignUpBtn = styled.span`   
    color: #f00000;
    padding: 0 5px 0 0;  
`;
export const StyleLink = styled(Link)`
  color: red;
  &:hover{
    color: red;
  }
`;