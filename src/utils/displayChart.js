
import Table from 'cli-table';
import moment from 'moment'

export default tuyaState => {
  let head = [moment().format('HH:MM:SS')];
  let colWidths = [10];

  let state = tuyaState.getState();
  let locked = tuyaState.getLocked();

  Object.keys(state).forEach(d => {
    head.push(d);
    colWidths.push(10);
  })

  const table = new Table({
    head,
    colWidths
  });

  let row = ['Status'];
  Object.keys(locked).forEach(d => {
    let isLocked = locked[d] ? ' 🔒' : '';
    row.push(state[d] + isLocked);
  })

  table.push(row);

  console.log(table.toString())
}