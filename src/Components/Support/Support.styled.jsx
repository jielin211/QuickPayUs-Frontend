import styled from "styled-components";
import { Input, Row, Col} from "antd";   
 
export const BgTop = styled.div` 
    min-height: 295px;
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-direction: column;   
`;    
export const StyledH1 = styled.h1` 
    font-size: 24px; 
    color: white; 
`;   
  
export const TopicWrapper = styled.div` 
    margin: 60px auto;
    max-width: 880px;  
    text-align: left;  
`;   
export const StyledH2 = styled.h2` 
    font-size: 24px;    
`;  
export const StyledH3 = styled.h3` 
    font-size: 24px;    
    margin: 0;  
`;
export const StyledP = styled.p`  
    color: #919191;
    font-weight: 500;
    font-size: 16px;   
    margin: 0px;  
    margin-top: 4px; 
`;
export const StyledInput = styled(Input)` 
    max-width: 400px;
    height: 48px;
    border-radius: 30px;  
    border: 1px solid black; 
    font-size: 15px;  
`; 
   
export const StyledRow = styled(Row)`  
    border-top: 1px solid rgb(0,0,0,47%); 
`;  
  
export const StyledCol = styled(Col)`  
    padding: 48px 12px;  
    border-bottom: 1px solid rgb(0,0,0,47%);
`;        