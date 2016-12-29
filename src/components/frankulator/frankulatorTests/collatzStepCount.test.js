import collatzStepCount from '../frankulatorFunctions/collatzStepCount';
import expect from 'expect';

describe(collatzStepCount, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(collatzStepCount()).toEqual("Please enter a number");
  });
  it('expects decimal number to prompt Number must be an Integer', function() {
    expect(collatzStepCount(2.5)).toEqual("Number must be an Integer");
  });
  it('expects 0 to not be a positive integer', function() {
    expect(collatzStepCount(0)).toEqual("Input must be a positive integer");
  });
  it('expects 1 to have a collatz chain of 0 steps', function() {
    expect(collatzStepCount(1)).toEqual(0);
  });
  it('expects 2 to have a collatz chain of 1 step', function() {
    expect(collatzStepCount(2)).toEqual(1);
  });
  it('expects 13 to have a collatz chain of 9 steps', function() {
    expect(collatzStepCount(13)).toEqual(9);
  });
  it('expects 837799 to have a collatz chain of 524 steps', function() {
    expect(collatzStepCount(837799)).toEqual(524);
  });
  it('expects "0" to not be a positive integer', function() {
    expect(collatzStepCount("0")).toEqual("Input must be a positive integer");
  });
  it('expects "1" to have a collatz chain of 0 steps', function() {
    expect(collatzStepCount("1")).toEqual(0);
  });
  it('expects "2" to have a collatz chain of 1 step', function() {
    expect(collatzStepCount("2")).toEqual(1);
  });
  it('expects "13" to have a collatz chain of 9 steps', function() {
    expect(collatzStepCount("13")).toEqual(9);
  });
  it('expects "837799" to have a collatz chain of 524 steps', function() {
    expect(collatzStepCount("837799")).toEqual(524);
  });
});
