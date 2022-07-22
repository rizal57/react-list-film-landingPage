import { Container, Nav, Navbar } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" fixed="top" bg="dark">
        <Container>
          <Navbar.Brand href="/" className="brand">JOULEFILM</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar