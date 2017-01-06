import chenPrimeOrNot from '../frankulatorFunctions/chenPrimeOrNot';
import expect from 'expect';

describe('chenPrimeOrNot', () => {
  it('expects 0 to not be Prime', () => {
    expect(chenPrimeOrNot(0)).toEqual("0 is NOT prime");
  });
  it('expects 4 to not be Prime', () => {
    expect(chenPrimeOrNot(4)).toEqual("4 is NOT prime");
  });
  it('expects 67 to be a chenPrime', () => {
    expect(chenPrimeOrNot(67)).toEqual("67 is a chenprime");
  });
  it('expects 73 to be a non-chenPrime', () => {
    expect(chenPrimeOrNot(73)).toEqual("73 is a non-chen prime");
  });
  it('expects 101 to be a chenPrime', () => {
    expect(chenPrimeOrNot(101)).toEqual("101 is a chenprime");
  });
  it('expects 105 to not be Prime', () => {
    expect(chenPrimeOrNot(105)).toEqual("105 is NOT prime");
  });
  it('expects 241 to be a non-chenPrime', () => {
    expect(chenPrimeOrNot(241)).toEqual("241 is a non-chen prime");
  });
});
