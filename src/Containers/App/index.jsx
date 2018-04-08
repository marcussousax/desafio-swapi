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
    return axios
      .get("https://swapi.co/api/planets")
      .then(response => {
        this.setState({
          loading: false,
          count: response.data.count
        });
        console.log(this.state.count);
      })
      .then(this.getPlanet)
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
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
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    const { loading, planet, count } = this.state;
    return (
      <StyledApp>
        <Header>
          <AppLogo title="star wars" subtitle="desafio b2w" />
        </Header>
        <Content>
          {!count &&
            loading && (
              <Button onClick={this.countPlanets} value="press start" />
            )}
          {planet && <Card loading={loading} planet={planet} />}
          {planet && <Button onClick={this.getPlanet} value="next planet" />}
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
  flex-direction: column;
`;

const Header = styled.header``;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default App;
