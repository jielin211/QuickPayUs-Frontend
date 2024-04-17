import styled from "styled-components";
import { Card, Input, Button, Checkbox, Steps as UiSteps} from "antd";     
import ReactFlagsSelect from "react-flags-select";

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
    padding: 6px 20px;     
    height: 42px;    
`;  
export const NextBtn = styled(Button)`   
    background-color: #f00000;  
    border-color: #f00000;      
    color: #fff; 
    font-size: 16px;  
    padding: 8px 30px;       
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
    padding: 0 10px; 
`; 
export const PrivacyTxt2 = styled.p`     
    font-size: 12px;  
    color: #121212;     
    opacity: 0;
    transition: height .5s ease, opacity .5s ease;
    visibility: hidden;
    padding: 0 10px;
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
export const CountrySelect = styled(ReactFlagsSelect)`
  button {
    border-radius: 8px !important;
  }
`;
export const Steps = styled(UiSteps)`
  max-width: 100%;
  padding: 0px;
  width: 6%;
  padding-left: 2%;
  @media screen and (max-width: 768px) {
    width: calc(100% - 16px);
    padding: 0px;
    .ant-steps-item-title {
      font-size: 14px;
    }
    .ant-steps {
      width: 30px !important;
    }
    .ant-steps-item {
      width: 30px !important;
    }

    .ant-steps-item .ant-steps-item-process .ant-steps-item-active {
      width: 30px !important;
    }
    .ant-steps-item-process {
      width: 30px !important;
    }

    .ant-steps-item-active {
      width: 30px !important;
    }
    .ant-steps-item-container {
      width: 30px;
    }

    .ant-steps-item-wait {
      width: 15px !important;
    }
    /* .ant-steps-item .ant-steps-item-process {
      width: 30px !important;
    }
    .ant-steps-item-container {
      width: 30px;
    } */
  }
`;