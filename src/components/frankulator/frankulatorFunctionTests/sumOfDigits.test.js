import sumOfDigits from '../frankulatorFunctions/sumOfDigits';
import expect from 'expect';

describe('sumOfDigits', () => {
  it('expects the correct sum of digits of the inputNum', () => {
    expect(sumOfDigits(0)).toEqual('0');
    expect(sumOfDigits(10101)).toEqual('3');
    expect(sumOfDigits(1234567890)).toEqual('45');
  });
});
