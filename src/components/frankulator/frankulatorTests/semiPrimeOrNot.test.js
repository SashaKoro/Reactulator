import semiPrimeOrNot from '../frankulatorFunctions/semiPrimeOrNot';
import expect from 'expect';

describe(semiPrimeOrNot, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(semiPrimeOrNot()).toEqual("Please enter a number");
  });
  it('expects 0 to not be a semiPrime', function() {
    expect(semiPrimeOrNot(0)).toEqual("0 is NOT a semiprime");
  });
  it('expects 1 to not be a semiPrime', function() {
    expect(semiPrimeOrNot(1)).toEqual("1 is NOT a semiprime");
  });
  it('expects 4 to be a semiPrime', function() {
    expect(semiPrimeOrNot(4)).toEqual("4 is a semiprime");
  });
  it('expects 65 to be a semiPrime', function() {
    expect(semiPrimeOrNot(65)).toEqual("65 is a semiprime");
  });
  it('expects 88 to not be a semiPrime', function() {
    expect(semiPrimeOrNot(88)).toEqual("88 is NOT a semiprime");
  });
  it('expects 94 to be a semiPrime', function() {
    expect(semiPrimeOrNot(94)).toEqual("94 is a semiprime");
  });
  it('expects 897413 to not be a semiPrime', function() {
    expect(semiPrimeOrNot(897413)).toEqual("897413 is NOT a semiprime");
  });
  it('expects "0" to not be a semiPrime', function() {
    expect(semiPrimeOrNot('0')).toEqual("0 is NOT a semiprime");
  });
  it('expects "1" to not be a semiPrime', function() {
    expect(semiPrimeOrNot('1')).toEqual("1 is NOT a semiprime");
  });
  it('expects "65" to be a semiPrime', function() {
    expect(semiPrimeOrNot('65')).toEqual("65 is a semiprime");
  });
  it('expects "88" to not be a semiPrime', function() {
    expect(semiPrimeOrNot('88')).toEqual("88 is NOT a semiprime");
  });
  it('expects "94" to be a semiPrime', function() {
    expect(semiPrimeOrNot('94')).toEqual("94 is a semiprime");
  });
});
