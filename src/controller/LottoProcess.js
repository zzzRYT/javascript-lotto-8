import { Console } from '@woowacourse/mission-utils';

import Input from '../view/Input.js';
import Output from '../view/Output.js';

import Lotto from '../domain/Lotto.js';
import Store from '../domain/Store.js';
import Statistics from '../domain/Statistics.js';

class LottoProcess {
  constructor() {
    this.store = new Store();
  }

  async start() {
    const money = await Input.userMoney();
    const lottos = this.store.purchaseLotto(money);

    Output.newLine();

    Output.purchasedLottosCount(lottos);
    Output.purchasedLottos(lottos);

    Output.newLine();

    const winners = await Input.DrawWinningNumbers();
    const lotto = new Lotto(winners);

    Output.newLine();

    const bounce = await Input.DrawBounce();
    const addBounceLotto = lotto.getBounce(bounce);
    const statistics = new Statistics(lotto.getLotto(), addBounceLotto);
    statistics.findMatch(lottos);
    const winningGroup = statistics.getWinningGroup();

    Output.newLine();
    Output.winningStatistics(winningGroup);
  }
}

export default LottoProcess;
