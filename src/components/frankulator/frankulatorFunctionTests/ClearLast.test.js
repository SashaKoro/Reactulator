import ClearLast from '../frankulatorFunctions/ClearLast';
import expect from 'expect';

describe (ClearLast, function() {
  it('expects to delete the last character from the output', function() {
    expect(ClearLast('34')).toEqual('3');
  });
  it('expects to delete the last character from the output', function() {
    expect(ClearLast(34)).toEqual('3');
  });
});
