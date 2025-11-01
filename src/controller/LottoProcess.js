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
    try {
      const money = await Input.userMoney();
      Output.newLine();
      const lottos = this.store.purchaseLotto(money);

      Output.purchasedLottosCount(lottos);
      Output.purchasedLottos(lottos);
      Output.newLine();

      const winners = await Input.DrawWinningNumbers();
      Output.newLine();

      const lotto = new Lotto(winners);

      const bounce = await Input.DrawBounce();
      const addBounceLotto = lotto.getBounce(bounce);

      const statistics = new Statistics(lotto.getLotto(), addBounceLotto);
      Output.newLine();
      statistics.findMatch(lottos);
      const winningGroup = statistics.getWinningGroup();
      const totalPrizePercent = statistics.getYield(money);

      Output.winningStatistics(winningGroup);
      Output.totalYield(totalPrizePercent);
    } catch (error) {
      Console.print(error.message);
      this.start();
    }
  }
}

export default LottoProcess;
