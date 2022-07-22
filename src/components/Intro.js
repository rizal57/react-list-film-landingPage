import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className='intro'>
      <Container className='text-white d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKEK KARCIS</div>
            <div className='introButton text-center mt-2'>
              <Button variant="dark">Show All</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro