import Store from '../src/domain/Store';

describe('Store 클래스 테스트', () => {
  let store;

  beforeEach(() => {
    store = new Store();
  });

  test.each([{ cost: '' }, { cost: 'a' }, { cost: '&*^' }])(
    '구매시 정수가 필요합니다. : $cost',
    ({ cost }) => {
      expect(store.purchase(cost)).toThrow(['[ERROR]']);
    }
  );

  test.each([{ cost: 500 }, { cost: 999 }, { cost: -1 }])(
    '구매시 1000원 이상의 값이 필요하다.: $cost',
    ({ cost }) => {
      expect(store.purchase(cost).toThrow('[ERROR]'));
    }
  );
});
