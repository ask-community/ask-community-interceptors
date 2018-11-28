# LogRequestInterceptor

The LogRequestInterceptor writes the `request` object to a log.  

## Usage

The LogRequestInterceptor has a constructor that requires a `Logger` passed in the constructor. This library includes the [ConsoleLogger](ConsoleLogger.md) that you can use. 

It is recommended that this be first request interceptor added.

## Examples

```ts
//TypeScript
import { LogRequestInterceptor, ConsoleLogger, ILogger } from "ask-community-interceptors";

const logger: ILogger = new ConsoleLogger();
const logRequestInterceptor = new LogRequestInterceptor(logger);

exports.handler = skillBuilder
    ...
    .addRequestInterceptors(logRequestInterceptor)
    .lambda();
```

```javascript
//JavaScript
const Interceptors = require('ask-community-interceptors');

const logger = new Interceptors.ConsoleLogger();
const logRequestInterceptor = new Interceptors.LogRequestInterceptor(logger);

exports.handler = skillBuilder
    ...
    .addRequestInterceptors(logRequestInterceptor)
    .lambda();
```

## CloudWatch Logs
If your skill is hosted in [AWS Lambda](https://aws.amazon.com/lambda/) then the LogRequestInterceptor will write two entries in the [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) Logs:

![alt text](./assets/CW-logRequestInterceptor.png)
