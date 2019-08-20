import React from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import i1 from '../assets/i-1.png';
import i3 from '../assets/i-3.png';
import i4 from '../assets/i-4.png';
import i5 from '../assets/i-5.png';
import hAbout from '../assets/h-about.jpg';
import bgImage from '../assets/bg-image.jpg';

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

  .mailer {
    padding: 80px 0;
    background: url(${bgImage}) no-repeat fixed bottom;

    h2, p {
      color: white;
    }
  }
`;

export const Home = () => (
  <Styles>
    <section className="advantages">
      <Container className="text-center">
        <h2 className="mb-5">Компания Sample</h2>
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
        <h2 className="text-center mb-5">О нас</h2>
        <Row className="justify-content-md-center icons">
          <Col lg={6} className="mb-3">
            <h3>Низкая цена</h3>
            <hr/>
            <p>За счет применения современных технологий логистики автозапчастей и собственной транспортной компании.</p>
          </Col>
          <Col lg={6} className="mb-3">
            <h3>Быстрая доставка</h3>
            <hr/>
            <p>Доставка в кратчайшие сроки с Московских оптовых складов (1–5 дней) и складов в Европе (6–10 дней).</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center icons">
          <Col lg={6} className="mb-3">
            <h3>Удобный поиск</h3>
            <hr/>
            <p>Автоматизация заказов и удобная поисковая система по складам и прайс-листам всех основных производителей.</p>
          </Col>
          <Col lg={6} className="mb-3">
            <h3>Продаём товар</h3>
            <hr/>
            <p>Автосервисам, Автопаркам, Автомагазинам и в Розницу.</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="mailer">
      <Container>
        <h2 className="text-center">Подписка</h2>
        <p className="text-center">Будь вкурсе наших акций и предложений.</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email"
            aria-label="Recipient's Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="primary">Подписаться</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    </section>
  </Styles>
)