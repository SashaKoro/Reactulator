import shortValidator from '../frankulatorValidators/shortValidator';
import expect from 'expect';

describe('shortValidator', () => {
  it('expects blank string to prompt Please enter a number', () => {
    expect(shortValidator()).toEqual("Please enter a number");
  });
  it('expects string w/ alpha chars. to prompt Please enter a number', () => {
    expect(shortValidator("abcDEF")).toEqual("Please enter a number");
  });
  it('expects 13 character input to be too long', () => {
    expect(shortValidator(4453090932342)).toEqual("Sorry, number is too long");
  });
});
