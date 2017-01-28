import chenPrimeOrNot from '../frankulatorFunctions/chenPrimeOrNot';
import expect from 'expect';

describe('chenPrimeOrNot', () => {
  it('expects to determine if the inputNum is a Chen Prime or not', () => {
    expect(chenPrimeOrNot(0)).toEqual('0 is NOT prime');
    expect(chenPrimeOrNot(4)).toEqual('4 is NOT prime');
    expect(chenPrimeOrNot(67)).toEqual('67 is a chenprime');
    expect(chenPrimeOrNot(73)).toEqual('73 is a non-chen prime');
    expect(chenPrimeOrNot(101)).toEqual('101 is a chenprime');
    expect(chenPrimeOrNot(105)).toEqual('105 is NOT prime');
    expect(chenPrimeOrNot(241)).toEqual('241 is a non-chen prime');
  });
});
