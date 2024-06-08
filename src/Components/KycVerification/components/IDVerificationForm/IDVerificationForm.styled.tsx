import styled from "styled-components";
import ReactFlagsSelect from "react-flags-select";
import { Form } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

export const CountrySelect = styled(ReactFlagsSelect)`
  button {
    border-radius: 8px !important;
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

export const FormDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;
export const RadioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const RadioCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--color-border-primary);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-size: 14px;
`;

export const InfoList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  li {
    margin: 0;
    margin-bottom: 1em;
    padding-left: 1.5em;
    position: relative;

    &:after {
      content: "";
      height: 0.4em;
      width: 0.4em;
      background: #d2153a;
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 7.5px;
      left: 7px;
      border-radius: 10px;
    }
  }
`;
export const StyledForm = styled(Form)`
  width: 100%;
`;
export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;
export const StyledSolutionIcon = styled(SolutionOutlined)`
  font-size: 100px;
  padding: 20px;
`;
export const ErrorMessage = styled.div`
  color: #ff3b30;
  height: 24px;
`;
export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 0;
  b
`;
