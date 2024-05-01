import { Button } from "antd";
import styled from "styled-components";

export const RankTitle = styled.h2`
    text-align: left;
    margin: 10px;
    font-size:1.5vw;
    font-weight:700;
    color:#2e2e2e;
    margin-bottom: 25px;
    @media screen and (max-width: 992px) {
        font-size:30px;
        text-align: center;
      }
`

export const RankSubtitleWrapper = styled.div`
    padding: 0 20px;
    background: #fafafa;
    border-radius: 8px 8px 8px 0;
`

export const RankSubtitle = styled.h2`
    padding: 10px 5px;
    font-weight:500
`

export const RankCol = styled.div`
    text-align: left;
    padding-left: 50px;
`
export const RankContainer = styled.div`
    padding: 30px;
    
    
`
export const RankDataWrapper = styled.div`
    box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    padding-bottom: 10px;
`
export const RankDataItem = styled.h3`
    color: #DF0B0B;
    text-align: center;
`
export const RankDataDescription = styled.div`
    text-align: center;
    color: black;
    font-size: 20px;
    margin: 30px;
`
export const ClaimRewardBtnWrapper = styled.div`
    display: flex;
    justify-content: right;
`
export const ClaimRewardBtn = styled(Button)`
    padding: 0 50px;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
`
export const RankResultTitle = styled.h3`
    color: #DF0B0B;
`
export const RankResultWrapper = styled.div`
    padding-bottom: 30px;
    padding-left: 50px;
`
export const RankChartWrapper = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    margin: 30px 0;
`
export const RankResultContent = styled.span`
    margin: auto 0;
    font-weight: 500;
    font-size: 16px;
`