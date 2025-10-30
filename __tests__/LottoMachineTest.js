import { MissionUtils } from '@woowacourse/mission-utils';

import LottoMachine from '../src/domain/LottoMachine.js';

jest.mock('@woowacourse/mission-utils');

describe('LottoMachine 클래스 테스트', () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine();
    MissionUtils.Random.pickUniqueNumbersInRange.mockReset();
  });

  test('랜덤 복권을 뽑을 때, 전달한 count만큼 랜덤한 복권을 생성한다.', () => {
    MissionUtils.Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([1, 2, 3, 4, 5, 7]);

    const lottos = lottoMachine.getLottery(2);
    const expected = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];

    expect(lottos).toEqual(expected);
  });

  test('랜덤 복권을 뽑을 때, 1미만의 값을 전달하면 예외가 발생한다.', () => {
    expect(() => lottoMachine.getLottery(0)).toThrow('[ERROR]');
  });

  test('랜덤 수가 도출된다.', () => {
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue([
      1, 2, 3, 4, 5, 6,
    ]);

    const lottos = lottoMachine.getLottery(1);
    expect(lottos).toEqual([[1, 2, 3, 4, 5, 6]]);
  });
});
