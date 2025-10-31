import { Console } from '@woowacourse/mission-utils';

import { ERROR, INPUT } from '../constants.js';
import { isPositiveInteger } from '../utils.js';
class Input {
  static async userMoney() {
    const money = await Console.readLineAsync(INPUT.MONEY);
    try {
      validationCostInput().type(Number(money));
      return Number(money);
    } catch (error) {
      Console.print(error.message);
      return this.userMoney();
    }
  }

  static async DrawWinningNumbers() {
    try {
      const winners = await Console.readLineAsync(INPUT.WINNER);
      const winnerNumbers = winners.split(',').map((num) => Number(num.trim()));
      validationWinnerInput().numbers(winnerNumbers);
      return winnerNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.DrawWinningNumbers();
    }
  }

  static async DrawBounce() {
    try {
      const bounce = await Console.readLineAsync(INPUT.BOUNCE);
      validationBounceInput().number(Number(bounce));
      return Number(bounce);
    } catch (error) {
      Console.print(error.message);
      return this.DrawBounce();
    }
  }
}

function validationCostInput() {
  const type = (cost) => {
    if (!isPositiveInteger(cost)) {
      throw new Error(ERROR.INPUT.COST_TYPE);
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
