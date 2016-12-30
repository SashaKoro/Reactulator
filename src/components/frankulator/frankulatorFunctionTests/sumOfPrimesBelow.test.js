import sumOfPrimesBelow from '../frankulatorFunctions/sumOfPrimesBelow';
import expect from 'expect';

describe(sumOfPrimesBelow, function() {
  this.timeout(200);
  it('expects sum of primes under 0 to be 0', function() {
    expect(sumOfPrimesBelow(0)).toEqual(0);
  });
  it('expects sum of primes under 1 to be 0', function() {
    expect(sumOfPrimesBelow(1)).toEqual(0);
  });
  it('expects sum of primes under 2 to be 0', function() {
    expect(sumOfPrimesBelow(2)).toEqual(0);
  });
  it('expects sum of primes under 3 to be 2', function() {
    expect(sumOfPrimesBelow(3)).toEqual(2);
  });
  it('expects sum of primes under 4 to be 5', function() {
    expect(sumOfPrimesBelow(4)).toEqual(5);
  });
  it('expects sum of primes under 9 to be 17', function() {
    expect(sumOfPrimesBelow(9)).toEqual(17);
  });
  it('expects sum of primes under 100 to be 1060', function () {
    expect(sumOfPrimesBelow(100)).toEqual(1060);
  });
});
