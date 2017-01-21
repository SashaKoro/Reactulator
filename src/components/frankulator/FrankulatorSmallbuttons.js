import React, {PropTypes} from 'react';
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

const FrankulatorSmallbuttons = ({theOutput, overWrite, newOutputState, newOutputStateOverWrite}) => {

  const addNumber = inputNum => newOutputState(inputValidator(theOutput, inputNum, overWrite));

  const frankulateReturn = (func, validator) => newOutputStateOverWrite(func(validator(theOutput)));

  return(
    <div>
      <InnerDiv>
        <Button onClick={() => addNumber('7')}>7</Button>
        <Button onClick={() => addNumber('8')}>8</Button>
        <Button onClick={() => addNumber('9')}>9</Button>
        <Button onClick={() => frankulateReturn(primeNumberOrNot, mediumValidator)}>P?</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => addNumber('4')}>4</Button>
        <Button onClick={() => addNumber('5')}>5</Button>
        <Button onClick={() => addNumber('6')}>6</Button>
        <Button onClick={() => frankulateReturn(largestPrimeFactor, mediumValidator)}>L_P</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => addNumber('1')}>1</Button>
        <Button onClick={() => addNumber('2')}>2</Button>
        <Button onClick={() => addNumber('3')}>3</Button>
        <Button onClick={() => frankulateReturn(factorial, standardValidator)}>n!</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => addNumber('0')}>0</Button>
        <Button onClick={() => frankulateReturn(sumOfPrimesBelow, mediumValidator)}>S_P</Button>
        <Button onClick={() => frankulateReturn(triangularOrNot, shortValidator)}>T?</Button>
        <Button onClick={() => frankulateReturn(sumOfDigits, standardValidator)}>D_S</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => frankulateReturn(getAllDivisors, mediumValidator)}>DvC</Button>
        <Button onClick={() => frankulateReturn(allFibonacciBelow, longValidator)}>F_S</Button>
        <Button onClick={() => frankulateReturn(collatzStepCount, longValidator)}>C_C</Button>
        <Button onClick={() => frankulateReturn(semiPrimeOrNot, shortValidator)}>SeP</Button>
      </InnerDiv>
      <InnerDiv>
        <Button onClick={() => frankulateReturn(chenPrimeOrNot, shortValidator)}>C_P</Button>
        <Button onClick={() => frankulateReturn(goodPrimeOrNot, mediumValidator)}>G_P</Button>
        <Button onClick={() => frankulateReturn(woodallNumberOf, longValidator)}>W_N</Button>
      </InnerDiv>
    </div>
  );
};

export default FrankulatorSmallbuttons;
