[![Build Status](https://travis-ci.org/rmtuckerphx/ask-community-interceptors.svg?branch=master)](https://travis-ci.org/ask-community/ask-community-interceptors)
[![Coverage Status](https://img.shields.io/coveralls/github/ask-community/ask-community-interceptors.svg)](https://coveralls.io/github/ask-community/ask-community-interceptors?branch=master)

[![NPM Version](https://img.shields.io/npm/v/ask-community-interceptors.svg)](https://www.npmjs.com/package/ask-community-interceptors)
[![NPM Downloads](https://img.shields.io/npm/dt/ask-community-interceptors.svg)](https://www.npmjs.com/package/ask-community-interceptors)

# ASK Community Interceptors

This library provides Request and Response Interceptors to use in building Alexa skills with the [ASK SDK v2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). 


## License

MIT License

## Install

```bash
npm i -S ask-community-interceptors
```

## Usage

Here are the available Request Interceptors:

* [LogRequestInterceptor](./docs/LogRequestInterceptor.md)
* LocalizationRequestInterceptor (InProgress)


Here are the available Response Interceptors:

* [LogResponseInterceptor](./docs/LogResponseInterceptor.md)
* RepeatSaveResponseInterceptor (Planned)

This library also includes:
* [ConsoleLogger](./docs/ConsoleLogger.md)
* [ILogger](./docs/ILogger.md)