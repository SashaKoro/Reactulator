import React, {Component} from 'react';
import styled from 'styled-components';
import inputCheck from './calculatorFunctions/inputCheck';
import Evaluate from './calculatorFunctions/Evaluate';

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

const CalculatorSmallbuttons = ({theOutput, newOutputState, impliedOverWrite, newOutputStateOverWrite}) => {
  return (
    <Div>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '7', impliedOverWrite))} >7</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '8', impliedOverWrite))} >8</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '9', impliedOverWrite))} >9</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, ' / ', impliedOverWrite))} >/</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '4', impliedOverWrite))} >4</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '5', impliedOverWrite))} >5</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '6', impliedOverWrite))} >6</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, ' * ', impliedOverWrite))} >x</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '1', impliedOverWrite))} >1</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '2', impliedOverWrite))} >2</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '3', impliedOverWrite))} >3</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, ' - ', impliedOverWrite))} >-</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '0', impliedOverWrite))} >0</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '.', impliedOverWrite))} >.</Button>
        <EqualButton onClick={() => newOutputStateOverWrite(Evaluate(theOutput))} >=</EqualButton>
        <Button onClick={() => newOutputState(inputCheck(theOutput, ' + ', impliedOverWrite))} >+</Button>
      </InnerDiv>
    </Div>
  );
};

export default CalculatorSmallbuttons;
