import { Console } from '@woowacourse/mission-utils';

import LottoMachine from './LottoMachine.js';

import { isPositiveInteger } from '../utils.js';
import { ERROR, LOTTO } from '../constants.js';

class Store {
  #lottoMachine;
  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  purchaseLotto(cost) {
    validationStore().moneyType(cost);
    validationStore().minCost(cost);
    const chance = this.#changeChance(cost);
    const lottos = this.#lottoMachine.getLottery(chance);
    Console.print(lottos);
    return lottos;
  }

  #changeChance(cost) {
    return Math.floor(cost / LOTTO.COST);
  }
}

function validationStore() {
  const moneyType = (cost) => {
    if (!isPositiveInteger(cost)) {
      throw new Error(ERROR.STORE.MONEY_TYPE);
    }
  };

  const minCost = (cost) => {
    if (cost < LOTTO.COST) {
      throw new Error(ERROR.STORE.MIN_COST);
    }
  };

  return { moneyType, minCost };
}

export default Store;
