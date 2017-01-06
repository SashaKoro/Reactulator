import longValidator from '../frankulatorValidators/longValidator';
import expect from 'expect';

describe('longValidator', () => {
  it('expects very long number to be passed down', () => {
    expect(longValidator('5.3344115463038834e+243')).toEqual(5.3344115463038834e+243);
  });
  it('expects blank string to prompt Please enter a number', () => {
    expect(longValidator()).toEqual("Please enter a number");
  });
  it('expects string w/ alpha chars. to prompt Please enter a number', () => {
    expect(longValidator("abcDEF")).toEqual("Please enter a number");
  });
});
