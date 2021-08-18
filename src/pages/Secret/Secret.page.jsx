import React, { useState, useContext } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from '../../components/Navbar/NavbarElements';
import { Input, IconButton } from '../../components/Searchbar/SearchbarElements';
// import { YOUTUBE_VIDEOS_MOCK } from '../../utils/constants';
import { FaSearch} from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import VideoContext from '../../context/Video/VideoContext';

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

function SecretPage() {
  const { data, loading, error, fetchVideos } = useYoutubeApi();
  const [value, setValue] = useState("");
  const [ label, setLabel] = useState("Type and search...")

  const {video, setVideoId, setTitle, setDescription } = useContext(VideoContext)

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = () => {
      fetchVideos(
        `/search?part=snippet&maxResults=25&q=${video}&type=video&key=${REACT_APP_YOUTUBE_API_KEY}`
      );
      if(value !== ""){
        setLabel("Loading")
      }
  
  }

  if (error) return 'Please try again';

  const setVideoValues = (title, description, id) => {
    /*localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('id', id);*/
    setTitle(title)
    setDescription(description)
    setVideoId(id)
  };

  return (
    <>
      <Container>
        <Row>
          <Navbar />
          <Col className="d-flex justify-content-around">
            <Input
                placeholder="Type a video title..."
                value={value}
                onChange={handleChange}
              />
              <IconButton onClick={() => handleSearch()}><FaSearch/></IconButton>
          </Col>
        </Row>
        {/* <Row>
            <Col>
            
              </Col>
            </Row> */}
        <Row xs={1} md={2} lg={3}>
          {!loading && data ?
            data.slice(1).map((vid) => (
              <Col key={vid.id.videoId}>
                <NavLink
                  to="/detail"
                  onClick={() =>
                    setVideoValues(
                      vid.snippet.title,
                      vid.snippet.description,
                      vid.id.videoId
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
                      src={vid.snippet.thumbnails.default.url}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '18px' }}>
                        {vid.snippet.title}
                      </Card.Title>
                      <Card.Text style={{ fontSize: '16px' }}>
                        {vid.snippet.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
                  )) : label}
        </Row>
      </Container>
    </>
  );
}

export default SecretPage;
