import React, { useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from '../../components/Navbar/NavbarElements';
import { Input } from '../../components/Searchbar/SearchbarElements';
// import { YOUTUBE_VIDEOS_MOCK } from '../../utils/constants';
import Navbar from '../../components/Navbar';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import useDebounce from '../../utils/hooks/useDebounce';

function SecretPage() {
  const { data, loading, error, fetchVideos } = useYoutubeApi();
  const [value, setValue] = useState('wizeline');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  useDebounce(
    () => {
      fetchVideos(
        `/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyC8toCuN-oEin0T2SyAC4tIhUZ3xwasUk0`
      );
    },
    [value],
    300
  );

  if (loading) return 'Loading...';
  if (error) return 'Please try again';

  const setVideoValues = (title, description, id) => {
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('id', id);
  };

  return (
    <>
      <Container>
        <Row>
          <Navbar />
          <Input
            placeholder="Type a video title..."
            value={value}
            onChange={handleChange}
          />
        </Row>
        {/* <Row>
            <Col>
            
              </Col>
            </Row> */}
        <Row xs={1} md={2} lg={3}>
          {data &&
            data.slice(1).map((video) => (
              <Col key={video.id.videoId}>
                <NavLink
                  to="/detail"
                  onClick={() =>
                    setVideoValues(
                      video.snippet.title,
                      video.snippet.description,
                      video.id.videoId
                    )
                  }
                >
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
                </NavLink>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default SecretPage;
