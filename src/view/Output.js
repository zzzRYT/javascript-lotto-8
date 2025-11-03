import { Console } from '@woowacourse/mission-utils';

import { generatedMoneyUnit } from '../utils.js';

import { BONUS, OUTPUT, SEPARATOR, WINNER } from '../constants.js';

class Output {
  static purchasedLottosCount(lottos) {
    const length = lottos.length;
    return Console.print(length + OUTPUT.PURCHASED.COUNT);
  }

  static purchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      const sortedLotto = lotto.sort((a, b) => a - b);
      Console.print(`[${sortedLotto.join(SEPARATOR + ' ')}]`);
    });
  }

  static winningStatistics(winningGroup) {
    Console.print(OUTPUT.STATISTICS.TITLE);
    for (const [to, count] of winningGroup) {
      this.eachCountPrint(to, this.getPrize(to), count);
    }
  }

  static getPrize(rank) {
    return generatedMoneyUnit(WINNER.PRIZE[WINNER.RANK[rank]]);
  }

  static eachCountPrint(to, prize, count) {
    if (to === BONUS.SYMBOL) {
      Console.print(
        `${BONUS.COUNT}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`
      );
      return;
    }
    Console.print(`${to}개 일치 (${prize}원) - ${count}개`);
  }

  static totalYield(percent) {
    const generateUnit = generatedMoneyUnit(percent);
    Console.print(`총 수익률은 ${generateUnit}%입니다.`);
  }

  static newLine() {
    Console.print('');
  }
}

export default Output;
