import React from 'react';
import { Jumbotron, Button, Container} from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../assets/bg-image.jpg';

const Styles = styled.div`
  .jumbo {
    margin-top: 56px;
    background: url(${bgImage}) no-repeat fixed bottom;
    background-size: cover;
    height: 300px;
    color: white;
  }
`;

export const Header = () => (
  <Styles>
    <header>
      <Jumbotron fluid className="jumbo text-center">
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </Jumbotron>
    </header>
  </Styles>
)