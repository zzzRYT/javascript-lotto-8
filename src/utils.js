/**
 * 넘긴 값이 양의정수인지 판별하는 유틸함수
 * @param {number} num
 * @returns boolean
 */
export const isPositiveInteger = (num) => {
  return Number.isInteger(num) && Math.sign(num) === 1;
};

/**
 * 숫자를 넘기면, KO에 맞는 통화 단위를 반환하는 유틸함수
 * @param {number} num
 * @returns string
 */
export const generatedMoneyUnit = (num) => {
  const trimmed = Math.floor(num * 10) / 10;
  return new Intl.NumberFormat('ko-KR', {
    currency: 'krw',
  }).format(trimmed);
};
