import Lotto from '../src/domain/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1 ~ 45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호와 중복된 숫자면 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => lotto.getBounce(5)).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 ~ 45 사이 수가 아니면 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => lotto.getBounce(50)).toThrow('[ERROR]');
  });
});
