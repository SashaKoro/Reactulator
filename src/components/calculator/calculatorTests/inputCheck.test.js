import inputCheck from '../calculatorFunctions/inputCheck';
import expect from 'expect';

describe('inputCheck', () => {
  it('expects correct input validation', () => {
    expect(inputCheck('2','3', false)).toEqual('23');
    expect(inputCheck('2','2', true)).toEqual('2');
    expect(inputCheck('1',' * ')).toEqual('1 * ');
    expect(inputCheck('.','.')).toEqual('.');
    expect(inputCheck('0','1', false)).toEqual('1');
    expect(inputCheck('0', '0')).toEqual('0');
  });
});
