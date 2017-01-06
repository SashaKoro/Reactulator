import sumOfDigits from '../frankulatorFunctions/sumOfDigits';
import expect from 'expect';

describe('sumOfDigits', () => {
  it('expects sum of digits of 0 to be 0', () => {
    expect(sumOfDigits(0)).toEqual(0);
  });
  it('expects sum of digits of 10101 to be 3', () => {
    expect(sumOfDigits(10101)).toEqual(3);
  });
  it('expects sum of digits of 98511100002 to be 27', () => {
    expect(sumOfDigits(98511100002)).toEqual(27);
  });
  it('expects sum of digits of 1234567890 to be 45', () => {
    expect(sumOfDigits(1234567890)).toEqual(45);
  });
});
