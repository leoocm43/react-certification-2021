import React, {useState} from 'react';
import { Card, Row, Container } from 'react-bootstrap';
import { NavLink} from '../../components/Navbar/NavbarElements';
import { Input} from '../../components/Searchbar/SearchbarElements';
//import { YOUTUBE_VIDEOS_MOCK } from '../../utils/constants';
import Navbar from '../../components/Navbar';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi'
import useDebounce from '../../utils/hooks/useDebounce'
function SecretPage() {
  const {data, loading, error, fetchVideos} = useYoutubeApi();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };

  useDebounce(
    () => {
      fetchVideos(value);
    },
    [value],
    300
  );


    if (loading) return "Loading..."
    if (error) return "Please try again"

  return (
    
    <>
      <Container>
        <Row>
          <Navbar />
          <Input placeholder="Type a video title..."
            value={value}
            onChange={handleChange}
          />
        </Row>
        <Row>
          {data && data.map((video) => (
            <>
            <NavLink to="/detail">
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
            </>
          ))}
          </Row>
      </Container>
    </>
  );
}

export default SecretPage;
