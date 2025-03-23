import {describe, expect, it} from '@jest/globals';
import {div, mul, sub, sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('sub 3 - 1 to equal 2', () => {
    expect(sub(3, 1)).toBe(2);
  });
  it('mul 3 * 2 to equal 6', () => {
    expect(mul(3, 2)).toBe(6);
  });
  it('div 6/3 to equal 2', () => {
    expect(div(6, 3)).toBe(2);
  });
});