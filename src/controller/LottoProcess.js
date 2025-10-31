import { Console } from '@woowacourse/mission-utils';

import Store from '../domain/Store.js';
import Lotto from '../domain/Lotto.js';
import Statistics from '../domain/Statistics.js';
import Input from '../view/Input.js';

class LottoProcess {
  constructor() {
    this.store = new Store();
  }

  async start() {
    const money = await Input.userMoney();
    const lottos = this.store.purchaseLotto(money);

    const winners = await Input.DrawWinningNumbers();
    const lotto = new Lotto(winners);
    const bounce = await Input.DrawBounce();
    const addBounceLotto = lotto.getBounce(bounce);
    const statistics = new Statistics(lotto.getLotto(), addBounceLotto);
    statistics.findMatch(lottos);
    const winningGroup = statistics.getWinnerGroup();
    Console.print(winningGroup);
  }
}

export default LottoProcess;
