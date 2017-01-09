import factorial from '../frankulatorFunctions/factorial';
import expect from 'expect';

describe('factorial', () => {
  it('expects to determine the factorial of the inputNum', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(5)).toEqual(120);
    expect(factorial(11)).toEqual(39916800);
  });
});
