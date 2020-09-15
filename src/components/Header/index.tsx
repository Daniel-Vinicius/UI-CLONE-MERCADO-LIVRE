import React from "react";

import logo from "../../assets/logo-mercado-livre.png";

import { Container, Img, Nav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <div className='header-content'>
          <div className='logo'>
            <a href='#'>
              <Img
                alt='logo-mercado-livre'
                title='Logo Do Mercado Livre'
                src={logo}
              />
            </a>
          </div>
          <Nav className='nav'>
            <ul>
              <li>
                <a href='#'>Cadastre-se</a>
              </li>
              <li>
                <a href='#'>Entre</a>
              </li>
              <li>
                <a href='#'>Compras</a>
              </li>
            </ul>
          </Nav>
        </div>
      </header>
    </Container>
  );
};

export default Header;
