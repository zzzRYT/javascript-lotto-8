import Lotto from './domain/Lotto';

class App {
  constructor() {
    this.lotto = new Lotto();
  }

  async run() {
    await this.lotto.start();
  }
}

export default App;
