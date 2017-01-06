import mediumValidator from '../frankulatorValidators/mediumValidator';
import expect from 'expect';

describe('mediumValidator', () => {
  it('expects blank string to prompt Please enter a number', () => {
    expect(mediumValidator()).toEqual("Please enter a number");
  });
  it('expects string w/ alpha chars. to prompt Please enter a number', () => {
    expect(mediumValidator("abcDEF")).toEqual("Please enter a number");
  });
  it('expects 16 character input to be too long', () => {
    expect(mediumValidator(4453090932342585)).toEqual("Sorry, number is too long");
  });
});
