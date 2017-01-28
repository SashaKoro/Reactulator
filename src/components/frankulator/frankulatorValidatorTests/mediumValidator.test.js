import mediumValidator from '../frankulatorValidators/mediumValidator';
import expect from 'expect';

describe('mediumValidator', () => {
  it('expects correct validation', () => {
    expect(mediumValidator()).toEqual('Please enter a number');
    expect(mediumValidator('abcDEF')).toEqual('Please enter a number');
    expect(mediumValidator(4453090932342585)).toEqual('Sorry, number is too long');
  });
});
