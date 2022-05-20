import { Button, Card, Container, Row, Text } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBackground from './../media/hero-background.jpg';

function Home() {
  let navigate = useNavigate();
  return (
    <div
      style={{
        background: `linear-gradient(165deg, 
          rgba(255, 155, 84, .5), 
          rgba(244, 173, 61, .5), 
          rgba(199, 210, 42, .5), 
          rgba(157, 229, 64, .5)), 
          url(${heroBackground})
          no-repeat
          center
          fixed`,
        height: '100vh',
        width: '100vw',
        marginTop: -100
      }}
    >
      <Container
        css={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card
          shadow="false"
          css={{
            background: 'rgba(0, 0, 0, 0.25)',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 4px )',
            borderRadius: 10,
            border: '1px solid rgba( 255, 255, 255, 0.18 )'
          }}
        >
          <Row>
            <Text
              h1
              size={60}
              weight="bold"
              css={{
                textGradient: '45deg, #9DE540 -20%, #ff9b54 50%'
              }}
            >
              ULTIMATE WORLD CRUISE
            </Text>
          </Row>
          <Row>
            <Button
              color="gradient"
              bordered
              ghost
              onClick={() => navigate('/shop')}
            >
              Browse
            </Button>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
