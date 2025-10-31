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
        [6, 1],
        [3, 1],
      ],
    },
    {
      description:
        '당점 중 5개 가 일치하고, 보너스가 일치하면 7(보너스)를 추가한다.',
      lottos: [[1, 2, 3, 4, 5, 7]],
      result: [[7, 1]],
    },
  ])('$description', ({ lottos, result }) => {
    statistics.findMatch(lottos);
    const match = statistics.getWinnerGroup();
    expect([...match]).toEqual(result);
  });
});
