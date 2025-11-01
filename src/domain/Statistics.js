import { WINNER } from '../constants.js';

class Statistics {
  #winner;
  #bounce;
  #winnerGroup;
  constructor(winner, bonce) {
    this.#winner = winner;
    this.#bounce = bonce;
    this.#winnerGroup = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [7, 0],
      [6, 0],
    ]);
  }

  getWinnerGroup() {
    return this.#winnerGroup;
  }

  getWinnerGroup() {
    return this.#winnerGroup;
  }

  findMatch(lottos) {
    lottos.forEach((lotto) => {
      const count = this.getMatchNumbersCount(lotto);
      if (this.#isSecondWithBounce(count, lotto)) {
        this.#setWinnerGroup(7);
      } else if (count >= WINNER.FINAL_RANK) {
        this.#setWinnerGroup(count);
      }
    });
  }

  getMatchNumbersCount(lotto) {
    const matchNumbers = lotto.filter((number) =>
      this.#winner.includes(number)
    );
    return matchNumbers.length;
  }

  #setWinnerGroup(count) {
    const currentCount = this.#winnerGroup.get(count) || 0;
    this.#winnerGroup.set(count, currentCount + 1);
  }

  #isSecondWithBounce(count, lotto) {
    return count === 5 && lotto.includes(this.#bounce);
  }
}

export default Statistics;
