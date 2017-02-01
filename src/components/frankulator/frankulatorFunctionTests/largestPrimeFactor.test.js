import largestPrimeFactor from '../frankulatorFunctions/largestPrimeFactor';
import expect from 'expect';

describe('largestPrimeFactor', () => {
  it('expects to find the correct largest Prime Factor of inputNum', () => {
    expect(largestPrimeFactor(0)).toEqual('No prime factor');
    expect(largestPrimeFactor(3)).toEqual('No prime factor');
    expect(largestPrimeFactor(4)).toEqual('2');
    expect(largestPrimeFactor(49)).toEqual('7');
    expect(largestPrimeFactor(324252)).toEqual('9007');
  });
});
