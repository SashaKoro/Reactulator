import goodPrimeOrNot from '../frankulatorFunctions/goodPrimeOrNot';
import expect from 'expect';

describe('goodPrimeOrNot', () => {
  it('expects to determine whether the inputNum is a Good Prime or not', () => {
    expect(goodPrimeOrNot(0)).toEqual("0 is NOT prime");
    expect(goodPrimeOrNot(2)).toEqual("2 is a non-good prime");
    expect(goodPrimeOrNot(53)).toEqual("53 is a good prime");
    expect(goodPrimeOrNot(89)).toEqual("89 is a non-good prime");
    expect(goodPrimeOrNot(149)).toEqual("149 is a good prime");
    expect(goodPrimeOrNot(120)).toEqual("120 is NOT prime");
  });
});
