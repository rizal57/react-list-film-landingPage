import { Card, Row, Col, Container } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container id='trending'>
        <Row>
          <Col>
            <div className="mt-4">
              <h1 className="text-white">Trending Movie</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card className="bg-dark text-white movieImage cardMovie mt-3">
              <Card.Img src={duneImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={everythingImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={infiniteImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={jokerImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={lightyearImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={morbiusImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={duneImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={duneImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={duneImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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
              <Card.Img src={duneImage} alt="Dune Image" />
              <Card.ImgOverlay className="bgOverlay">
                <Card.Title>Card title</Card.Title>
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

export default Trending