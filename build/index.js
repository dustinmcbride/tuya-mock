"use strict";

var config = _interopRequireWildcard(require("./config"));

var _State = _interopRequireDefault(require("./classes/State"));

var _server = _interopRequireDefault(require("./libs/server"));

var _messages = require("./utils/messages");

var _keyListener = _interopRequireDefault(require("./libs/keyListener"));

var _commandLine = _interopRequireDefault(require("./libs/commandLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
(0, _commandLine.default)();
(0, _messages.displayConfig)(config);
const tuyaState = new _State.default(config.numberOfSwitches);
(0, _messages.showInAppHelpMessage)();
(0, _server.default)(tuyaState);
(0, _keyListener.default)(tuyaState);