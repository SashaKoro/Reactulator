import woodallNumberOf from '../frankulatorFunctions/woodallNumberOf';
import expect from 'expect';

describe('woodallNumberOf', () => {
  it('expects correct Woodall numbers', () => {
    expect(woodallNumberOf(1)).toEqual(1);
    expect(woodallNumberOf(2)).toEqual(7);
    expect(woodallNumberOf(7)).toEqual(895);
  });
});
