import shortValidator from '../frankulatorValidators/shortValidator';
import expect from 'expect';

describe(shortValidator(), function(){
  it('expects blank string to prompt Please enter a number', function() {
    expect(shortValidator()).toEqual("Please enter a number");
  });
  it('expects string w/ alpha chars. to prompt Please enter a number', function() {
    expect(shortValidator("abcDEF")).toEqual("Please enter a number");
  });
  it('expects 13 character input to be too long', function() {
    expect(shortValidator(4453090932342)).toEqual("Sorry, number is too long");
  });
});
