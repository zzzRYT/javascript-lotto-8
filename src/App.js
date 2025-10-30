import LottoProcess from './controller/LottoProcess.js';

class App {
  constructor() {
    this.process = new LottoProcess();
  }

  async run() {
    await this.process.start();
  }
}

export default App;
