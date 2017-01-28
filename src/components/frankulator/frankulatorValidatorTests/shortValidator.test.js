import shortValidator from '../frankulatorValidators/shortValidator';
import expect from 'expect';

describe('shortValidator', () => {
  it('expects correct validation', () => {
    expect(shortValidator()).toEqual('Please enter a number');
    expect(shortValidator('abcDEF')).toEqual('Please enter a number');
    expect(shortValidator(4453090932342)).toEqual('Sorry, number is too long');
  });
});
