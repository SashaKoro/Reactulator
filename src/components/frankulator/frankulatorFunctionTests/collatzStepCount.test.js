import collatzStepCount from '../frankulatorFunctions/collatzStepCount';
import expect from 'expect';

describe('collatzStepCount', () => {
  it('expects to find the correct Collatz Step Count of the inputNum', () => {
    expect(collatzStepCount(0)).toEqual('Input must be a positive integer');
    expect(collatzStepCount(1)).toEqual('0');
    expect(collatzStepCount(2)).toEqual('1');
    expect(collatzStepCount(13)).toEqual('9');
    expect(collatzStepCount(837799)).toEqual('524');
  });
});
