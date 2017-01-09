import standardValidator from '../frankulatorValidators/standardValidator';
import expect from 'expect';

describe('standardValidator', () => {
  it('expects correct validation', () => {
    expect(standardValidator()).toEqual("Please enter a number");
    expect(standardValidator("abcDEF")).toEqual("Please enter a number");
  });
});
