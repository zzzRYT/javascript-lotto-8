import { Console, MissionUtils } from '@woowacourse/mission-utils';

class LottoMachine {
  getLottery(count) {
    validationLottoMachine().count(count);
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = this.#randomDraw();
      lottos.push(lotto);
    }
    return lottos;
  }

  #randomDraw() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

function validationLottoMachine() {
  const count = (num) => {
    if (num <= 0) {
      throw new Error(
        '[ERROR] : 로또 머신에는 1이상의 개수를 전달해야 합니다.'
      );
    }
  };

  return { count };
}

export default LottoMachine;
