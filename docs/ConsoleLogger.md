# ConsoleLogger

A implementation of [ILogger](ILogger.md) that writes to `console.log`.

## Usage

```ts
import { ILogger } from "./ILogger"

export class ConsoleLogger implements ILogger {    
    log(...args: any[]): void {
        console.log.apply(console,arguments);
    } 
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