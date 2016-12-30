import standardValidator from '../frankulatorValidators/standardValidator';
import expect from 'expect';

describe(standardValidator(), function(){
  it('expects blank string to prompt Please enter a number', function() {
    expect(standardValidator()).toEqual("Please enter a number");
  });
  it('expects string w/ alpha chars. to prompt Please enter a number', function() {
    expect(standardValidator("abcDEF")).toEqual("Please enter a number");
  });
});
