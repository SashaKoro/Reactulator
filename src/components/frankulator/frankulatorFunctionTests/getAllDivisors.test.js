import getAllDivisors from '../frankulatorFunctions/getAllDivisors';
import expect from 'expect';

describe('getAllDivisors', () => {
  it('expects to find how many Divisors the inputNum has', () => {
    expect(getAllDivisors(0)).toEqual('infinite number of divisors');
    expect(getAllDivisors(4)).toEqual(3);
    expect(getAllDivisors(28)).toEqual(6);
    expect(getAllDivisors(9007)).toEqual(2);
    expect(getAllDivisors(4200000)).toEqual(168);
  });
});
