import chenPrimeOrNot from '../frankulatorFunctions/chenPrimeOrNot';
import expect from 'expect';

describe(chenPrimeOrNot, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(chenPrimeOrNot()).toEqual("Please enter a number");
  });
  it('expects decimal number to prompt Number must be an Integer', function() {
    expect(chenPrimeOrNot(2.5)).toEqual("Number must be an Integer");
  });
  it('expects 0 to not be Prime', function() {
    expect(chenPrimeOrNot(0)).toEqual("0 is NOT prime");
  });
  it('expects 4 to not be Prime', function() {
    expect(chenPrimeOrNot(4)).toEqual("4 is NOT prime");
  });
  it('expects 67 to be a chenPrime', function() {
    expect(chenPrimeOrNot(67)).toEqual("67 is a chenprime");
  });
  it('expects 73 to be a non-chenPrime', function() {
    expect(chenPrimeOrNot(73)).toEqual("73 is a non-chen prime");
  });
  it('expects 101 to be a chenPrime', function() {
    expect(chenPrimeOrNot(101)).toEqual("101 is a chenprime");
  });
  it('expects 105 to not be Prime', function() {
    expect(chenPrimeOrNot(105)).toEqual("105 is NOT prime");
  });
  it('expects 241 to be a non-chenPrime', function() {
    expect(chenPrimeOrNot(241)).toEqual("241 is a non-chen prime");
  });
  it('expects "0" to not be Prime', function() {
    expect(chenPrimeOrNot('0')).toEqual("0 is NOT prime");
  });
  it('expects "4" to not be Prime', function() {
    expect(chenPrimeOrNot('4')).toEqual("4 is NOT prime");
  });
  it('expects "67" to be a chenPrime', function() {
    expect(chenPrimeOrNot('67')).toEqual("67 is a chenprime");
  });
  it('expects "73" to be a non-chenPrime', function() {
    expect(chenPrimeOrNot('73')).toEqual("73 is a non-chen prime");
  });
});
