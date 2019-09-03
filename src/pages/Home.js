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

    /* .icons {
      margin-top: 40px;

      .icon {
        background-color: #eee;
        width: 100px;
        padding: 10px;
        margin: 10px;
      }
    } */
  }

  .mailer {
    background: url(${bgImage}) no-repeat fixed bottom;

    h2, p {
      color: white;
    }
  }
`;

export const Home = () => (
  <Styles>
    <section className="advantages py-5">
      <Container className="text-center">
        <h2 className="mb-5">Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam ut id vero magnam eum velit, aliquam possimus aliquid necessitatibus commodi, explicabo aut quos distinctio vitae esse earum enim alias laboriosam tempore ex! Harum in adipisci deleniti doloribus molestias?</p>
        {/* <Row className="justify-content-md-center icons">
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
        </Row> */}
      </Container>
    </section>

    <section className="mailer py-5">
      <Container>
        <h2 className="text-center">Lorem</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email"
            aria-label="Recipient's Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="primary">Lorem</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    </section>
  </Styles>
)