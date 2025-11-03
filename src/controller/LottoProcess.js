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
    const context = {};

    const steps = [
      {
        name: 'getMoney',
        fn: async () => {
          context.money = await Input.userMoney();
          Output.newLine();

          context.lottos = this.store.purchaseLotto(context.money);

          Output.purchasedLottosCount(context.lottos);
          Output.purchasedLottos(context.lottos);
          Output.newLine();
        },
      },
      {
        name: 'getWinners',
        fn: async () => {
          context.winners = await Input.DrawWinningNumbers();
          context.lotto = new Lotto(context.winners);
          Output.newLine();
        },
      },
      {
        name: 'getBonus',
        fn: async () => {
          context.bonus = await Input.DrawBonus();
          context.addBonusLotto = context.lotto.getBonus(context.bonus);
          Output.newLine();
        },
      },
      {
        name: 'showStatistics',
        fn: async () => {
          const statistics = new Statistics(
            context.lotto.getLotto(),
            context.addBonusLotto
          );
          statistics.findMatch(context.lottos);
          context.statistics = statistics;
          const winningGroup = context.statistics.getWinningGroup();
          const totalPrizePercent = context.statistics.getYield(context.money);

          Output.winningStatistics(winningGroup);
          Output.totalYield(totalPrizePercent);
        },
      },
    ];

    let idx = 0;

    while (idx < steps.length) {
      try {
        await steps[idx].fn();
        idx++;
      } catch (err) {
        Console.print(err.message);
        continue;
      }
    }
  }
}

export default LottoProcess;
