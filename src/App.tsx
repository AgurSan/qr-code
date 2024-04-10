import React from 'react';
import Container from './components/Container';
import QRCode from './components/QRCode';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

const App: React.FC = () => {
  return (
    <Container>
      <QRCode value="https://www.linkedin.com/in/cl%C3%A9ment-sananikone/" />
      <Title>Clément Sananikone </Title>
      <Paragraph>
        Développeur web junior en recherche d'alternance
      </Paragraph>
      <Paragraph>
        Scanner pour accéder à mon linkedin
      </Paragraph>
    </Container>
  );
};

export default App;
