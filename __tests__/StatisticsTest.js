import Statistics from '../src/domain/Statistics';

describe('Statistics 클래스 테스트', () => {
  let statistics;

  beforeEach(() => {
    statistics = new Statistics([1, 2, 3, 4, 5, 6]);
  });

  test.each([
    {
      lotto: [1, 2, 3, 4, 5, 6],
      result: 6,
    },
    { lotto: [1, 2, 3, 4, 5, 7], result: 5 },
  ])(
    '$lotto에서 당첨 번호화 동일한 수 만큼 반환한다. $result',
    ({ lotto, result }) => {
      const count = statistics.findMatchNumbersCount(lotto);
      expect(count).toBe(result);
    }
  );

  test.each([{ count: 3 }, { count: 5 }])(
    '당첨 중 일치하는게 3개 이상일 때 일치하는 수에 따라서 값을 저장한다. $count',
    ({ count }) => {
      const prevCount = statistics.match.count;
      statistics.saveWinningNumber(count);
      expect(statistics.match.count).toBe(prevCount + 1);
    }
  );

  test('당첨 수에 맞는 당첨금을 반환한다.', () => {
    const prize = statistics.getPrize();
    expect(prize).toBe(0);
  });
});
