import net from 'net';
import messageParser from 'tuyapi/lib/message-parser';
import displayChart from '../utils/displayChart'
import TuyaCipher from 'tuyapi/lib/cipher';
import { displayReqOrReq } from '../utils/messages';
import { displaySettings, tuyaApiVersion, tuyaApiKey } from '../config'


function isDataEncrypted(data) {
  return data && typeof data === 'string' && data.slice(0,3) === tuyaApiVersion
}


export default (tuyaState) => {

  const cipher = new TuyaCipher({key:tuyaApiKey, version: tuyaApiVersion});

  net.createServer(socket => {
    socket.on('data', function (data) {
      let parsed = messageParser.parse(Buffer.from(data))

      if (displaySettings.showParsedRequest) {
        displayReqOrReq('Parsed Incoming Request', parsed)
      }

      if (isDataEncrypted(parsed.data)) {
        let data = cipher.decrypt(parsed.data)

        if (displaySettings.showDecryptedData) {
          displayReqOrReq('Decrypted Data', data)
        }

        tuyaState.updateManyDps(data.dps)
        if (displaySettings.showStatusChartAfterEachUpdate) {
          displayChart(tuyaState);
        }
      }

      let response = {
        data: {
          devId: '123',
          dps: tuyaState.getState()
        },
        commandByte: '10' // todo: figure out what this should be
      }

      if (displaySettings.showUnencodedResponse) {
        displayReqOrReq('Unencoded Resonse', response);
      }

    socket.write(messageParser.encode(response));
    });

  })
  .listen(6668);

  displayChart(tuyaState);

}