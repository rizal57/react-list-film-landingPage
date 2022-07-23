import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" fixed="top" className="nav">
        <Container>
          <Navbar.Brand href="/" className="brand">
            JOULEFILM
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#superHero">Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
