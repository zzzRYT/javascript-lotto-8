import { MissionUtils } from '@woowacourse/mission-utils';

import { ERROR } from '../constants.js';

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
      throw new Error(ERROR.STORE.MACHINE);
    }
  };

  return { count };
}

export default LottoMachine;
