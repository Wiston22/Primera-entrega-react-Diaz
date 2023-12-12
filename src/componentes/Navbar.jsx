import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Card, Button } from 'react-bootstrap';

const NavWrapper = styled.div`
  background-color: #000000;
  padding: 2rem;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  margin: 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  cursor: pointer;
`;

const CustomCard = styled(Card)`
  width: 18rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;  
  overflow-x: auto; 
`;
const CardWidget = () => {
  return (
    <CardContainer>
      <CustomCard>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/calzado1.avif'} />
        <Card.Body>
          <Card.Title>Adidas modelo 1</Card.Title>
          <Card.Text>
            Importadas desde Suiza
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </CustomCard>

      <CustomCard>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/calzado2.avif'} />
        <Card.Body>
          <Card.Title>Adidas modelo 2</Card.Title>
          <Card.Text>
            Importadas desde Alemania
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </CustomCard>

      <CustomCard>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/calzado3.avif'} />
        <Card.Body>
          <Card.Title>Adidas modelo 3</Card.Title>
          <Card.Text>
            Importadas desde Bélgica
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </CustomCard>
    </CardContainer>
  );
};

const Caballero = () => (
  <div>
    <h2>Bienvenido a la Sección de Caballero</h2>
    <CardWidget />
  </div>
);

const Dama = () => (
  <div>
    <h2>Bienvenido a la Sección de Dama</h2>
  </div>
);

const Contacto = () => (
  <div>
    <h2>Bienvenido a la Sección de Contacto</h2>
  </div>
);

const NavbarComponent = () => {
  return (
    <NavWrapper>
      <Brand>Adidas</Brand>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/caballero">Caballero</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/dama">Dama</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/caballero">
            <Caballero />
          </Route>
          <Route path="/dama">
            <Dama />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
