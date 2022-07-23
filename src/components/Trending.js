import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((respons) => {
        setMovies(respons.data.results);
      });
  }, []);
  return (
    <div>
      <Container id="trending">
        <Row>
          <Col>
            <div className="mt-4">
              <h1 className="text-white">Trending Movie</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} key={index}>
                <Card className="bg-dark text-white movieImage cardMovie mt-3">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    alt="Poster"
                  />
                  <Card.ImgOverlay className="bgOverlay">
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.overview}</Card.Text>
                    <Card.Text>{result.release_date}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
