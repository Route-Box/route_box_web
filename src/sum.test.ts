import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum 함수', () => {
  // 기본 기능 테스트
  it('두 양수의 합을 올바르게 반환해야 함', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 20)).toBe(30);
    expect(sum(100, 5)).toBe(105);
  });

  // 경계값 테스트
  it('a의 경계값 테스트', () => {
    expect(sum(0, 5)).toBe(5); // 최소값
    expect(sum(100, 5)).toBe(105); // 최대값
  });

  // 음수 입력 에러 테스트
  it('a가 0보다 작으면 에러를 던져야 함', () => {
    expect(() => sum(-1, 5)).toThrowError('0~100 사이의 값을 입력해주세요.');
    expect(() => sum(-10, 20)).toThrowError('0~100 사이의 값을 입력해주세요.');
  });

  // 범위 초과 에러 테스트
  it('a가 100보다 크면 에러를 던져야 함', () => {
    expect(() => sum(101, 5)).toThrowError('0~100 사이의 값을 입력해주세요.');
    expect(() => sum(150, 20)).toThrowError('0~100 사이의 값을 입력해주세요.');
  });

  // b 값에 대한 테스트 (b에는 제약이 없음)
  it('b는 어떤 값이든 허용해야 함', () => {
    expect(sum(50, -10)).toBe(40);
    expect(sum(50, 0)).toBe(50);
    expect(sum(50, 1000)).toBe(1050);
  });

  // 소수점 테스트
  it('소수점 값 처리 테스트', () => {
    expect(sum(10.5, 20.5)).toBe(31);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // 부동소수점 오차 고려
  });
}); 