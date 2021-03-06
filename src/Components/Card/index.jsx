import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

import BKG_CARD from './bkg-card.jpg';

class Card extends Component {
  render() {
    const { planet, loading } = this.props;
    debugger
    return (
      <StyledCard loading={loading}>
        <Content>
          <Planet label="planet" films={planet.films}>
            {planet.name}
          </Planet>
          <Meta label="population">
            <NumberFormat
              value={planet.population}
              displayType={'text'}
              isNumericString={true}
              thousandSeparator="."
              decimalSeparator=","
            />
          </Meta>
          <Meta label="terrain">{planet.terrain}</Meta>
          <Meta label="climate">{planet.climate}</Meta>
        </Content>
        <LogoCard>star wars</LogoCard>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  -webkit-transition: 100ms all ease;
  background-size: 99%;
  background: #282226 url(${BKG_CARD}) no-repeat center;
  border: 5px solid #faf8df;
  box-shadow: 0 0 30px 0px #000;
  height: 640px;
  opacity: ${props => (props.loading ? '0.3' : '1')};
  position: relative;
  text-transform: uppercase;
  transition: 100ms all ease;
  width: 440px;
  @media (max-width: 768px) {
    background-size: cover;
    height: auto;
    width: 70%;
  }

  &:before {
    border: solid #84786c;
    border-width: 0 2px 2px 0;
    bottom: 10px;
    content: ' ';
    display: block;
    left: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  justify-content: flex-end;
  padding: 20px;
`;

const Planet = styled.h2`
  color: #282226;
  display: flex;
  flex-direction: column;
  font-family: "SourceSansPro", sans-serif;
  font-size: 60px;
  font-weight: 200;
  line-height: 60px;
  margin: 30px 0;
  text-indent: -5px;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }

  &:before {
    content: '${props => props.label}';
    font-family: "StarWars", sans-serif;
    font-size: 20px;
    line-height: 20px;
    text-indent: 5px;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 14px;
    }
  }
  &:after {
    content: "${({films}) => films.length !== 0 ? `Featured in ${films.length} movie${films.length !== 1 ? 's': ''} ` : null }";
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
  font-family: 'SourceSansPro', sans-serif;
  margin: 10px 0;
  text-transform: none;
  &:after {
    content: '${props => props.label}';
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    font-family: 'SourceSansPro', sans-serif;
    text-transform: uppercase;
    text-indent: 3px;
  }
`;

const LogoCard = styled.div`
  background: transparent url(${BKG_CARD}) repeat -10px 30px;
  background-size: cover;
  border-radius: 10px 0 0 0;
  bottom: 3px;
  color: #84786c;
  font-family: 'StarWars', sans-serif;
  padding: 0 10px 1px 10px;
  position: absolute;
  right: 3px;
  user-select: none;
`;

export default Card;
