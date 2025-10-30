import Store from '../domain/Store.js';

class LottoProcess {
  constructor() {
    this.store = new Store();
  }

  async start() {
    try {
      this.store.purchaseLotto(8000);
    } catch (error) {
      return error;
    }
  }
}

export default LottoProcess;
