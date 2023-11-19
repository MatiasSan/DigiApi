import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Digimon Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Digimon_Logo.svg/1280px-Digimon_Logo.svg.png"
            width="100%"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
