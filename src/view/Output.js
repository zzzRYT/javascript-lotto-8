import { Console } from '@woowacourse/mission-utils';

import { generatedMoneyUnit } from '../utils.js';

import { OUTPUT, WINNER } from '../constants.js';

class Output {
  static purchasedLottosCount(lottos) {
    const length = lottos.length;
    return Console.print(length + OUTPUT.PURCHASED.COUNT);
  }

  static purchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  static newLine() {
    Console.print('');
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
    if (to === 7) {
      Console.print(`5개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`);
      return;
    }
    Console.print(`${to}개 일치 (${prize}원) - ${count}개`);
  }
}

export default Output;
