import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Skeleton } from "antd";
import * as Styled from "./Rank.styled";

import RankChart from "./Charts";

const { Meta } = Card;

const MyComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isClaimed, setisClaimed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Styled.RankContainer>
      <div>
        <Styled.RankDataWrapper style={{ padding: "20px 10px" }}>
          <Styled.RankTitle>Rank</Styled.RankTitle>
          <Styled.RankSubtitleWrapper>
            <Styled.RankSubtitle>Statistics</Styled.RankSubtitle>
          </Styled.RankSubtitleWrapper>
          <Row>
            <Col span={24} md={12}>
              <Styled.RankCol>
                <Row>
                  <Col span={12}>
                    <h3>Current Rank</h3>
                  </Col>
                  <Col span={12}>
                    <Styled.RankDataItem>
                      {loading ? <Skeleton.Input size="small" active /> : "N/A"}
                    </Styled.RankDataItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <h3>Starts On:</h3>
                  </Col>
                  <Col span={12}>
                    <Styled.RankDataItem>
                      {loading ? (
                        <Skeleton.Input size="small" active />
                      ) : (
                        "20/03/2024"
                      )}
                    </Styled.RankDataItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <h3>Ends On:</h3>
                  </Col>
                  <Col span={12}>
                    <Styled.RankDataItem>
                      {loading ? (
                        <Skeleton.Input size="small" active />
                      ) : (
                        "20/03/2024"
                      )}
                    </Styled.RankDataItem>
                  </Col>
                </Row>
              </Styled.RankCol>
            </Col>
            <Col span={24} md={12}>
              <Row>
                <Col span={12}>
                  <h3 className="text-center">
                    Current Sales Revenue:
                  </h3>
                </Col>
                <Col span={12}>
                  <Styled.RankDataItem>
                    {loading ? (
                      <Skeleton.Input size="small" active />
                    ) : (
                      "$ 100000"
                    )}
                  </Styled.RankDataItem>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h3 className="text-center">
                    Direct Referrals :
                  </h3>
                </Col>
                <Col span={12}>
                  <Styled.RankDataItem>
                    {loading ? <Skeleton.Input size="small" active /> : "200"}
                  </Styled.RankDataItem>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h3 className="text-center">
                    Meeting compliance:
                  </h3>
                </Col>
                <Col span={12}>
                  <Styled.RankDataItem>
                    {loading ? <Skeleton.Input size="small" active /> : "200"}
                  </Styled.RankDataItem>
                </Col>
              </Row>
            </Col>
          </Row>
          {isClaimed ? (
            <>
              <Styled.RankDataDescription>
                <b>Congratulations!</b> You have achieved your milestone. You
                can claim your rewards.
              </Styled.RankDataDescription>
              <Styled.RankResultWrapper>
                <Styled.RankResultTitle>Rank:</Styled.RankResultTitle>
                <Styled.RankResultContent>
                  {loading ? (
                    <Skeleton.Input size="small" active />
                  ) : (
                    "Leader 1"
                  )}
                </Styled.RankResultContent>
                <Styled.RankResultTitle>Reward Range:</Styled.RankResultTitle>
                <Styled.RankResultContent>
                  {loading ? (
                    <Skeleton.Input size="small" active />
                  ) : (
                    "300 - 500$"
                  )}
                </Styled.RankResultContent>
              </Styled.RankResultWrapper>
            </>
          ) : null}
          <Styled.ClaimRewardBtnWrapper>
            <Styled.ClaimRewardBtn
              type="primary"
              size="large"
              style={{ background: "#007AFF" }}
              onClick={() => {
                setisClaimed(true);
              }}
            >
              Claim
            </Styled.ClaimRewardBtn>
          </Styled.ClaimRewardBtnWrapper>
        </Styled.RankDataWrapper>
      </div>
      <Styled.RankChartWrapper>
        <RankChart />
      </Styled.RankChartWrapper>
    </Styled.RankContainer>
  );
};

export default MyComponent;
