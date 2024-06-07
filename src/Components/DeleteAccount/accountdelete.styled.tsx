import styled from "styled-components";
import { Row, Card, Input, Button } from "antd";
import { Link } from "react-router-dom";

export const StyledH1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 10px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const MainRow = styled(Row)`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const MainCard = styled(Card)`
  border: none;
`;

export const StyledInput = styled(Input)`
  padding: 7px 15px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
`;

export const StyledInputPassword = styled(Input.Password)`
  padding: 7px 15px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
`;

export const SignInButton = styled(Button)`
  width: 100%;
  // padding: 7px 15px;
  // height: 45px;
  // font-size: 18px;
  background: #ff4d4f;
  &:hover {
    background: #ff4d4f !important;
    // color: #fff !important;
  }
  // border-radius: 5px;
  // margin-top: 20px;
`;

export const StyleLink = styled(Link)`
  color: red;
  &:hover {
    color: red;
  }
`;
