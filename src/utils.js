/**
 * 넘긴 값이 양의정수인지 판별하는 유틸함수
 * @param {number} num
 * @returns boolean
 */
export const isPositiveInteger = (num) => {
  return Number.isInteger(num) && Math.sign(num) === 1;
};
