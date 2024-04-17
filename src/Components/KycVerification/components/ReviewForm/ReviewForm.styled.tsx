import styled from "styled-components";
import { SolutionOutlined } from "@ant-design/icons";

export const Heading = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 16px 0px;
  padding-top: 0;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const FieldTitle = styled.div`
  width: 200px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
  border-radius: 8px;
  text-align: left;
`;

export const FieldValue = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #f5f5f7;
  padding: 8px;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 36px;     
`;   

export const UploadSection = styled.div`
  display: flex;
  flex-direction: column;   
`;   
 
export const ImgGrp = styled.div`
  display: flex;
  gap: 16px; 
`;   
 
export const UploadImg = styled(SolutionOutlined)`
  font-size: 80px;
  padding: 10px 2px;    
`; 