import { ERROR } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validationLotto().length(numbers);
    validationLotto().duplicated(numbers);
    validationLotto().range(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }

  getBonus(num) {
    const addBonusLotto = [...this.#numbers, num];
    validationLotto().duplicated(addBonusLotto);
    validationLotto().range(addBonusLotto);
    return num;
  }
}

function validationLotto() {
  const length = (numbers) => {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.LENGTH);
    }
  };

  const duplicated = (numbers) => {
    const curLotto = new Set([...numbers]);
    if (curLotto.size !== numbers.length) {
      throw new Error(ERROR.LOTTO.DUPLICATE);
    }
  };

  const range = (numbers) => {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.LOTTO.RANGE);
      }
    });
  };

  return { length, duplicated, range };
}

export default Lotto;
