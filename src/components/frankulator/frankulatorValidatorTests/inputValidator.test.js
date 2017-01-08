import inputValidator from '../frankulatorValidators/inputValidator';
import expect from 'expect';

describe('inputValidator', () => {
  it('expects inputs of "2", "3" and false to equal 23', () => {
    expect(inputValidator('2','3', false)).toEqual('23');
  });
  it('expects inputs of "2", "2" and true to equal 2', () => {
    expect(inputValidator('2','2', true)).toEqual('2');
  });
  it('expects inputs of "0", "1" and false to equal "1"', () => {
    expect(inputValidator('0','1', false)).toEqual('1');
  });
  it('expects inputs of "0", "0"', () => {
    expect(inputValidator('0', '0')).toEqual('0');
  });
});
