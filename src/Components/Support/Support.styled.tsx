import styled from "styled-components";
import { Input, Row, Col} from "antd";  
const { Search } = Input; 
 
export const BgTop = styled.div` 
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    text-align: center;
    background: #f6f8fa;
    padding-bottom: 20px;
`;    
export const StyledH1 = styled.h1` 
    font-size: 32px; 
    font-weight: 600;
    padding: 20px 0;
`;   
  
export const TopicWrapper = styled.div` 
    margin: 40px auto;
    max-width: 880px;  
    text-align: left;  
    color: #656d76;
`;   
export const StyledH2 = styled.h2` 
    font-size: 16px;    
    font-weight: 400;
    text-align: center;
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
    // border-top: 1px solid rgb(0,0,0,47%); 
    padding: 30px 0;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;  
  
export const StyledCol = styled(Col)`  
    padding: 24px 0;  
    border: 1px solid #d0d7de;
    border-radius: 6px;
`;        
export const StyledSearch = styled(Search)`
    padding-bottom: 30px;
    max-width: 52em;
`
export const IconWrapper = styled(Row)`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font-size: 32px;
`
export const ItemTitleWrapper = styled(Row)`
    display: flex;
    justify-content: center;
`