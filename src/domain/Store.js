import LottoMachine from './LottoMachine.js';

import { ERROR, LOTTO } from '../constants.js';

class Store {
  #lottoMachine;
  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  purchaseLotto(cost) {
    validationStore().minCost(cost);
    const chance = this.#changeChance(cost);
    const lottos = this.#lottoMachine.getLottery(chance);
    return lottos;
  }

  #changeChance(cost) {
    return Math.floor(cost / LOTTO.COST);
  }
}

function validationStore() {
  const minCost = (cost) => {
    if (cost < LOTTO.COST) {
      throw new Error(ERROR.STORE.MIN_COST);
    }
  };

  return { minCost };
}

export default Store;
