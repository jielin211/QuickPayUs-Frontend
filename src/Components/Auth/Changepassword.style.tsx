import { Button, Row } from "antd";
import styled from "styled-components";

export const ChangePasswordWrapper = styled.div`
    border-radius: 10px; 
    padding: 50px 30px;
    margin: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`
export const ChangePasswordTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #f00000;
    margin: 0px 0 20px 0;
    textTransform: uppercase;
`
export const ChangePasswordContent = styled(Row)`
    padding: 20px 0;
`
export const SaveBtn = styled(Button)`
    // background: linear-gradient(120deg,rgb(255,107,0,66%),rgb(223,11,11));
    padding-inline: 50px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    float: right;
`