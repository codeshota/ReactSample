import React from 'react';
import { Jumbotron, Button, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../assets/bg-image.jpg';

const Styles = styled.div`
  .jumbo {
    margin: 56px 0 0;
    background: url(${bgImage}) no-repeat fixed bottom;
    background-size: cover;
    color: white;

    .intro {
      padding: 200px 0;
    }
  }
`;

export const Header = () => (
  <Styles>
    <header>
      <Jumbotron fluid className="jumbo text-center">
        <Container className="intro">
          <h2>Fluid jumbotron</h2>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
          <a href="#" className="btn btn-primary">Подробнее</a>
        </Container>
      </Jumbotron>
    </header>
  </Styles>
)