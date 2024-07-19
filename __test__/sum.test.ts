import { expect, test } from 'vitest';
import { sum } from '../src/sum';

test('add 1+ 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('a값의 상한은 100이다.', () => {
  expect(sum(90, 70)).toBe(160);
});

test('a값이 100 이상일 경우 에러가 발생한다.', () => {
  expect(() => sum(110, 20)).toThrow('0~100 사이의 값을 입력해주세요.');
});
