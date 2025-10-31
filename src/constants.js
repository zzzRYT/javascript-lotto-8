/**
 * Store 클래스 관련 상수
 */
export const LOTTO = Object.freeze({
  COST: 1000,
});

/**
 * Statistics 클래서 관련 상수
 */
export const WINNER = Object.freeze({
  FINAL_RANK: 3,
  RANK: {
    3: 'FOURTH',
    4: 'THIRD',
    5: 'SECOND',
    6: 'FIRST',
    7: 'BOUNCE',
  },
  PRIZE: {
    FOURTH: 5000,
    THIRD: 50000,
    SECOND: 1500000,
    FIRST: 2000000000,
    BOUNCE: 30000000,
  },
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
