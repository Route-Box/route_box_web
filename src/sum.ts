export function sum(a: number, b: number) {
  if (a < 0 || a > 100) {
    throw new Error('0~100 사이의 값을 입력해주세요.');
  }

  return a + b;
}
