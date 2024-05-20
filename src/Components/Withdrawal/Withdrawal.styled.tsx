import styled from "styled-components";
import { Select, Card } from "antd";

export const WithdrawalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  height: 100%;

  background-color: #faf4f4f4;
`;

export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 18px;
  padding: 24px;
  padding-bottom: 48px;
  background-color: #fff;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
    box-shadow: none;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`;

export const Balance = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  width: 200px;
  height: 32px;
  padding: 4px 8px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 16px;
  gap: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledH2 = styled.h2`
  padding-left: 23px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const StyledForm = styled.form`
  text-align: left;
`;
export const InputWrapper = styled.div`
  margin-bottom: 16px;
  outline-style: none;
`;
export const StyledSelect = styled(Select)`
  width: 200px;
`;
export const StyledCard = styled(Card)`
  border: none;
`;
