import inputValidator from '../frankulatorValidators/inputValidator';
import expect from 'expect';

describe(inputValidator, function() {
  it('expects inputs of "2", "3" and "no" to equal 23', function() {
    expect(inputValidator('2','3','no')).toEqual('23');
  });
  it('expects inputs of "2", "2" and "yes" to equal 2', function() {
    expect(inputValidator('2','2','yes')).toEqual('2');
  });
  it('expects inputs of "1" and " * "  to equal "1 * "', function() {
    expect(inputValidator('1',' * ')).toEqual('1 * ');
  });
  it('expects inputs of "0", "1" and no to equal "1"', function() {
    expect(inputValidator('0','1','no')).toEqual('1');
  });
  it('expects inputs of "0", "0"', function() {
    expect(inputValidator('0', '0')).toEqual('0');
  });
});
