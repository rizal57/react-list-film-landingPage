import { Card, Row, Col, Container } from "react-bootstrap"
import antManImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"

const Superhero = () => {
  return (
    <div>
      <Container id='superHero'>
        <Row>
          <Col>
            <div className="mt-4">
              <h1 className="text-white">Super Hero</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-3">
              <Card.Img src={spidermanImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>SPIDERMAN</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-3">
              <Card.Img src={avengerImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>AVENGER</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-3">
              <Card.Img src={batmanImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>BAT MAN</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-4">
              <Card.Img src={robinhoodImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>ROBINHOOD</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-4">
              <Card.Img src={supermanImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>SUPER MAN</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-4">
              <Card.Img src={antManImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>ANT MAN</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default Superhero