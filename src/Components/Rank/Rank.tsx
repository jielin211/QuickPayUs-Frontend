import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Skeleton } from 'antd';
import * as Styled from "./Rank.styled"; 

const { Meta } = Card;

const MyComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div>
      <Styled.RankTitle>Rank</Styled.RankTitle>
      <div className="site-card-border-less-wrapper">
        <Styled.RankSubtitleWrapper>
          <Styled.RankSubtitle>Statistics</Styled.RankSubtitle>
        </Styled.RankSubtitleWrapper>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Investment Rank</h2>
                <h3>Rank:</h3>
                <p>Leader 1</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </Styled.RankCol>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Sales</h2>
                <h3>Rank:</h3>
                <p>10k$ - 20k$</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </Styled.RankCol>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Rewards</h2>
                <p>Amount:</p>
                <p>295$ - 500$</p>
              </Styled.RankCol>
            )}
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'right', margin: '20px' }}>
          <Button>{loading ? <Skeleton.Button active /> : 'check rank'}</Button>
        </div>
      </div>
    </div>
    <div>
      <div className="site-card-border-less-wrapper">
        <Styled.RankSubtitleWrapper>
          <Styled.RankSubtitle>Statistics</Styled.RankSubtitle>
        </Styled.RankSubtitleWrapper>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Investment Rank</h2>
                <h3>Rank:</h3>
                <p>Leader 1</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </Styled.RankCol>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Sales</h2>
                <h3>Rank:</h3>
                <p>10k$ - 20k$</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </Styled.RankCol>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Styled.RankCol>
                <h2>Rewards</h2>
                <p>Amount:</p>
                <p>295$ - 500$</p>
              </Styled.RankCol>
            )}
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};

export default MyComponent;
