import primeNumberOrNot from '../frankulatorFunctions/primeNumberOrNot';
import expect from 'expect';

describe('primeNumberOrNot', () => {
  it('expects correct evaluation of whether the inputNum is Prime or not', () => {
    expect(primeNumberOrNot(0)).toEqual("0 is NOT prime");
    expect(primeNumberOrNot(2)).toEqual("2 is prime");
    expect(primeNumberOrNot(4)).toEqual("4 is NOT prime");
    expect(primeNumberOrNot(27)).toEqual("27 is NOT prime");
    expect(primeNumberOrNot(104743)).toEqual("104743 is prime");
  });
});

