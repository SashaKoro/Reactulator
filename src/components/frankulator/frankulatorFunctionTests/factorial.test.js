import factorial from '../frankulatorFunctions/factorial';
import expect from 'expect';

describe('factorial', () => {
  it('expects the factorial of 0 to be 1', () => {
    expect(factorial(0)).toEqual(1);
  });
  it('expects the factorial of 1 to be 1', () => {
    expect(factorial(1)).toEqual(1);
  });
  it('expects the factorial of 2 to be 2', () => {
    expect(factorial(2)).toEqual(2);
  });
  it('expects the factorial of 5 to be 120', () => {
    expect(factorial(5)).toEqual(120);
  });
  it('expects the factorial of 11 to be 39916800', () => {
    expect(factorial(11)).toEqual(39916800);
  });
});
