import getAllDivisors from '../frankulatorFunctions/getAllDivisors';
import expect from 'expect';

describe('getAllDivisors', () => {
  it('expects 0 to have an infinite number of divisors', () => {
    expect(getAllDivisors(0)).toEqual("infinite number of divisors");
  });
  it('expects 1 to have 1 divisor', () => {
    expect(getAllDivisors(1)).toEqual(1);
  });
  it('expects 2 to have 2 divisors', () => {
    expect(getAllDivisors(2)).toEqual(2);
  });
  it('expects 4 to have 3 divisors', () => {
    expect(getAllDivisors(4)).toEqual(3);
  });
  it('expects 9007 to have 2 divisors', () => {
    expect(getAllDivisors(9007)).toEqual(2);
  });
  it('expects 28 to have 6 divisors', () => {
    expect(getAllDivisors(28)).toEqual(6);
  });
  it('expects 4200000 to have 168 divisors', () => {
    expect(getAllDivisors(4200000)).toEqual(168);
  });
});
