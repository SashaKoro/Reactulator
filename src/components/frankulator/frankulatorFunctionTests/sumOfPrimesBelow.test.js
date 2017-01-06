import sumOfPrimesBelow from '../frankulatorFunctions/sumOfPrimesBelow';
import expect from 'expect';

describe('sumOfPrimesBelow', () => {
  it('expects sum of primes under 0 to be 0', () => {
    expect(sumOfPrimesBelow(0)).toEqual(0);
  });
  it('expects sum of primes under 1 to be 0', () => {
    expect(sumOfPrimesBelow(1)).toEqual(0);
  });
  it('expects sum of primes under 2 to be 0', () => {
    expect(sumOfPrimesBelow(2)).toEqual(0);
  });
  it('expects sum of primes under 3 to be 2', () => {
    expect(sumOfPrimesBelow(3)).toEqual(2);
  });
  it('expects sum of primes under 4 to be 5', () => {
    expect(sumOfPrimesBelow(4)).toEqual(5);
  });
  it('expects sum of primes under 9 to be 17', () => {
    expect(sumOfPrimesBelow(9)).toEqual(17);
  });
  it('expects sum of primes under 100 to be 1060', () => {
    expect(sumOfPrimesBelow(100)).toEqual(1060);
  });
});
