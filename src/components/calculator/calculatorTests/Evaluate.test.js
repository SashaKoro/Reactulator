import Evaluate from '../calculatorFunctions/Evaluate';
import expect from 'expect';

describe('Evaluate', () => {
  it('expects correct evaluation of input', () => {
    expect(Evaluate("5 + ")).toEqual("5 + ");
    expect(Evaluate("0 + 0 - 5")).toEqual(-5);
    expect(Evaluate("1 + 7 / 2")).toEqual(4.5);
    expect(Evaluate("24 / 2 * 6")).toEqual(72);
    expect(Evaluate("300.75 - .25 * 3")).toEqual(300);
    expect(Evaluate("2 / 0")).toEqual(Infinity);
    expect(Evaluate(".25 * .25")).toEqual(0.0625);
  });
});
