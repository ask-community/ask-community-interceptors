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
import { ConsoleLogger, ILogger } from "ask-community-interceptors";

const logger: ILogger = new ConsoleLogger();
```

Here is an example of how to use ILogger to create your own logger:

```ts
//TypeScript
import { ILogger } from './ILogger';

export class MyLogger implements ILogger {
    public log(...args: any[]): void {
        // implement log function
        // console.log.apply(console, arguments);
    }
}
```