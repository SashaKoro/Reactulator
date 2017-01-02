import React from 'react';
import styled from 'styled-components';
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

import inputValidator from './frankulatorValidators/inputValidator';
import longValidator from './frankulatorValidators/longValidator';
import mediumValidator from './frankulatorValidators/mediumValidator';
import shortValidator from './frankulatorValidators/shortValidator';
import standardValidator from './frankulatorValidators/standardValidator';



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

  const sevenAdd = () =>
    newOutputState(inputValidator(theOutput, '7', overWrite));
  const eightAdd = () =>
    newOutputState(inputValidator(theOutput, '8', overWrite));
  const nineAdd = () =>
    newOutputState(inputValidator(theOutput, '9', overWrite));
  const fourAdd = () =>
    newOutputState(inputValidator(theOutput, '4', overWrite));
  const fiveAdd = () =>
    newOutputState(inputValidator(theOutput, '5', overWrite));
  const sixAdd = () =>
    newOutputState(inputValidator(theOutput, '6', overWrite));
  const oneAdd = () =>
    newOutputState(inputValidator(theOutput, '1', overWrite));
  const twoAdd = () =>
    newOutputState(inputValidator(theOutput, '2', overWrite));
  const threeAdd = () =>
    newOutputState(inputValidator(theOutput, '3', overWrite));
  const zeroAdd = () =>
    newOutputState(inputValidator(theOutput, '0', overWrite));

  const primeNumberOrNotReturn = () =>
    newOutputStateOverWrite(primeNumberOrNot(mediumValidator(theOutput)));
  const largestPrimeFactorReturn = () =>
    newOutputStateOverWrite(largestPrimeFactor(mediumValidator(theOutput)));
  const factorialReturn = () =>
    newOutputStateOverWrite(factorial(standardValidator(theOutput)));
  const sumOfPrimesBelowReturn = () =>
    newOutputStateOverWrite(sumOfPrimesBelow(standardValidator(theOutput)));
  const triangularOrNotReturn = () =>
    newOutputStateOverWrite(triangularOrNot(shortValidator(theOutput)));
  const sumOfDigitsReturn = () =>
    newOutputStateOverWrite(sumOfDigits(standardValidator(theOutput)));
  const getAllDivisorsReturn = () =>
    newOutputStateOverWrite(getAllDivisors(mediumValidator(theOutput)));
  const allFibonacciBelowReturn = () =>
    newOutputStateOverWrite(allFibonacciBelow(longValidator(theOutput)));
  const collatzStepCountReturn = () =>
    newOutputStateOverWrite(collatzStepCount(longValidator(theOutput)));
  const semiPrimeOrNotReturn = () =>
    newOutputStateOverWrite(semiPrimeOrNot(shortValidator(theOutput)));
  const chenPrimeOrNotReturn = () =>
    newOutputStateOverWrite(chenPrimeOrNot(shortValidator(theOutput)));
  const goodPrimeOrNotReturn = () =>
    newOutputStateOverWrite(goodPrimeOrNot(mediumValidator(theOutput)));
  const woodallNumberOfReturn = () =>
    newOutputStateOverWrite(woodallNumberOf(longValidator(theOutput)));

  return(
    <div>
      <InnerDiv>
        <Button onClick={sevenAdd}>7</Button>
        <Button onClick={eightAdd}>8</Button>
        <Button onClick={nineAdd}>9</Button>
        <Button onClick={primeNumberOrNotReturn}>P?</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={fourAdd}>4</Button>
        <Button onClick={fiveAdd}>5</Button>
        <Button onClick={sixAdd}>6</Button>
        <Button onClick={largestPrimeFactorReturn}>L_P</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={oneAdd}>1</Button>
        <Button onClick={twoAdd}>2</Button>
        <Button onClick={threeAdd}>3</Button>
        <Button onClick={factorialReturn}>n!</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={zeroAdd}>0</Button>
        <Button onClick={sumOfPrimesBelowReturn}>S_P</Button>
        <Button onClick={triangularOrNotReturn}>T?</Button>
        <Button onClick={sumOfDigitsReturn}>D_S</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={getAllDivisorsReturn}>DvC</Button>
        <Button onClick={allFibonacciBelowReturn}>F_S</Button>
        <Button onClick={collatzStepCountReturn}>C_C</Button>
        <Button onClick={semiPrimeOrNotReturn}>SeP</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={chenPrimeOrNotReturn}>C_P</Button>
        <Button onClick={goodPrimeOrNotReturn}>G_P</Button>
        <Button onClick={woodallNumberOfReturn}>W_N</Button>
      </InnerDiv>
    </div>
  );
};

export default FrankulatorSmallbuttons;
