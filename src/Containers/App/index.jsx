import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import AppLogo from "../../Components/AppLogo";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

const bkgApp = require("./bkg-app.svg");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.countPlanets = this.countPlanets.bind(this);
    this.getPlanet = this.getPlanet.bind(this);
  }

  countPlanets() {
    this.setState({
      loading: true
    });
    return axios
      .get("https://swapi.co/api/planets")
      .then(response => {
        this.setState({
          loading: false,
          count: response.data.count
        });
      })
      .then(this.getPlanet)
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  getPlanet() {
    const planetId = Math.floor(Math.random() * this.state.count + 1);
    this.setState({
      loading: true
    });
    return axios
      .get(`https://swapi.co/api/planets/${planetId}`)
      .then(response => {
        this.setState({
          planet: response.data,
          loading: false
        });
      })
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    const { loading, planet, count } = this.state;
    return (
      <StyledApp>
        <Content>
          <Header>
            <AppLogo title="star wars" subtitle="desafio b2w" />
          </Header>
          {planet && <Card loading={loading} planet={planet} />}
          {!count &&
            loading && (
              <Button onClick={this.countPlanets} value="start" />
            )}

          {planet && (
            <Button
              loading={loading}
              onClick={this.getPlanet}
              value="next planet"
            />
          )}
        </Content>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  background: #282226 url(${bkgApp}) no-repeat bottom left;
  padding: 20px;
  height: calc(100vh - 40px); /* 40px padding top & bottom */
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
  }
`;

const Header = styled.header``;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;
