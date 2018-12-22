import * as config from './config'
import State from './classes/State';
import startServe from './libs/server'
import {displayConfig, showInAppHelpMessage} from './utils/messages'
import startKeyListner from './libs/keyListener';
import handleCommandLine from './libs/commandLine'

// TODO:
// write TESTS!!!!!
// support persistentConnection
// better readability for help message

// TODO (add these features):
// console.log(' c       : show chart when dps(s) are updated')
// console.log(' p       : show each parsed request')
// console.log(' d       : show each decrypted data from request')
// console.log(' o       : show each outgoing response')
// console.log(' b       : send bad resonses')
// console.log(' n       : send no responses')

handleCommandLine();

displayConfig(config)

const tuyaState = new State(config.numberOfSwitches);

showInAppHelpMessage();

startServe(tuyaState);

startKeyListner(tuyaState);


