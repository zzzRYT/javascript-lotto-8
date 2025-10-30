import Store from '../src/domain/Store.js';

describe('Store 클래스 테스트', () => {
  let store;

  beforeEach(() => {
    store = new Store();
  });

  test.each([
    { cost: 1000, count: 1 },
    { cost: 2000, count: 2 },
    { cost: 4999, count: 4 },
  ])(
    '$cost원의 비용을 지불하면, $count개의 로또를 준다.',
    ({ cost, count }) => {
      const lottos = store.purchaseLotto(cost);
      expect(lottos.length).toEqual(count);
    }
  );

  test.each([{ cost: '' }, { cost: 'a' }, { cost: '&*^' }, { cost: '1000' }])(
    '구매시 정수가 필요합니다. : $cost',
    ({ cost }) => {
      expect(() => store.purchaseLotto(cost)).toThrow('[ERROR]');
    }
  );

  test.each([{ cost: 500 }, { cost: 999 }, { cost: -1 }])(
    '구매시 1000원 이상의 값이 필요하다.: $cost',
    ({ cost }) => {
      expect(() => store.purchaseLotto(cost).toThrow('[ERROR]'));
    }
  );
});
