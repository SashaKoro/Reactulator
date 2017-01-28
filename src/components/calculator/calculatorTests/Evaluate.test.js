import evaluate from '../calculatorFunctions/Evaluate';
import expect from 'expect';

describe('evaluate', () => {
  it('expects correct evaluation of input', () => {
    expect(evaluate('5 + ')).toEqual('5 + ');
    expect(evaluate('0 + 0 - 5')).toEqual('-5');
    expect(evaluate('1 + 7 / 2')).toEqual('4.5');
    expect(evaluate('24 / 2 * 6')).toEqual('72');
    expect(evaluate('300.75 - .25 * 3')).toEqual('300');
    expect(evaluate('2 / 0')).toEqual('Infinity');
    expect(evaluate('.25 * .25')).toEqual('0.0625');
  });
});
