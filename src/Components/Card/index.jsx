import React, { Component } from "react";
import NumberFormat from 'react-number-format';
import styled from "styled-components";

const bkgCard = require("./bkg-card.jpg");

class Card extends Component {
  componentDidMount() {
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
          <Population><NumberFormat value={planet.population} displayType={'text'} isNumericString={true} thousandSeparator="." decimalSeparator="," /></Population>
          <Terrain>{planet.terrain}</Terrain>
          <Climate>{planet.climate}</Climate>
        </Content>
        <LogoCard>star wars</LogoCard>
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
  border: 5px solid #FAF8DF;
  width: 440px;
  height: 640px;
  @media (max-width: 768px) {
    background-size: cover;
    height: auto;
    width: 70%;
  }
  position: relative;
  text-transform: uppercase;
  box-shadow: 0 0 30px 0px #000;
  &:after {
    content: " ";
  }
  &:before {
    content: " ";
    display: block;
    border: solid #84786c;
    position: absolute;
    border-width: 0 2px 2px 0;
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
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
  line-height: 60px;
  font-weight: 200;
  font-family: "SourceSansPro", sans-serif;
  text-indent: -5px;
  &:before {
    content: "planet";
    font-family: "StarWars", sans-serif;
    font-size: 20px;
    line-height: 20px;
    text-indent: 5px;
  }
  &:after {
    content: "Featured in ${props => props.films.length} films";
    font-family: "SourceSansPro", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    text-indent: 5px;
  }
`;

const Meta = styled.p`
  font-size: 30px;
  line-height: 33px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
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
    text-indent: 3px;
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
  background: transparent url(${bkgCard}) repeat -10px 30px;
  background-size: cover;
  border-radius: 10px 0 0 0;
  bottom: 3px;
  color: #84786c;
  font-family: "StarWars", sans-serif;
  padding: 0 10px 1px 10px;
  position: absolute;
  right: 3px;
`;

export default Card;
