import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import * as config from '../config';
import {defaultTuyaApiVersion, defautlNumberOfSwitches, defaultTuyaApiEnvVaribleName} from '../const'


const optionDefinitions = [
  { name: 'key',              alias: 'k', type: String, description: 'Key used by TuyaApi' },
  { name: 'envVar',           alias: 'e', type: String, description: 'Environment variable name with key used by TuyaApi' },
  { name: 'numberOfSwitches', alias: 'n', type: String, description: 'Number of switches on the device to mock (defaults to 5)' },
  { name: 'version',          alias: 'v', type: String, description: 'Verions of tuya device firmware (defaults to 3.1)' },
  { name: 'help',             alias: 'h', type: String, description: 'This help message' }
]

const sections = [
  {
    header: 'Mock Tuya Device',
    content: 'Mock a Tuya wifi switch for development'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    header: 'Example',
    content: ['$ mock-tuya -k 123445677']
  }
]

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(sections);


const getApiKeyToUse = () => {

  if (options.key) {
    return options.key;
  }

  if (options.envVar) {
    return process.env[options.envVar];
  }

  if (process.env[defaultTuyaApiEnvVaribleName]) {
    return process.env[defaultTuyaApiEnvVaribleName];
  }

  return false;

}


export default () => {
  let error;

  if (!getApiKeyToUse()) {

    error = `
    You must provide a key using as a command line argument or as a name of environment variable

    You can provide TuyaApi key with '-k 1234055'
    OR
    You can provide the name environment variable where the the key is stored '-e TUYA_LOCAL_KEY'
    `
  }

  if (options.help) {
    console.log(usage)
    process.exit()
  }

  if (error) {
    console.log(usage)
    console.log(`Error: ${error}`)
    process.exit()
  }

  config.tuyaApiKey = getApiKeyToUse()
  config.tuyaApiVersion = options.version || defaultTuyaApiVersion;
  config.numberOfSwitches = options.numberOfSwitches|| defautlNumberOfSwitches;

}