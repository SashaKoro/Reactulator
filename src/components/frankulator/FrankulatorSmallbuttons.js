import React from 'react';
import styled from 'styled-components';
import inputCheck from './frankulatorFunctions/inputCheck';
import allFibonacciBelow from './frankulatorFunctions/allFibonacciBelow';
import chenPrimeOrNot from './frankulatorFunctions/chenPrimeOrNot';
import collatzStepCount from './frankulatorFunctions/collatzStepCount';
import getAllDivisors from './frankulatorFunctions/getAllDivisors';
import goodPrimeOrNot from './frankulatorFunctions/goodPrimeOrNot';
import largestPrimeFactor from './frankulatorFunctions/largestPrimeFactor';
import primeNumberOrNot from './frankulatorFunctions/primeNumberOrNot';
import semiPrimeOrNot from './frankulatorFunctions/semiPrimeOrNot';
import sumOfDigits from './frankulatorFunctions/sumOfDigits';
import sumOfPrimesBelow from './frankulatorFunctions/sumOfPrimesBelow';
import triangularOrNot from './frankulatorFunctions/triangularOrNot';
import woodallNumberOf from './frankulatorFunctions/woodallNumberOf';
import factorial from './frankulatorFunctions/factorial';

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
        <Button onClick={() => newOutputStateOverWrite(primeNumberOrNot(theOutput))}>P?</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '4', overWrite))} >4</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '5', overWrite))} >5</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '6', overWrite))} >6</Button>
        <Button onClick={() => newOutputStateOverWrite(largestPrimeFactor(theOutput))}>L_P</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '1', overWrite))} >1</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '2', overWrite))} >2</Button>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '3', overWrite))} >3</Button>
        <Button onClick={() => newOutputStateOverWrite(factorial(theOutput))}>n!</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputState(inputCheck(theOutput, '0', overWrite))} >0</Button>
        <Button onClick={() => newOutputStateOverWrite(sumOfPrimesBelow(theOutput))}>S_P</Button>
        <Button onClick={() => newOutputStateOverWrite(triangularOrNot(theOutput))}>T?</Button>
        <Button onClick={() => newOutputStateOverWrite(sumOfDigits(theOutput))}>D_S</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputStateOverWrite(getAllDivisors(theOutput))}>DvC</Button>
        <Button onClick={() => newOutputStateOverWrite(allFibonacciBelow(theOutput))}>F_S</Button>
        <Button onClick={() => newOutputStateOverWrite(collatzStepCount(theOutput))}>C_C</Button>
        <Button onClick={() => newOutputStateOverWrite(semiPrimeOrNot(theOutput))}>SeP</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => newOutputStateOverWrite(chenPrimeOrNot(theOutput))}>C_P</Button>
        <Button onClick={() => newOutputStateOverWrite(goodPrimeOrNot(theOutput))}>G_P</Button>
        <Button onClick={() => newOutputStateOverWrite(woodallNumberOf(theOutput))}>W_N</Button>
      </InnerDiv>
    </div>
  );
};

export default FrankulatorSmallbuttons;
