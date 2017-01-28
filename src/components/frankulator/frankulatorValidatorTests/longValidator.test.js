import longValidator from '../frankulatorValidators/longValidator';
import expect from 'expect';

describe('longValidator', () => {
  it('expects correct validation', () => {
    expect(longValidator()).toEqual('Please enter a number');
    expect(longValidator('abcDEF')).toEqual('Please enter a number');
    expect(longValidator('5.3344115463038834e+243')).toEqual(5.3344115463038834e+243);
  });
});
