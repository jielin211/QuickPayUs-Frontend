import styled from "styled-components";
import { Row, Card, Skeleton, Col} from "antd";    
import { Link } from "react-router-dom"; 

export const SettingsH1 = styled.h1`     
    font-size: 24px;
    padding: 30px 35px; 
    @media (max-width: 575px) {  
        text-align: center;
        padding: 10px 0; 
    }   
`;
export const SettingsBox = styled.div`     
    border-radius: 10px; 
    box-shadow: 2px 4px 12px #00000014;
    padding: 50px 30px;
    margin: 0 30px 30px 30px;
    @media (max-width: 575px) {  
        padding: 40px 10px;
        margin: 0 20px 30px 20px;
    }   
`;
export const SettingsBoxH2 = styled.h2`     
    font-size: 20px;
    font-weight: bold;
    color: #f00000;
    margin: 0px 0 20px 0;
    text-transform: uppercase;
    @media (max-width: 575px) {  
        font-size: 18px;
    }   
`;

export const SettingsBoxP= styled.p`     
    font-size: 16px;
    color: black;
    font-weight: 500;
    padding-right: 10px;
    @media (max-width: 575px) {  
        font-size: 15px;
    }   
`;

export const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding-inline: 10px;
`
export const CustomSettingBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding-inline: 10px;
`