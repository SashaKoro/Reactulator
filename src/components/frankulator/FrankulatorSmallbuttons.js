import React, {Component} from 'react';
import styled from 'styled-components';

const InnerDiv = styled.div`
  height: 50px;
`;

const Button = styled.button`
  color: black;
  height: 90%;
  width: 20.33%;
  font-size: 22px;
  border-radius: 7px;
  border: 3px solid rgb(100, 100, 100);
  background-color: rgb(128, 128, 128);
  font-family: Arial, sans-serif;
  box-shadow: 3px 5px 3px 0 rgba(0, 0, 0, .5);
  margin-right: 4px;
  
  &:hover {
    background-color: rgb(150,150,150);
  }
  
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  }
  
  &:active {
    transform: translateY(3px);
  }
`;

class FrankulatorSmallbuttons extends Component {
  render() {
    return(
      <div>
        <InnerDiv>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>sqRt</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>x^2</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>n!</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>0</Button>
          <Button>.</Button>
          <Button>%</Button>
          <Button>D_S</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>P?</Button>
          <Button>L_P</Button>
          <Button>S_P</Button>
          <Button>T?</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>DvC</Button>
          <Button>F_S</Button>
          <Button>C_C</Button>
          <Button>SeP</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>C_P</Button>
          <Button>G_P</Button>
          <Button>W_N</Button>
        </InnerDiv>
      </div>
    );
  }
}

export default FrankulatorSmallbuttons;
