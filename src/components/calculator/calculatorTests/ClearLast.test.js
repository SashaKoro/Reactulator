import clearLast from '../calculatorFunctions/ClearLast';
import expect from 'expect';

describe('clearLast', () => {
  it('expects to correctly clear the last inputted value', () => {
    expect(clearLast('123')).toEqual('12');
    expect(clearLast('7 / ')).toEqual('7');
  });
});
