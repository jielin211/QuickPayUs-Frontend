import styled from "styled-components";
import { Row, Card, Skeleton, Col, Select } from "antd";

export const Main = styled.div`
  padding-top: 2px;
  padding-right: 25px;
  padding-left: 25px;
  // background-color: #f4f4f4;
  height: 100%;
`;
export const StyledHeading = styled.h2`
  // color: #000;
  text-align: left;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 575px) {
    text-align: center;
  }
`;
export const CardCol = styled.div`
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const CardH3 = styled.h3`
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary-text);
  @media (max-width: 575px) {
    font-size: 10px;
    display: block;
    margin: auto;
    text-align: center;
  }
`;
export const CardP = styled.p`
  margin: 0px;
  color: var(--color-primary-text);
  font-weight: bold;
  font-size: 22px;
  @media (max-width: 575px) {
    font-size: 18px;
    display: block;
    margin: auto;
  }
`;
export const ChartHeading = styled.h2`
  font-size: 19px;
  width: 100%;
  color: var(--color-primary-text);
  text-align: left;
  @media (max-width: 575px) {
    text-align: center;
  }
`;
export const OverviewCard = styled(Card)`
  border-radius: 18px;
  border: none;
  padding: 8px 20px;
`;
export const OverviewCardWrapper = styled(Row)`
  margin-bottom: 22px;
`;
export const ChartCard = styled(Card)`
  border-radius: 18px;
  border: none;
`;
export const ChartRow = styled(Row)`
  margin-top: 20px;
`;
export const SelectCol = styled(Col)`
  display: flex;
  width: 100%;
  justify-content: start;
  @media (max-width: 575px) {
    justify-content: center;
  }
`;
export const SkeletonInputCustom = styled(Skeleton.Input)`
  @media (max-width: 575px) {
    min-width: 100px !important;
    width: 100px !important;
  }
`;
export const SkeletonInputCustomHeader = styled(Skeleton.Input)`
  margin-left: 14px;
  @media (max-width: 575px) {
    margin-left: 0;
    min-width: 100px !important;
    width: 100px !important;
  }
`;
export const ChartSubjectSelect = styled(Select)`
  width: 120px;
  margin-right: 10px;
`;
export const ChartDateSelect = styled(Select)`
  width: 120px;
`;
