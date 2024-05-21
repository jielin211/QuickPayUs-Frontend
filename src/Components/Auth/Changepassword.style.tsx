import { Button, Row } from "antd";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f4f4f4;
  padding: 17px;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ContainerWrap = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
`;

export const ChangePasswordWrapper = styled.div`
  padding: 17px;
`;

export const ChangePasswordTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const ChangePasswordContent = styled(Row)`
  padding: 0;
`;

export const SaveBtn = styled(Button)`
  padding: 0 25px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  float: right;
`;
