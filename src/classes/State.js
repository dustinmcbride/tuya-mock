export default class State {
  constructor (numberOfDps) {
    this.state = {};
    this.locked = {};
    this.numberOfDps = numberOfDps;
    this.numberOfLastDps = numberOfDps + 1;
    this.init();
  }

  init () {
    for (let i = 1; i <= this.numberOfDps; i++) {
      this.state[i] = false;
      this.locked[i] = false;
    }
    this.state[this.numberOfLastDps] = 0;
    this.locked[this.numberOfLastDps] = false;
  }

  isLastDps(dps) {
    return dps == this.numberOfLastDps;
  }

  changeLastDps(state) {
    const stateAsBoolean = typeof state === 'boolean' ? state : state == 1 ? true : false
    const stateAsInt = typeof state !== 'boolean' ? state : state === true ? 1 : 0
    Object.keys(this.state).forEach(dps => {
      this.state[dps] = stateAsBoolean;
    })
    this.state[this.numberOfLastDps] = stateAsInt;
  }

  updateManyDps(dpss) {
    Object.keys(dpss).forEach(dps => {
      this.updateSingleDps(dps, dpss[dps]);
    })
  }

  updateSingleDps(dps, state){
    if (!this.locked[dps]) {
      if (this.isLastDps(dps)) {
        this.changeLastDps(state);
      } else {
        this.state[dps] = state;
      }
    }
  }

  toggleDps(dps) {
    this.updateSingleDps(dps, !this.state[dps]);
  }

  toggleDpsLock(dps) {
    this.locked[dps] = !this.locked[dps];
  }

  getState () {
    return this.state;
  }

  getLocked () {
    return this.locked;
  }


}