import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Iframe from 'react-iframe';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { NavLink } from '../../components/Navbar/NavbarElements';
import Navbar from '../../components/Navbar'
import { Title, Description, CardTitle } from './VideoDetailsElements';

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

const VideoDetail = () => {
  const [videoId, setVideoId] = useState(localStorage.getItem('id'));
  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [description, setDescription] = useState(localStorage.getItem('description'));
  const { data, loading, error, fetchVideos } = useYoutubeApi();

  useEffect(() => {
    fetchVideos(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${REACT_APP_YOUTUBE_API_KEY}`
    );
    console.log(data);
  }, [videoId, title, description]);

  const setVideoValues = (titleV, descriptionV, id) => {
    localStorage.setItem('title', titleV);
    localStorage.setItem('description', descriptionV);
    localStorage.setItem('id', id);
    setVideoId(id);
    setTitle(titleV);
    setDescription(description);
  };

  if (loading) return 'Loading...';
  if (error) return 'Please try again';

  return (
    <Container>
      <Row>
        <Navbar />
        <Row xs={1} md={2}>
          <Col sm={10}>
            <Iframe
              width="100%"
              height="800px"
              url={`https://www.youtube.com/embed/${videoId}`}
            />
          </Col>
          <Col sm={2}>
            {data &&
              data.map((related) => (
                <NavLink
                  to="/detail"
                  onClick={() =>
                    setVideoValues(
                      related.snippet.title,
                      related.snippet.description,
                      related.id.videoId
                    )
                  }
                >
                  <Card
                    style={{
                      width: '350px',
                      height: '150px',
                      marginRight: '20px',
                      marginBottom: '10px',
                    }}
                  >
                    <Card.Img
                      style={{ width: '80%', height: '60px' }}
                      variant="top"
                      src={related.snippet.thumbnails.default.url}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '12px' }}>
                        <CardTitle>{related.snippet.title}</CardTitle>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              ))}
          </Col>
          <Col>
            <Title>{title}</Title>
            <br />
            <br />
            <Description>{description}</Description>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default VideoDetail;
