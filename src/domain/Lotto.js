class Lotto {
  #numbers;

  constructor(numbers) {
    validationLotto().length(numbers);
    validationLotto().duplicated(numbers);
    validationLotto().range(numbers);
    this.#numbers = numbers;
  }

  getBounce(num) {
    const addBounceLotto = [...this.#numbers, num];
    validationLotto().duplicated(addBounceLotto);
    validationLotto().range(addBounceLotto);
    return num;
  }
}

function validationLotto() {
  const length = (numbers) => {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] : 로또 번호는 6개여야 합니다.');
    }
  };

  const duplicated = (numbers) => {
    const curLotto = new Set([...numbers]);
    if (curLotto.size !== numbers.length) {
      throw new Error('[ERROR] : 로또 번호에 중복이 있습니다.');
    }
  };

  const range = (numbers) => {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] : 로또 번호는 1 ~ 45사이의 수 입니다.');
      }
    });
  };

  return { length, duplicated, range };
}

export default Lotto;
