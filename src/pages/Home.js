import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import i1 from '../assets/i-1.png';
import i3 from '../assets/i-3.png';
import i4 from '../assets/i-4.png';
import i5 from '../assets/i-5.png';
import hAbout from '../assets/h-about.jpg';

const Styles = styled.div`
  .advantages {
    padding: 80px 0;

    .icons {
      margin-top: 40px;

      .icon {
        background-color: #eee;
        width: 100px;
        padding: 10px;
        margin: 10px;
      }
    }
  }
  .about {
    padding: 80px 0;
    background-color: #eee;

    .ha-image {
      width: 100%;
    }
  }
`;

export const Home = () => (
  <Styles>
    <section className="advantages">
      <Container className="text-center">
        <h2>Компания Sample</h2>
        <p>Рады видеть Вас на нашем сайте! Компания Sample — это Ваша возможность получить все необходимые масла, расходники и запчасти не выходя из дома. Мы не оставим Вас одних с капризами Вашего автомобиля и всегда поможем!</p>
        <Row className="justify-content-md-center icons">
          <Col lg={3}>
            <Image className="icon" src={i1} roundedCircle />
            <p>Бесплатная доставка от 2500 руб.</p>
          </Col>
          <Col lg={3}>
            <Image className="icon" src={i3} roundedCircle />
            <p>Возврат без объяснения причины в течение 14 дней</p>
          </Col>
          <Col lg={3}>
            <Image className="icon" src={i4} roundedCircle />
            <p>Мы проверим все запчасти на совместимость</p>
          </Col>
          <Col lg={3}>
            <Image className="icon" src={i5} roundedCircle />
            <p>Оплата по факту доставки заказа</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="about">
      <Container className="text-left">
        <Row className="justify-content-md-center icons">
          <Col lg={6}>
            <h2>Немного о нас</h2>
            <p>Мы занимаемся продажей запчастей и масел - у нас Вы найдете все, что необходимо для технического обслуживания Вашего автомобиля: масла, фильтры, тормозные диски и колодки, элементы подвески и многое другое.</p>
          </Col>
          <Col lg={6}>
            <Image className="ha-image" src={hAbout} />
          </Col>
        </Row>
      </Container>
    </section>
  </Styles>
)