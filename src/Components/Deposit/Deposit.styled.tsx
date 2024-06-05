import styled from "styled-components";
import { Alert, Card, Select, Input, Button } from "antd";

export const DepositContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // padding: 17px;

  @media screen and (max-width: 768px) {
    // padding: 20px;
  }

  // height: 100%;
  // background-color: #f4f4f4;
`;

export const FormContainer = styled.div`
  // margin-left: auto;
  // margin-right: auto;
  // width: 100%;
  // border-radius: 18px;
  // padding: 20px;

  // background-color: #fff;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
    box-shadow: none;
  }
`;

export const StyledCard = styled(Card)`
  // background-color: #fff;
  // text-align: left;
  // width: 100%;
  // box-shadow: none;
  // margin-top: -12px;
  border: none;
  // transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  margin-bottom: 20px;
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

export const FieldCover = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const PageHeading = styled.h2`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  font-size: 23px;
  // color: #000;
  // padding-left: 23px;
  margin-bottom: 20px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  // width: 100%;
  // padding: 10px 24px;
  // margin: 0px !important;
`;

export const PageCover = styled.div`
  width: 100%;
`;

export const AlertMessage = styled(Alert)`
  margin-top: 10px;
  background-color: #fff5f5;
  border: 1px solid #ffe2e0;
`;

export const SelectOne = styled(Select)`
  flex: 1;
  box-shadow: none;
`;

export const InputBox = styled(Input)`
  flex: 1;
  outline: none;
`;
export const GradientButton = styled(Button)`
  border: none;
  background: linear-gradient(120deg, rgb(255, 107, 0, 66%), rgb(223, 11, 11));
`;
