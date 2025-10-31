import { Console } from '@woowacourse/mission-utils';

import Store from '../domain/Store.js';
import Lotto from '../domain/Lotto.js';
import Statistics from '../domain/Statistics.js';

class LottoProcess {
  constructor() {
    this.store = new Store();
  }

  async start() {
    try {
      const cost = await Console.readLineAsync('가격입력');
      const lottos = this.store.purchaseLotto(Number(cost));

      const winners = await Console.readLineAsync('당첨번호');
      const w = winners.split(',').map(Number);
      const lotto = new Lotto(w);
      const bounce = await Console.readLineAsync('보너스');
      const addBounceLotto = lotto.getBounce(Number(bounce));
      const statistics = new Statistics(lotto, addBounceLotto);
      statistics.findMatch(lottos);
      const t = statistics.getWinnerGroup();
      Console.print(t);
    } catch (error) {
      return error;
    }
  }
}

export default LottoProcess;
