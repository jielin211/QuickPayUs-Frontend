import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Skeleton } from 'antd';

const { Meta } = Card;

const MyComponent = () => {
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
      <h2 style={{ textAlign: 'left', marginLeft: '10px', marginBottom: '50px' }}>Rank</h2>
      <div className="site-card-border-less-wrapper">
        <div
          style={{
            margin: '30px',
            textAlign: 'left',
            borderRadius: '10px',
            background: 'linear-gradient(90.5deg, #DF0B0B -35.48%, rgba(255, 107, 0, 0.79) 206.32%)',
          }}
        >
          <h2 style={{ color: 'white', padding: '5px' }}>Statistics</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Investment Rank</h2>
                <h3>Rank:</h3>
                <p>Leader 1</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </div>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Sales</h2>
                <h3>Rank:</h3>
                <p>10k$ - 20k$</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </div>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Rewards</h2>
                <p>Amount:</p>
                <p>295$ - 500$</p>
              </div>
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
        <div
          style={{
            margin: '30px',
            textAlign: 'left',
            borderRadius: '10px',
            background: 'linear-gradient(90.5deg, #DF0B0B -35.48%, rgba(255, 107, 0, 0.79) 206.32%)',
          }}
        >
          <h2 style={{ color: 'white', padding: '5px' }}>Statistics</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Investment Rank</h2>
                <h3>Rank:</h3>
                <p>Leader 1</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </div>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Sales</h2>
                <h3>Rank:</h3>
                <p>10k$ - 20k$</p>
                <p>Direct referral required:</p>
                <p>25</p>
              </div>
            )}
          </Col>
          <Col span={8}>
            {loading ? (
              <Skeleton active />
            ) : (
              <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <h2>Rewards</h2>
                <p>Amount:</p>
                <p>295$ - 500$</p>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};

export default MyComponent;
