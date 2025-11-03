import { BONUS } from '../src/constants';
import Statistics from '../src/domain/Statistics';

describe('Statistics 클래스 테스트', () => {
  let statistics;

  beforeEach(() => {
    statistics = new Statistics([1, 2, 3, 4, 5, 6], 7);
  });

  test.each([
    {
      lotto: [1, 2, 3, 4, 5, 6],
      result: 6,
    },
    { lotto: [1, 2, 3, 4, 5, 7], result: 5 },
  ])(
    '$lotto 에서 당첨 번호화 동일한 수 만큼 반환한다. $result',
    ({ lotto, result }) => {
      const count = statistics.getMatchNumbersCount(lotto);
      expect(count).toEqual(result);
    }
  );

  test.each([
    {
      description:
        '당첨 중 일치하는게 3개 이상일 때 일치하는 수에 따라서 값을 저장한다.',
      lottos: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 8, 9, 10],
      ],
      result: [
        [3, 1],
        [4, 0],
        [5, 0],
        [BONUS.SYMBOL, 0],
        [6, 1],
      ],
    },
    {
      description:
        '당점 중 5개 가 일치하고, 보너스가 일치하면 보너스를 추가한다.',
      lottos: [[1, 2, 3, 4, 5, 7]],
      result: [
        [3, 0],
        [4, 0],
        [5, 0],
        [BONUS.SYMBOL, 1],
        [6, 0],
      ],
    },
  ])('$description', ({ lottos, result }) => {
    statistics.findMatch(lottos);
    const match = statistics.getWinningGroup();
    expect([...match]).toEqual(result);
  });

  test.each([
    {
      lottos: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 8, 9, 10],
      ],
      result: 100000250.0,
    },
    {
      lottos: [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      result: 62.5,
    },
  ])('당첨된 수에 따라서 수익률을 반환한다.', ({ lottos, result }) => {
    statistics.findMatch(lottos);
    expect(statistics.getYield(lottos.length * 1000)).toEqual(result);
  });
});
