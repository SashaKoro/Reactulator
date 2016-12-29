import getAllDivisors from '../frankulatorFunctions/getAllDivisors';
import expect from 'expect';

describe(getAllDivisors, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(getAllDivisors()).toEqual("Please enter a number");
  });
  it('expects decimal number to prompt Number must be an Integer', function() {
    expect(getAllDivisors(2.5)).toEqual("Number must be an Integer");
  });
  it('expects 0 to have an infinite number of divisors', function() {
    expect(getAllDivisors(0)).toEqual("infinite number of divisors");
  });
  it('expects 1 to have 1 divisor', function() {
    expect(getAllDivisors(1)).toEqual(1);
  });
  it('expects 2 to have 2 divisors', function() {
    expect(getAllDivisors(2)).toEqual(2);
  });
  it('expects 4 to have 3 divisors', function() {
    expect(getAllDivisors(4)).toEqual(3);
  });
  it('expects 9007 to have 2 divisors', function() {
    expect(getAllDivisors(9007)).toEqual(2);
  });
  it('expects 28 to have 6 divisors', function() {
    expect(getAllDivisors(28)).toEqual(6);
  });
  it('expects 213400 to have 168 divisors', function() {
    expect(getAllDivisors(4200000)).toEqual(168);
  });
  it('expects "0" to have an infinite number of divisors', function() {
    expect(getAllDivisors("0")).toEqual("infinite number of divisors");
  });
  it('expects "1" to have 1 divisor', function() {
    expect(getAllDivisors("1")).toEqual(1);
  });
  it('expects "2" to have 2 divisors', function() {
    expect(getAllDivisors("2")).toEqual(2);
  });
  it('expects "4" to have 3 divisors', function() {
    expect(getAllDivisors("4")).toEqual(3);
  });
  it('expects "9007" to have 2 divisors', function() {
    expect(getAllDivisors("9007")).toEqual(2);
  });
  it('expects "28" to have 6 divisors', function() {
    expect(getAllDivisors("28")).toEqual(6);
  });
  it('expects "213400" to have 168 divisors', function() {
    expect(getAllDivisors("4200000")).toEqual(168);
  });
});
