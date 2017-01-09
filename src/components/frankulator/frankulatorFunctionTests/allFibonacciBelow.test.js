import allFibonacciBelow from '../frankulatorFunctions/allFibonacciBelow';
import expect from 'expect';

describe('allFibonacciBelow', () => {
  it('expects to find the correct sum of Fibonacci numbers below the inputNum', () => {
    expect(allFibonacciBelow(0)).toEqual(0);
    expect(allFibonacciBelow(2)).toEqual(2);
    expect(allFibonacciBelow(20)).toEqual(33);
    expect(allFibonacciBelow(89)).toEqual(143);
  });
});
