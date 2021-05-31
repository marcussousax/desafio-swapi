import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { AppLogo, Button, Card } from 'Components';

import BKG_APP from './bkg-app.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    const storagePlanets = window.localStorage.getItem('planets');
    const storagePlanetIdList = window.localStorage.getItem('planetIdList');

    this.state = {
      loading: true,
      planetIdList: storagePlanetIdList
        ? JSON.parse(storagePlanetIdList)
        : null,
      currentRandomPlanet: null,
      planets: storagePlanets ? JSON.parse(storagePlanets) : {}
    };
  }

  static defaultProps = {
    cacheOnStorage: true,
    apiURL: 'https://swapi.dev/api/planets/'
  };

  componentDidMount() {
    this.checkIfPlanetsOnStorage();
  }

  checkIfPlanetsOnStorage() {
    const { planetIdList } = this.state;

    if (planetIdList) {
      this.setState({
        loading: false,
        planetIdList
      });
      return;
    }
    return this.getPlanetsCount(this.props);
  }

  getPlanetsCount = ({ apiURL }) => {
    return axios
      .get(apiURL)
      .then(({ data: { count } }) => {
        this.setState({
          loading: false,
          planetIdList: this.createPlanetIdList(count)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  createPlanetIdList(planetsCount) {
    const { cacheOnStorage } = this.props;
    const planetIdList = Array(planetsCount)
      .fill()
      .map((e, i) => i + 1);

    if (cacheOnStorage) {
      window.localStorage.setItem('planetIdList', JSON.stringify(planetIdList));
    }

    return planetIdList;
  }

  getPlanet = () => {
    const { planetIdList, planets, loading } = this.state;
    const { apiURL } = this.props;

    if (loading) {
      return;
    }

    const planetId = Math.floor(Math.random() * planetIdList.length) + 1;
    const inMemoryPlanet = planets[planetId];

    if (inMemoryPlanet) {
      this.updateRandomPlanet(inMemoryPlanet, planets, planetId);
      return;
    }

    this.setState({
      loading: true
    });

    return axios
      .get(`${apiURL}${planetId}`)
      .then(({ data: randomPlanet }) =>
        this.updateRandomPlanet(randomPlanet, planets, planetId)
      )
      .catch(error => {
        console.log(error);
      });
  };

  updateRandomPlanet(randomPlanet, planets, planetId) {
    const updatedPlanets = {
      ...planets,
      [planetId]: randomPlanet
    };
    const { cacheOnStorage } = this.props;

    if (cacheOnStorage) {
      window.localStorage.setItem('planets', JSON.stringify(updatedPlanets));
    }

    this.setState({
      currentRandomPlanet: randomPlanet,
      planets: updatedPlanets,
      loading: false
    });
  }

  render() {
    const { loading, currentRandomPlanet } = this.state;

    return (
      <StyledApp>
        <Content>
          <Header>
            <AppLogo title="star wars" subtitle="Random Planets" />
          </Header>
          {currentRandomPlanet && (
            <Card loading={loading} planet={currentRandomPlanet} />
          )}
          <Button
            loading={loading}
            onClick={this.getPlanet}
            value={currentRandomPlanet ? 'Next Planet' : 'Start'}
          />
        </Content>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  background: #282226 url(${BKG_APP}) no-repeat bottom left;
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
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
