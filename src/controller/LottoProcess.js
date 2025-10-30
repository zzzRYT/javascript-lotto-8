import { Console } from '@woowacourse/mission-utils';

import Store from '../domain/Store.js';
import Lotto from '../domain/Lotto.js';

class LottoProcess {
  constructor() {
    this.store = new Store();
  }

  async start() {
    try {
      const cost = await Console.readLineAsync('가격입력');
      this.store.purchaseLotto(Number(cost));

      const winners = await Console.readLineAsync('당첨번호');
      const w = winners.split(',').map(Number);
      const lotto = new Lotto(w);
      const bounce = await Console.readLineAsync('보너스');
      lotto.getBounce(Number(bounce));
    } catch (error) {
      return error;
    }
  }
}

export default LottoProcess;
