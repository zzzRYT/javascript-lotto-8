import LottoMachine from '../domain/LottoMachine.js';

class LottoProcess {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }

  async start() {
    try {
      this.lottoMachine.getLottery(4);
    } catch (error) {
      return error;
    }
  }
}

export default LottoProcess;
