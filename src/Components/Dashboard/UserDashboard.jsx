import React, { useState, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import EChart from './Charts';
import * as Styled from "./Style/Dashboard.styled";

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Styled.Main className='dashboard'>
      <Styled.StyledHeading >
        Account Overview
      </Styled.StyledHeading>
      <Row>
        <Col md={24} xl={24} xs={24}>
          {/* Account Balance */}
          <Styled.OverviewCardWrapper gutter={[16, 16]}>
            <Col span={24}>
              <Styled.OverviewCard
                className="dashboard-card"
                bodyStyle={{ padding: '0' }}
              >
                <Row gutter={[16, 16]}>
                  <Col sm={8} xs={8} md={8} xl={8}>
                    <Styled.CardCol className='br-1'>
                      {loading ? (
                        <Skeleton.Input active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Account Balance</Styled.CardH3>
                          <Styled.CardP>$50.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                  <Col sm={8} xs={8} md={8} xl={8}>
                    <Styled.CardCol className='br-1'>
                      {loading ? (
                        <Skeleton.Input active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Principle Balance</Styled.CardH3>
                          <Styled.CardP>$19.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                  <Col sm={8} xs={8} md={8} xl={8}>
                    <Styled.CardCol>
                      {loading ? (
                        <Skeleton.Input active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Profit Balance</Styled.CardH3>
                          <Styled.CardP>$50.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                </Row>
              </Styled.OverviewCard>
            </Col>
          </Styled.OverviewCardWrapper>
          <Styled.OverviewCardWrapper gutter={[16, 16]}>
            <Col span={24}>
              <Styled.OverviewCard
                className="dashboard-card"
                bodyStyle={{ padding: '0' }}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={8} sm={8} md={8} xl={8}>
                    <Styled.CardCol className='br-1'>
                      {loading ? (
                        <Skeleton.Input className='w-100' active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Account Balance</Styled.CardH3>
                          <Styled.CardP>$50.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                  <Col xs={8} sm={8} md={8} xl={8}>
                    <Styled.CardCol className='br-1'>
                      {loading ? (
                        <Skeleton.Input className='w-100' active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Principle Balance</Styled.CardH3>
                          <Styled.CardP>$19.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                  <Col xs={8} sm={8} md={8} xl={8}>
                    <Styled.CardCol>
                      {loading ? (
                        <Skeleton.Input className='w-100' active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Profit Balance</Styled.CardH3>
                          <Styled.CardP>$50.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                </Row>
              </Styled.OverviewCard>
            </Col>
          </Styled.OverviewCardWrapper>
          <Styled.OverviewCardWrapper gutter={[16, 16]}>
            <Col span={24}>
              <Styled.OverviewCard
                className="dashboard-card"
                bodyStyle={{ padding: '0' }}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={8} sm={8} md={8} xl={8}>
                    <Styled.CardCol>
                      {loading ? (
                        <Skeleton.Input className='w-100' active size="small" />
                      ) : (
                        <>
                          <Styled.CardH3>Rank Reward Balance</Styled.CardH3>
                          <Styled.CardP>$50.53</Styled.CardP>
                        </>
                      )}
                    </Styled.CardCol>
                  </Col>
                </Row>
              </Styled.OverviewCard>
            </Col>
          </Styled.OverviewCardWrapper>
          {/* Chart */}
          <Styled.ChartRow gutter={[16, 16]}>
            <Col span={24}>
              <Styled.ChartCard className="dashboard-card">
                {loading ? (
                  <Skeleton active paragraph={{ rows: 15 }} />
                ) : (
                  <EChart />
                )}
              </Styled.ChartCard>
            </Col>
          </Styled.ChartRow>
        </Col>

        {/* Right Side */}
      </Row>
    </Styled.Main>
  );
};

export default UserDashboard;
