import woodallNumberOf from '../frankulatorFunctions/woodallNumberOf';
import expect from 'expect';

describe('woodallNumberOf', () => {
  it('expects Woodall number of 1 to be 1', () => {
    expect(woodallNumberOf(1)).toEqual(1);
  });
  it('expects Woodall number of 2 to be 7', () => {
    expect(woodallNumberOf(2)).toEqual(7);
  });
  it('expects Woodall number of 7 to be 895', () => {
    expect(woodallNumberOf(7)).toEqual(895);
  });
});
