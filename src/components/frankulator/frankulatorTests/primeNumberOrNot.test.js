import primeNumberOrNot from '../frankulatorFunctions/primeNumberOrNot';
import expect from 'expect';

describe(primeNumberOrNot, function() {
  this.timeout(200);
  it('expects 0 to not be a prime number', function() {
    expect(primeNumberOrNot(0)).toEqual("0 is NOT prime");
  });
  it('expects 1 to not be a prime number', function() {
    expect(primeNumberOrNot(1)).toEqual("1 is NOT prime");
  });
  it('expects 2 to be a prime number', function() {
    expect(primeNumberOrNot(2)).toEqual("2 is prime");
  });
  it('expects 3 to be a prime number', function() {
    expect(primeNumberOrNot(3)).toEqual("3 is prime");
  });
  it('expects 4 to not be a prime number', function() {
    expect(primeNumberOrNot(4)).toEqual("4 is NOT prime");
  });
  it('expects 104743 to be a prime number', function() {
    expect(primeNumberOrNot(104743)).toEqual("104743 is prime");
  });
});

