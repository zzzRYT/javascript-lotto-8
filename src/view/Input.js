import { Console } from '@woowacourse/mission-utils';

import { ERROR, INPUT } from '../constants.js';
import { isPositiveInteger } from '../utils.js';
class Input {
  static async userMoney() {
    const money = await Console.readLineAsync(INPUT.MONEY);
    validationCostInput().type(Number(money));
    return Number(money);
  }

  static async DrawWinningNumbers() {
    const winners = await Console.readLineAsync(INPUT.WINNER);
    const winnerNumbers = winners.split(',').map((num) => Number(num.trim()));
    validationWinnerInput().numbers(winnerNumbers);
    return winnerNumbers;
  }

  static async DrawBounce() {
    const bounce = await Console.readLineAsync(INPUT.BOUNCE);
    validationBounceInput().number(Number(bounce));
    return Number(bounce);
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

function validationBounceInput() {
  const number = (bounce) => {
    if (!isPositiveInteger(bounce)) {
      throw new Error(ERROR.INPUT.BOUNCE);
    }
  };

  return { number };
}

export default Input;
