/**
 * Input 클래스 관련 상수
 */
export const INPUT = {
  MONEY: '구매금액을 입력해 주세요.\n',
  WINNER: '당첨 번호를 입력해 주세요.\n',
  BOUNCE: '보너스 번호를 입력해 주세요.\n',
};

/**
 * Output 클래스 관련 상수
 */
export const OUTPUT = {
  PURCHASED: {
    COUNT: '개를 구매했습니다.',
  },
  STATISTICS: {
    TITLE: '당첨 통계\n---',
  },
};

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
  INPUT: {
    COST: '[ERROR] : 구매 비용을 잘못 입력하셨습니다.',
    WINNER_NUMBERS: '[ERROR] : 우승 번호는 1~45사이 숫자여야 합니다.',
    BOUNCE: '[ERROR] : 보너스는 숫자여야 합니다.',
  },
  LOTTO: {
    LENGTH: '[ERROR] : 로또 번호는 6개여야 합니다.',
    DUPLICATE: '[ERROR] : 로또 번호에 중복이 있습니다.',
    RANGE: '[ERROR] : 로또 번호는 1 ~ 45사이의 수 입니다.',
  },
  STORE: {
    MONEY_TYPE: '[ERROR] : 구매 비용이 잘못되었습니다.',
    MIN_COST: `[ERROR] : 구매시 ${LOTTO.COST}이상의 값이 필요합니다.`,
  },
});
