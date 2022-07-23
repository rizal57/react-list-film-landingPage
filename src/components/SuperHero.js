import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import axios from "axios";

const Superhero = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div>
      <Container id="superHero">
        <Row>
          <Col>
            <div className="mt-4">
              <h1 className="text-white">Super Hero</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} key={index}>
                <Card className="bg-dark text-white movieImage cardMovie mt-3">
                  <Card.Img
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    alt="Dune Image"
                  />
                  <Card.ImgOverlay className="bgOverlay">
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.title}</Card.Text>
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

export default Superhero;
