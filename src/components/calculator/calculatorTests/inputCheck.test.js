import inputCheck from '../calculatorFunctions/inputCheck';
import expect from 'expect';

describe(inputCheck, function() {
  it('expects inputs of "2", "3" and "no" to equal 23', function() {
    expect(inputCheck('2','3','no')).toEqual('23');
  });
  it('expects inputs of "2", "2" and "maybe" to equal 2', function() {
    expect(inputCheck('2','2','maybe')).toEqual('2');
  });
  it('expects inputs of "1" and " * "  to equal "1 * "', function() {
    expect(inputCheck('1',' * ')).toEqual('1 * ');
  });
  it('expects inputs of "." and "." to equal "."', function() {
    expect(inputCheck('.','.')).toEqual('.');
  });
  it('expects inputs of "0", "1" and no to equal "1"', function() {
    expect(inputCheck('0','1','no')).toEqual('1');
  });
  it('expects inputs of "0", "0"', function() {
    expect(inputCheck('0', '0')).toEqual('0');
  });
});
