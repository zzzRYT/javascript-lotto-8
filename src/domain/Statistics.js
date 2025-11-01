import { WINNER } from '../constants.js';

class Statistics {
  #winner;
  #bounce;
  #winningGroup;
  constructor(winner, bonce) {
    this.#winner = winner;
    this.#bounce = bonce;
    this.#winningGroup = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [7, 0],
      [6, 0],
    ]);
  }

  getWinningGroup() {
    return this.#winningGroup;
  }

  findMatch(lottos) {
    lottos.forEach((lotto) => {
      const count = this.getMatchNumbersCount(lotto);
      if (this.#isSecondWithBounce(count, lotto)) {
        this.#setWinningGroup(7);
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

  #isSecondWithBounce(count, lotto) {
    return count === 5 && lotto.includes(this.#bounce);
  }
}

export default Statistics;
