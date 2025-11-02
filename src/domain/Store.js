import LottoMachine from './LottoMachine.js';

import { ERROR, LOTTO } from '../constants.js';

class Store {
  #lottoMachine;
  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  purchaseLotto(cost) {
    validationStore().minCost(cost);
    validationStore().maxCost(cost);
    const chance = this.#changeChance(cost);
    const lottos = this.#lottoMachine.getLottery(chance);
    return lottos;
  }

  #changeChance(cost) {
    return Math.floor(cost / LOTTO.MIN_COST);
  }
}

function validationStore() {
  const minCost = (cost) => {
    if (cost < LOTTO.MIN_COST) {
      throw new Error(ERROR.STORE.MIN_COST);
    }
  };

  const maxCost = (cost) => {
    if (cost > LOTTO.MAX_COST) {
      throw new Error(ERROR.STORE.MAX_COST);
    }
  };

  return { minCost, maxCost };
}

export default Store;
