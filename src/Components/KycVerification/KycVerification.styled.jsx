import styled from "styled-components";
import { Button, Steps as UiSteps, Divider as UiDivider } from "antd";

export const Header = styled.div`
  font-family: IBM Plex Sans, sans-serif; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  background-color: #fff;
  color: black;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  /* border-bottom: 1px solid #f5f5f7; */
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  background-color: #fff;
  color: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-family: IBM Plex Sans, sans-serif;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const Steps = styled(UiSteps)`
  max-width: 100%;
  margin-left: -57px;
  padding: 0px;
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

export const Divider = styled(UiDivider)`
  margin: 0px 0px;
`;
export const StyledDot = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;  
  margin-top: -10px;
  margin-left: -8px; 
  width: 30px; 
  height: 30px;  
  border-radius: 50%;  
  background-color: #f00000;  
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 16px 24px;
  background-color: #f5f5f5; 
`;
export const StepsWrapper = styled.div` 
  display: flex; 
  flex-direction: column;
  width: 100%;  
`;
export const StepsContent = styled.div` 
  width: 100%;  
`; 
export const PaginationWrapper = styled.div` 
  margin-top: 16px;  
`;
export const StyledBtn = styled(Button)` 
  margin-right: "8px"      
`;   
