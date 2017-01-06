import ClearLast from '../calculatorFunctions/ClearLast';
import expect from 'expect';

describe('ClearLast', () => {
  it('expects input of 123 to output "12"', () => {
    expect(ClearLast(123)).toEqual("12");
  });
  it('expects input of "123" to output "12"', () => {
    expect(ClearLast('123')).toEqual("12");
  });
  it('expects input of "7 / " to output "12"', () => {
    expect(ClearLast('7 / ')).toEqual("7");
  });
});
