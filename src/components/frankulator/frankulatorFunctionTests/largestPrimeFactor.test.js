import largestPrimeFactor from '../frankulatorFunctions/largestPrimeFactor';
import expect from 'expect';

describe('largestPrimeFactor', () => {
  it('expects 0 to have no prime factor', () => {
    expect(largestPrimeFactor(0)).toEqual("No prime factor");
  });
  it('expects 1 to have no prime factor', () => {
    expect(largestPrimeFactor(1)).toEqual("No prime factor");
  });
  it('expects 2 to have no prime factor', () => {
    expect(largestPrimeFactor(2)).toEqual("No prime factor");
  });
  it('expects 3 to have no prime factor', () => {
    expect(largestPrimeFactor(3)).toEqual("No prime factor");
  });
  it('expects largest prime factor of 4 to be 2', () => {
    expect(largestPrimeFactor(4)).toEqual(2);
  });
  it('expects largest prime factor of 49 to be 7', () => {
    expect(largestPrimeFactor(49)).toEqual(7);
  });
  it('expects largest prime factor of 324252 to be 9007', () => {
    expect(largestPrimeFactor(324252)).toEqual(9007);
  });
});
