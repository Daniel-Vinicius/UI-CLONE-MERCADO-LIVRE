import React from "react";

import { Container, FooterEstilo } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterEstilo>
        <div className='footer-content'>
          <ul>
            <li>
              <a href='#'>Trabalhe conosco</a>
            </li>
            <li>
              <a href='#'> Termos e condições</a>
            </li>
            <li>
              <a href='#'>Como cuidamos da sua privacidade</a>
            </li>
            <li>
              <a href='#'>Contato</a>
            </li>
          </ul>
          <p>
          Copyright © 1999-2020 Ebazar.com.br LTDA. <br/>
          CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - 
          empresa do grupo Mercado Livre.
          </p>
        </div>
      </FooterEstilo>
    </Container>
  );
};

export default Footer;