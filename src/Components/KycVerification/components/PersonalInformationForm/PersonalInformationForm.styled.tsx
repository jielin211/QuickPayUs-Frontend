import { styled } from "styled-components";
import { DatePicker, Select, Form, Input } from "antd";

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
  // color: #0a0a0a;
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
export const StyledInput = styled(Input)`
  width: 100%;
`;
export const ErrorMessage = styled.div`
  color: #ff3b30;
  height: 24px;
`;
export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 0;
  margin-top: 30px;
`;
