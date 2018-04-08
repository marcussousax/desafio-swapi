import React, { Component } from "react";
import styled from "styled-components";

const bkgCard = require("./assets/imgs/bkg-card.svg");
class Card extends Component {
  componentDidMount() {
    console.log("Loading: " + this.props.loading);
    return this.setState({
      loading: false
    });
  }

  render() {
    const { planet, loading } = this.props;
    return (
      <StyledCard loading={loading}>
        <Content>
          <Planet films={planet.films}>{planet.name}</Planet>
          <Population>{planet.population}</Population>
          <Terrain>{planet.terrain}</Terrain>
          <Climate>{planet.climate}</Climate>
        </Content>
        <LogoCard>Star wars</LogoCard>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  -webkit-transition: 100ms all ease;
  transition: 100ms all ease;
  opacity: ${props => (props.loading ? "0.3" : "1")};
  background: #282226 url(${bkgCard}) no-repeat center;
  background-size: 99%;
  border: 5px solid #fff;
  width: 440px;
  height: 640px;
  position: relative;
  text-transform: uppercase;
  box-shadow: 0 0 30px 0px #000;
  &:after {
    content: " ";
  }
  &:before {
    content: " ";
    display: block;
    border: solid #a4988a;
    position: absolute;
    border-width: 0 1.5px 1.5px 0;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  height: calc(100% - 80px);
`;

const Planet = styled.h2`
  color: #282226;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  font-size: 60px;
  line-height: 60px;
  font-weight: 200;
  font-family: "SourceSansPro", sans-serif;
  &:before {
    content: "Planet";
    font-family: "starwarsWebfont", sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
  &:after {
    content: "Featured in ${props => (props.films.length)} films";
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    font-family: "SourceSansPro", sans-serif;
  }
`;

const Meta = styled.p`
  font-size: 30px;
  line-height: 30px;
  font-weight: 200;
  font-family: "SourceSansPro", sans-serif;
  margin: 10px 0;
  text-transform: none;
  &:after {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    font-family: "SourceSansPro", sans-serif;
    text-transform: uppercase;
  }
`;

const Population = Meta.extend`
  &:after {
    content: "Population";
  }
`;

const Terrain = Meta.extend`
  &:after {
    content: "Terrain";
  }
`;

const Climate = Meta.extend`
  &:after {
    content: "Climate";
  }
`;

const LogoCard = styled.div`
  font-family: "starwarsWebfont", sans-serif;
  color: #84786c;
  position: absolute;
  letter-spacing: -1px;
  right: 3px;
  bottom: 3px;
  background: transparent url(${bkgCard}) repeat;
  padding: 10px 10px 4px 10px;
  background-size: 114%;
  background-position: -5px -20px;
`;

export default Card;
