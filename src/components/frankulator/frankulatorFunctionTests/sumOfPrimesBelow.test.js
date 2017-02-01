import sumOfPrimesBelow from '../frankulatorFunctions/sumOfPrimesBelow';
import expect from 'expect';

describe('sumOfPrimesBelow', () => {
  it('expects the correct sum of prime numbers below the inputNum', () => {
    expect(sumOfPrimesBelow(0)).toEqual('0');
    expect(sumOfPrimesBelow(3)).toEqual('2');
    expect(sumOfPrimesBelow(4)).toEqual('5');
    expect(sumOfPrimesBelow(9)).toEqual('17');
    expect(sumOfPrimesBelow(100)).toEqual('1060');
  });
});
