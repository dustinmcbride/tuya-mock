# TuyaMock

Mock a Tuya wifi switch for development purposes.

## Installation

Install TuyaMock globally

```
npm i tuya-mock -g
```

## Running

There are three ways to start TuyaMock

Supply TuyaMock directly with the required API key

```
$ tuya-mock -k [your-api-key]
```

Provide `tuya-mock` with the name of an environment variable where your api key is stored
```
$ tuya-mock -e [YOUR_ENV_VAR_NAME]
```

Lastly tuya-mock will look for the environment variable named `TUYA_LOCAL_KEY`
````
$ tuya-mock
````

For help
````
$ tuya-mock -h
````

TuyaMock will run with the following default values but can be changed via the command line
- Tuya Api Version : 3.1
- Number of physical DPS's (switches) : 5

## Usage

After the app is running you will see a chart of the intial state of the mocked tuya device. Each time the state is updated the chart will be printed to the console.

### Toggle a mock switch
Pressing a number key will toggle the state of the corresponding mock switch.

### Locking a mock switch
Pressing shift and the number will lock the switch. A locked swith cannot be updated by an incoming request.

### Help
Press `?` for the in app help message.

## Notes

- TuyaMock does not yet support a persistent connection
- This is still a crude implementation. Responses are approximate but good for basic use cases

## Todo
- Support a persistent connection
- Tests!!!!
- Add hot keys to toggle print response/request messages to the console.

## Big Thanks!!
This package could not be possible without all of [Max Isom's](https://github.com/codetheweb) work on the [TuyaAPI](https://github.com/codetheweb/tuyapi)
