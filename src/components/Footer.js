import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  footer {
    padding: 20px 0;
    background-color: black;

    p {
      color: white;
      margin: 10px 0;
    }
  }
`;

export const Footer = () => (
  <Styles>
    <footer>
      <p className="text-center">Все права защищены &copy; Sample</p>
    </footer>
  </Styles>
)