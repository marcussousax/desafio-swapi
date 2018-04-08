import React, { Component } from "react";
import styled from "styled-components";

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
  width: 150px;
  text-align: center;
`;

const Title = styled.h1`
  color: #ffe115;
  text-transform: uppercase;
  margin: 0;
  font-size: 50px;
  line-height: 39px;
  text-align: center;
`;

const SubTitle = styled.span`
  color: #fff;
  margin: 0;
  font-size: 18px;
`;

export default AppLogo;
