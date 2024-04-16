import { styled } from "styled-components";
import { DatePicker, Select } from "antd";  

export const FormContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 16px 0px;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`; 
export const StyledDatePicker = styled(DatePicker)` 
  width: 100%;        
`;  
export const StyledSelect = styled(Select)` 
  width: 100%;        
`;  