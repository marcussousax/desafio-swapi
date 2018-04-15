import React, { Component } from 'react';
import styled from 'styled-components';

class AppLogo extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subtitle}</SubTitle>
      </Container>
    );
  }
}

const Container = styled.div`
  font-family: 'StarWars', sans-serif;
  text-align: center;
  width: 150px;
  user-select: none;
`;

const Title = styled.h1`
  color: #ffe115;
  font-size: 50px;
  line-height: 39px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const SubTitle = styled.span`
  color: #fff;
  font-size: 18px;
  margin: 0;
`;

export default AppLogo;
