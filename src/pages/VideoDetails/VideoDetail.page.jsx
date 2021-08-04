import React,{useEffect, useState} from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Iframe from 'react-iframe'
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { NavLink } from '../../components/Navbar/NavbarElements';


const VideoDetail = () => {
  const [videoId, setVideoId] = useState(localStorage.getItem('id'))
  const [title, setTitle] = useState(localStorage.getItem('title'))
  const [description, setDescription] = useState(localStorage.getItem('description'))
  const { data, loading, error, fetchVideos } = useYoutubeApi();


  useEffect(() => {
    fetchVideos(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyC8toCuN-oEin0T2SyAC4tIhUZ3xwasUk0`)
    console.log(data)
  },[videoId, title, description])

  const setVideoValues = (titleV, descriptionV, id) => {
    localStorage.setItem('title', titleV)
    localStorage.setItem('description', descriptionV)
    localStorage.setItem('id', id)
    setVideoId(id)
    setTitle(titleV)
    setDescription(description)
  }

  if (loading) return 'Loading...';
  if (error) return 'Please try again';

  return (
    <Container>
      <Row>
        <Row xs={1} md={2}>
          <Col sm={10}> 
            <Iframe width="100%" height="800px" url={`https://www.youtube.com/embed/${videoId}`}></Iframe>
          </Col>
          <Col sm={2}>
              {data && data.map((related) => (
                <NavLink to="/detail" onClick={() => setVideoValues(related.snippet.title, related.snippet.description,  related.id.videoId)}>
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
                        {related.snippet.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
              </NavLink>
              ))}
          </Col>
          <Col>
            {title}
            <br></br>
            <br></br>
            {description}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default VideoDetail;
