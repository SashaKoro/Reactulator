import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 68%;
`;

const InnerDiv = styled(Div)`
  height: 17%;
  textAlign: center;
`;

const Button = styled.button`
  height: 90%;
  width: 20.33%;
  fontSize: 19px;
  borderRadius: 20px;
  border: 3px solid rgb(150,150,150);
  backgroundColor: rgb(221,160,221, .5);
  fontFamily: Arial, sans-serif;
  boxShadow: 4px 5px 3px 0 rgba(0, 0, 0, .5);
  marginRight: 3px;
  
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  }
  
  &:hover {
    background-color: rgb(150,150,150);
  }
  
  &:active {
    transform: translateY(3px);
  }
`;

const EqualButton = styled(Button)`
  background-color: rgb(171, 189, 246);
  border: 3px solid rgb(150,150,246);
  
  &:hover {
    background-color: rgb(150,150,246);
  }
`;

class CalculatorSmallbuttons extends Component {
  render(){
    return (
      <Div>
        <InnerDiv>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>x</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
        </InnerDiv>
        <InnerDiv>
          <Button>0</Button>
          <Button>.</Button>
          <EqualButton>=</EqualButton>
          <Button>+</Button>
        </InnerDiv>
      </Div>
    );
  }
}

export default CalculatorSmallbuttons;
