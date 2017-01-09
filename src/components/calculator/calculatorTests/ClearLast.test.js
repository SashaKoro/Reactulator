import ClearLast from '../calculatorFunctions/ClearLast';
import expect from 'expect';

describe('ClearLast', () => {
  it('expects to correctly clear the last inputted value', () => {
    expect(ClearLast(123)).toEqual("12");
    expect(ClearLast('123')).toEqual("12");
    expect(ClearLast('7 / ')).toEqual("7");
  });
});
