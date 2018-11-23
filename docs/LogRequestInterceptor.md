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