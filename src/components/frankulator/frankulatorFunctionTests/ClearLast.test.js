import ClearLast from '../frankulatorFunctions/ClearLast';
import expect from 'expect';

describe ('ClearLast', () => {
  it('expects to delete the last character from the output', () => {
    expect(ClearLast('34')).toEqual('3');
    expect(ClearLast(34)).toEqual('3');
  });
});
