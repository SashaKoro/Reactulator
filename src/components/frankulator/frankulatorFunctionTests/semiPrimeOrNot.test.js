import semiPrimeOrNot from '../frankulatorFunctions/semiPrimeOrNot';
import expect from 'expect';

describe('semiPrimeOrNot', () => {
  it('expects correct determination of whether inputNum is SemiPrime or not', () => {
    expect(semiPrimeOrNot(0)).toEqual("0 is NOT a semiprime");
    expect(semiPrimeOrNot(4)).toEqual("4 is a semiprime");
    expect(semiPrimeOrNot(88)).toEqual("88 is NOT a semiprime");
    expect(semiPrimeOrNot(94)).toEqual("94 is a semiprime");
    expect(semiPrimeOrNot(897413)).toEqual("897413 is NOT a semiprime");
  });
});
