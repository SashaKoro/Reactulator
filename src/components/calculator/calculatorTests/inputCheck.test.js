import inputCheck from '../calculatorFunctions/inputCheck';
import expect from 'expect';

describe('inputCheck', () => {
  it('expects inputs of "2", "3" and false to equal 23', () => {
    expect(inputCheck('2','3', false)).toEqual('23');
  });
  it('expects inputs of "2", "2" and true to equal 2', () => {
    expect(inputCheck('2','2', true)).toEqual('2');
  });
  it('expects inputs of "1" and " * "  to equal "1 * "', () => {
    expect(inputCheck('1',' * ')).toEqual('1 * ');
  });
  it('expects inputs of "." and "." to equal "."', () => {
    expect(inputCheck('.','.')).toEqual('.');
  });
  it('expects inputs of "0", "1" and false to equal "1"', () => {
    expect(inputCheck('0','1', false)).toEqual('1');
  });
  it('expects inputs of "0", "0"', () => {
    expect(inputCheck('0', '0')).toEqual('0');
  });
});
