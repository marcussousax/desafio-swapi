import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AppLogo from '../../Components/AppLogo';
import Button from '../../Components/Button';
import Card from '../../Components/Card';

const bkgApp = require('./bkg-app.svg');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.countPlanets = this.countPlanets.bind(this);
    this.getPlanet = this.getPlanet.bind(this);
  }

  componentDidMount() {
    this.countPlanets();
  }

  countPlanets() {
    return axios
      .get('https://swapi.co/api/planets')
      .then(response => {
        this.setState({
          loading: false,
          count: response.data.count
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPlanet() {
    this.setState({
      loading: true
    });
    const planetId = Math.floor(Math.random() * this.state.count + 1);
    return axios
      .get(`https://swapi.co/api/planets/${planetId}`)
      .then(response => {
        this.setState({
          planet: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { loading, planet } = this.state;
    return (
      <StyledApp>
        <Content>
          <Header>
            <AppLogo title="star wars" subtitle="desafio b2w" />
          </Header>
          {planet && <Card loading={loading} planet={planet} />}
          <Button
            loading={loading}
            onClick={this.getPlanet}
            value={planet ? 'Next Planet' : 'Start'}
          />
        </Content>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  background: #282226 url(${bkgApp}) no-repeat bottom left;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 40px); /* 40px padding top & bottom */
  padding: 20px;

  @media (max-width: 768px) {
    background-position: center;
    background-size: cover;
    flex-direction: column;
    height: 100vh;
    padding: 0;
  }
`;

const Header = styled.header``;
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;
