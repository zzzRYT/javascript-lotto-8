import { Console } from '@woowacourse/mission-utils';

import { ERROR, INPUT, SEPARATOR } from '../constants.js';
import { isPositiveInteger } from '../utils.js';

class Input {
  static async userMoney() {
    const money = await Console.readLineAsync(INPUT.MONEY);
    validationCostInput().type(Number(money));
    return Number(money);
  }

  static async DrawWinningNumbers() {
    const winners = await Console.readLineAsync(INPUT.WINNER);
    const winnerNumbers = winners
      .split(SEPARATOR)
      .map((num) => Number(num.trim()));
    validationWinnerInput().numbers(winnerNumbers);
    return winnerNumbers;
  }

  static async DrawBonus() {
    const bonus = await Console.readLineAsync(INPUT.BONUS);
    validationBonusInput().number(Number(bonus));
    return Number(bonus);
  }
}

function validationCostInput() {
  const type = (cost) => {
    if (!isPositiveInteger(cost)) {
      throw new Error(ERROR.INPUT.COST);
    }
  };

  return { type };
}

function validationWinnerInput() {
  const numbers = (winners) => {
    winners.forEach((number) => {
      if (!isPositiveInteger(number)) {
        throw new Error(ERROR.INPUT.WINNER_NUMBERS);
      }
    });
  };

  return { numbers };
}

function validationBonusInput() {
  const number = (bonus) => {
    if (!isPositiveInteger(bonus)) {
      throw new Error(ERROR.INPUT.BONUS);
    }
  };

  return { number };
}

export default Input;
