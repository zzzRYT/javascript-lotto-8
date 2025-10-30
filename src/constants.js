/**
 * Store 클래스 관련 상수
 */
export const LOTTO = Object.freeze({
  COST: 1000,
});

/**
 * 에러 관련 상수
 */
export const ERROR = Object.freeze({
  STORE: {
    MONEY_TYPE: '[ERROR] : 구매 비용이 잘못되었습니다.',
    MIN_COST: `[ERROR] : 구매시 ${LOTTO.COST}이상의 값이 필요합니다.`,
  },
});
