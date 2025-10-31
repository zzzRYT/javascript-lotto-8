import Input from './view/Input.js';
import Output from './view/Output.js';
import LottoProcess from './controller/LottoProcess.js';

class App {
  constructor() {}

  async run() {
    const process = new LottoProcess();
    await process.start();
  }
}

export default App;
