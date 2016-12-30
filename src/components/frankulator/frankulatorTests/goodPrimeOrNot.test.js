import goodPrimeOrNot from '../frankulatorFunctions/goodPrimeOrNot';
import expect from 'expect';

describe(goodPrimeOrNot, function() {
  this.timeout(200);
  it('expects 0 to not be Prime', function() {
    expect(goodPrimeOrNot(0)).toEqual("0 is NOT prime");
  });
  it('expects 2 to be a non-good Prime', function() {
    expect(goodPrimeOrNot(2)).toEqual("2 is a non-good prime");
  });
  it('expects 53 to be a good Prime', function() {
    expect(goodPrimeOrNot(53)).toEqual("53 is a good prime");
  });
  it('expects 89 to be a non-good Prime', function() {
    expect(goodPrimeOrNot(89)).toEqual("89 is a non-good prime");
  });
  it('expects 149 to be a good Prime', function() {
    expect(goodPrimeOrNot(149)).toEqual("149 is a good prime");
  });
  it('expects 120 to not be Prime', function() {
    expect(goodPrimeOrNot(120)).toEqual("120 is NOT prime");
  });
});
