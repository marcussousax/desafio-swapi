import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const { loading, value, onClick } = this.props;

    const loadingText = 'Loading';

    return (
      <StyledButton className={loading ? 'is-loading' : null} onClick={onClick}>
        <span>{loading ? loadingText : value}</span>
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  & {
    background: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: 0 8px 0 #c3ab0c, 0 15px 20px rgba(0, 0, 0, 0.35);
    color: #fff;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    transition: box-shadow 0.1s ease-in-out;
    width: 200px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  & span {
    background-color: #ffe115;
    border-radius: 4px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
    display: inline-block;
    font-family: 'SourceSansPro', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    padding: 20px 30px;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    width: 140px;
  }

  &:hover span {
    background-color: #f0d93f;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, 0.9),
      0 0 5px rgba(255, 255, 255, 0.8);
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: 0 8px 0 #948628, 0 12px 10px rgba(0, 0, 0, 0.3);
  }

  &:active span {
    transform: translate(0, 4px);
  }

  &.is-loading {
    opacity: 0.7;
    span {
      transform: translate(0, 4px);
    }
  }
`;

export default Button;
