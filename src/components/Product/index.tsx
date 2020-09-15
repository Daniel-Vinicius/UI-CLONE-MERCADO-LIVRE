import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Galery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Galery>

          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Gênero: Masculino
      
      Material principal: 100% Algodão Penteado fio 30.1
      Tipo de manga: Curta
      Tipo de gola: Gola redonda
      Unidades por pacote: 1

      Camiseta Lisa 100% Algodão Penteado Fio 30.1 GRAMATURA 160! ( não é fina ou transparente )

      Gola redonda Corte Tradicional

      » Tecido de alta durabilidade
      » Camisetas Lisas confeccionadas com alta tecnologia.
      » Dupla costura - Costuradas em máquinas e linhas de qualidade.

      Tamanhos :
      P - M - G - GG


      <br />
      <br />
      Itens inclusos: <br />
      - 1x Camiseta Branca <br />
      - 1x Brinde cupom de desconto <br />
      - 1x Brinde cupom de desconto <br />
      - 1x Brinde cupom de desconto <br />
      - 1x Brinde cupom de desconto <br />
      <br />
      Dimensões:

Altura x Largura

P - 68cm 49cm
M - 69cm 50cm
G - 73cm 53cm
GG - 74cm 55cm

    </p>
  </Description>
)

export default Product;
