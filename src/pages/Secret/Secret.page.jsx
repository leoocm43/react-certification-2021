import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';
import { YOUTUBE_VIDEOS_MOCK } from '../../utils/constants';
import Navbar from '../../components/Navbar';

function SecretPage() {
  return (
    <>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          {YOUTUBE_VIDEOS_MOCK.items.map((video) => (
            <>
              <Card
                style={{
                  width: '350px',
                  height: '350px',
                  marginRight: '20px',
                  marginBottom: '30px',
                }}
              >
                <Card.Img
                  style={{ width: '80%', height: '150px' }}
                  variant="top"
                  src={video.snippet.thumbnails.default.url}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '18px' }}>
                    {video.snippet.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '16px' }}>
                    {video.snippet.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SecretPage;
