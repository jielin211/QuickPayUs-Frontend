import styled from "styled-components";
import { Row, Card, Skeleton, Col } from "antd";
import { Link } from "react-router-dom";

export const SettingsH1 = styled.h1`
  font-size: 24px;
  padding: 17px 35px;
  // color: var(--color-text);
  @media (max-width: 575px) {
    text-align: center;
    padding: 10px 0;
  }
`;
export const SettingsBox = styled.div`
  border-radius: 18px;
  padding: 30px 30px;
  background: var(--color-bg-container);
  margin: 0 30px 30px 30px;
  @media (max-width: 575px) {
    padding: 40px 20px;
    margin: 0 20px 30px 20px;
  }
`;
export const SettingsBoxH2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  // color: #0a0a0a !important;
  margin: 0px 0 20px 0;
  text-transform: uppercase;
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;
export const SettingsBoxPdisable = styled.h2`
  // color: #121212;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  // color: black;
  cursor: not-allowed;
  font-weight: 500;
  padding-right: 10px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

export const TooltipImg = styled.img`
  width: 15px;
  margin-top: 10px;
  opacity: 0.6;
`;
export const deletebtn = styled.h2`
  font-size: 16px;
  color: red;
  font-weight: 600;
  opacity: 0.7;
  padding-right: 10px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

export const SettingsBoxP = styled.p`
  font-size: 16px;
  // color: var(--color-text);
  font-weight: 500;
  padding-right: 10px;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-primary);
  &:last-child {
    border-bottom: none; /* Remove bottom border for the last CustomLink */
  }
  padding-inline: 10px;
  // color: #000;
  &:hover {
    // color: #000; /* Change text color on hover */
  }
  padding: 10px;
`;
export const CustomSettingBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  padding-inline: 10px;
`;
