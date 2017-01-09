import inputValidator from '../frankulatorValidators/inputValidator';
import expect from 'expect';

describe('inputValidator', () => {
  it('expects correct validation', () => {
    expect(inputValidator('2','3', false)).toEqual('23');
    expect(inputValidator('2','2', true)).toEqual('2');
    expect(inputValidator('0','1', false)).toEqual('1');
    expect(inputValidator('0', '0')).toEqual('0');
  });
});
