import Evaluate from '../calculatorFunctions/Evaluate';
import expect from 'expect';

describe(Evaluate, function() {
  it('expects "5 + " to return "5 + "', function() {
    expect(Evaluate("5 + ")).toEqual("5 + ");
  });
  it('expects "0 + 0 - 5" to return -5', function() {
    expect(Evaluate("0 + 0 - 5")).toEqual(-5);
  });
  it('expects "1 + 7 / 2" to return 4.5', function() {
    expect(Evaluate("1 + 7 / 2")).toEqual(4.5);
  });
  it('expects "24 / 2 * 6" to return 72', function() {
    expect(Evaluate("24 / 2 * 6")).toEqual(72);
  });
  it('expects "300.75 - .25 * 3" to return 300', function() {
    expect(Evaluate("300.75 - .25 * 3")).toEqual(300);
  });
  it('expects "2 / 0" to return "Infinity"', function() {
    expect(Evaluate("2 / 0")).toEqual(Infinity);
  });
  it('expects ".25 * .25" to return 0.0625', function() {
    expect(Evaluate(".25 * .25")).toEqual(0.0625);
  });
});
