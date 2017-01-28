import clearLast from '../frankulatorFunctions/ClearLast';
import expect from 'expect';

describe ('clearLast', () => {
  it('expects to delete the last character from the output', () => {
    expect(clearLast('34')).toEqual('3');
    expect(clearLast(34)).toEqual('3');
  });
});
