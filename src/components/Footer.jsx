import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundImage:
          'url(https://seller.tcgplayer.com/media/7794/digimon-card-game-dimensional-phase-banner-01.jpg)', // Ruta de la imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',

        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '10vh',
      }}
    >
      <Container>
        <p>&copy; {currentYear} Digimon. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
