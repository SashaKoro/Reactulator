import React, {Component} from 'react';
import styled from 'styled-components';
import inputCheck from './frankulatorFunctions/inputCheck';

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

const FrankulatorSmallbuttons = ({overWrite, theOutput, newOutputState, newOutputStateOverWrite}) => {
  return(
    <div>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '7', overWrite))} >7</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '8', overWrite))} >8</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '9', overWrite))} >9</Button>
        <Button>P?</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '4', overWrite))} >4</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '5', overWrite))} >5</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '6', overWrite))} >6</Button>
        <Button>L_P</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '1', overWrite))} >1</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '2', overWrite))} >2</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '3', overWrite))} >3</Button>
        <Button>n!</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '0', overWrite))} >0</Button>
        <Button>S_P</Button>
        <Button>T?</Button>
        <Button>D_S</Button>
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
};

export default FrankulatorSmallbuttons;
