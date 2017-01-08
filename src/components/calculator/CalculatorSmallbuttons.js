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

  const sevenAdd = () =>
    newOutputState(inputCheck(theOutput, '7', impliedOverWrite));

  const eightAdd = () =>
    newOutputState(inputCheck(theOutput, '8', impliedOverWrite));
  const nineAdd = () =>
    newOutputState(inputCheck(theOutput, '9', impliedOverWrite));
  const divide = () =>
    newOutputState(inputCheck(theOutput, ' / ', impliedOverWrite));
  const fourAdd = () =>
    newOutputState(inputCheck(theOutput, '4', impliedOverWrite));
  const fiveAdd = () =>
    newOutputState(inputCheck(theOutput, '5', impliedOverWrite));
  const sixAdd = () =>
    newOutputState(inputCheck(theOutput, '6', impliedOverWrite));
  const multiply = () =>
    newOutputState(inputCheck(theOutput, ' * ', impliedOverWrite));
  const oneAdd = () =>
    newOutputState(inputCheck(theOutput, '1', impliedOverWrite));
  const twoAdd = () =>
    newOutputState(inputCheck(theOutput, '2', impliedOverWrite));
  const threeAdd = () =>
    newOutputState(inputCheck(theOutput, '3', impliedOverWrite));
  const subtract = () =>
    newOutputState(inputCheck(theOutput, ' - ', impliedOverWrite));
  const zeroAdd = () =>
    newOutputState(inputCheck(theOutput, '0', impliedOverWrite));
  const periodAdd = () =>
    newOutputState(inputCheck(theOutput, '.', impliedOverWrite));
  const inputEvaluation = () =>
    newOutputStateOverWrite(Evaluate(theOutput));
  const addition = () =>
    newOutputState(inputCheck(theOutput, ' + ', impliedOverWrite));

  return (
    <Div>
      <InnerDiv>
        <Button onClick={sevenAdd}>7</Button>
        <Button onClick={eightAdd}>8</Button>
        <Button onClick={nineAdd}>9</Button>
        <Button onClick={divide}>/</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={fourAdd}>4</Button>
        <Button onClick={fiveAdd}>5</Button>
        <Button onClick={sixAdd}>6</Button>
        <Button onClick={multiply}>x</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={oneAdd}>1</Button>
        <Button onClick={twoAdd}>2</Button>
        <Button onClick={threeAdd}>3</Button>
        <Button onClick={subtract}>-</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={zeroAdd}>0</Button>
        <Button onClick={periodAdd}>.</Button>
        <EqualButton onClick={inputEvaluation}>=</EqualButton>
        <Button onClick={addition}>+</Button>
      </InnerDiv>
    </Div>
  );
};

export default CalculatorSmallbuttons;
