# ILogger

A interface used in creating your own logger. This library includes [ConsoleLogger](ConsoleLogger.md) which writes to `console.log`.

## Usage

```
export interface ILogger {    
    log(...args: any[]): void;    
}
```

If your skill is hosted in [AWS Lambda](https://aws.amazon.com/lambda/) then the logs will appear in [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)

## Examples

```ts
//TypeScript
import { LogRequestInterceptor, LogResponseInterceptor, ConsoleLogger, ILogger } from "ask-community-interceptors";

const logger: ILogger = new ConsoleLogger();
const logRequestInterceptor = new LogRequestInterceptor(logger);
const logResponseInterceptor = new LogResponseInterceptor(logger)
```