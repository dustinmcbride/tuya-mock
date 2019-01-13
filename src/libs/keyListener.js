import keypress from 'keypress';

import { lockKeyMap } from '../const'
import { displaySettings } from '../config';
import displayChart from '../utils/displayChart'

export default (tuyaState) => {

keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {

  if (key && key.ctrl && key.name == 'c') {
    process.exit();
  }

  if (key && key.name == 's') {
    displayChart(tuyaState);
  }

  if (key && key.name == 'q') {
    process.exit();
  }

  if (ch === '?') {
    showInAppHelpMessage();
  }

  if (lockKeyMap[ch]) {
    tuyaState.toggleDpsLock(lockKeyMap[ch])
    displayChart(tuyaState);
  }

  if (tuyaState.getState().hasOwnProperty(ch)) {
    tuyaState.toggleDps(ch)
    displayChart(tuyaState);
  }

});

process.stdin.setRawMode(true);
process.stdin.resume();
}