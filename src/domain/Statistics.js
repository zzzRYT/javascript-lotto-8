import { BONUS, WINNER } from '../constants.js';

class Statistics {
  #winner;
  #bonus;
  #winningGroup;
  constructor(winner, bonus) {
    this.#winner = winner;
    this.#bonus = bonus;
    this.#winningGroup = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [BONUS.SYMBOL, 0],
      [6, 0],
    ]);
  }

  getWinningGroup() {
    return this.#winningGroup;
  }

  findMatch(lottos) {
    lottos.forEach((lotto) => {
      const count = this.getMatchNumbersCount(lotto);
      if (this.#isSecondWithBonus(count, lotto)) {
        this.#setWinningGroup(BONUS.SYMBOL);
      } else if (count >= WINNER.FINAL_RANK) {
        this.#setWinningGroup(count);
      }
    });
  }

  getMatchNumbersCount(lotto) {
    const matchNumbers = lotto.filter((number) =>
      this.#winner.includes(number)
    );
    return matchNumbers.length;
  }

  getYield(purchase) {
    let totalPrize = 0;
    for (const [to, count] of this.#winningGroup) {
      totalPrize += WINNER.PRIZE[WINNER.RANK[to]] * count;
    }
    const lottoYield = (totalPrize / purchase) * 100;
    return lottoYield;
  }

  #setWinningGroup(count) {
    const currentCount = this.#winningGroup.get(count) || 0;
    this.#winningGroup.set(count, currentCount + 1);
  }

  #isSecondWithBonus(count, lotto) {
    return count === BONUS.COUNT && lotto.includes(this.#bonus);
  }
}

export default Statistics;
