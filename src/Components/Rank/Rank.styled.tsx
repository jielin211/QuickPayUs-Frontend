import styled from "styled-components";

// antd
import { Button } from "antd";

// breakpoints
import { breakpoint } from "../../breakpoints";

export const RankTitle = styled.h2`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  margin-bottom: 20px;
  padding-bottom: 0px;
  padding-left: 7px;
  @media screen and (max-width: 992px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    padding-bottom: 16px;
  }
`;

export const RankSubtitleWrapper = styled.div`
  // padding: 0 20px;
  border-radius: 8px 8px 8px 0;
`;

export const RankSubtitle = styled.h2`
  padding: 10px 5px;
  font-weight: 500;
  // color: #0a0a0a;
`;
export const RankCol1 = styled.div`
  text-align: left;
  padding: 0 0 20px 0;
  border-width: 0;
  border-style: solid;
  border-color: var(--color-border-primary);
  border-bottom-width: 1px;
  ${breakpoint.md} {
    border-right-width: 1px;
    border-bottom-width: 0px;
    padding: 0 20px 0 0;
  }
`;
export const RankCol2 = styled(RankCol1)`
  padding: 20px 0 0 0;
  border: unset;
  ${breakpoint.md} {
    padding: 0 0 0 20px;
  }
`;
export const RankContainer = styled.div`
  padding: 17px;
  height: 100%;
  // background-color: #f4f4f4;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const RankDataWrapper = styled.div`
  border-radius: 18px;
  padding: 25px !important;
  background-color: var(--color-bg-container);
`;
export const RankDataItem = styled.h3`
  // color: #0a0a0a;
  text-align: right;
`;
export const RankDataDescription = styled.div`
  text-align: center;
  // color: black;
  font-size: 20px;
  margin: 30px;
`;
export const ClaimRewardBtnWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;
export const ClaimRewardBtn = styled(Button)`
  padding: 0 25px;
  font-size: 16px;
  font-weight: 600;
`;
export const RankResultTitle = styled.h3`
  // color: #121212;
`;
export const RankResultWrapper = styled.div`
  padding-bottom: 30px;
  padding-left: 50px;
`;
export const RankChartWrapper = styled.div`
  border-radius: 18px;
  margin: 30px 0;
  background-color: var(--color-bg-container);
`;
export const RankResultContent = styled.span`
  margin: auto 0;
  font-weight: 500;
  font-size: 16px;
  // color: #000;
`;
