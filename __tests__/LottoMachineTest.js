import LottoMachine from '../src/domain/LottoMachine';

jest.mock('@woowacourse/mission-utils');

describe('LottoMachine 클래스 테스트', () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine();
  });

  test('랜덤 복권을 뽑을 때,1 이상의 값을 전달해야 동작한다.', () => {
    [1, 2, 3, 4, 5].forEach((num) =>
      MissionUtils.Random.pickNumberInRange.mockReturnValue(num)
    );

    const lottos = lottoMachine.getLottery(4);
    const RANDOM_NUMBERS_TO_END = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    expect(lottos).toBe(RANDOM_NUMBERS_TO_END);
  });

  test.each([{ lotto: [1, 1, 3, 4, 5, 6] }, { lotto: [1, 1, 1, 1, 1, 1] }])(
    '각 복권을 뽑을 때, 같은 수는 나오지 않는다.: $lotto',
    ({ lotto }) => {
      lotto.forEach((num) =>
        MissionUtils.Random.pickNumberInRange.mockReturnValue(num)
      );

      expect(lotto.autoDraw()).toThrow(['[ERROR]']);
    }
  );

  test('랜덤 수가 도출된다.', () => {
    [1, 2, 3, 4, 5].forEach((num) =>
      MissionUtils.Random.pickNumberInRange.mockReturnValue(num)
    );

    const draw = lotto.autoDraw();
    expect(draw).toBe([1, 2, 3, 4, 5]);
  });
});
