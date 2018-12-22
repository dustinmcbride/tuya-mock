
export const showInAppHelpMessage = () => {
  console.log()
  console.log('--Help Message-----------------------------------------------------')
  console.log(' s       : status message')
  console.log(' ?       : this help message')
  console.log(' q       : quit')
  console.log(' [1 - 0] : toggle switch')
  console.log(' [! - )] : lock switch (incoming request wont change dps state)')
  console.log('-------------------------------------------------------------------')
  console.log()
}

export const displayReqOrReq = (name, data) => {
  console.log(`${name}:`)
  console.log(data)
  console.log('----------------------------------------------')
}

export const displayConfig = (config) => {
  console.log(`Tuya Mock started:`);
  console.log(`Switches: ${config.numberOfSwitches}`)
  console.log(`Api Version: ${config.tuyaApiVersion}`)
}
