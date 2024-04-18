import styled from "styled-components";
import { Col, Button } from "antd";  

export const ShareWrapper = styled.div`
    margin-top: 50px; 
`; 
export const StyledH3 = styled.h3`
    font-size: 15px;    
`;
export const TopSection = styled.div`
    display: flex;
    align-items: center;    
    gap: 5px;   
`; 
export const StyledP = styled.p` 
    font-size: 12px;
    color: #DF0B0B;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #B9B9B9;
    background: white;
    text-align: left; 
    padding: 18px 20px;  
    width: 100%;      
`;
export const CopyImg = styled.img`  
    display: block;      
`;    
export const SocialArea = styled.div`
    display: flex; 
    justify-content: center;
    gap: 10px; 
    margin-top: 14px; 
`; 
export const ColStyled = styled(Col)` 
    display: flex;
    justify-content: center; 
    align-items: center;   
`;  
export const CopyBtn = styled(Button)` 
    background: #f00000;
    height: 50px;     
`;  
export const SocialBtn = styled(Button)` 
    background: #f00000; 
    height: 34px; 
    width: 34px;  
    padding: 0px;
    display: grid;    
    place-items: center; 
`;  
 