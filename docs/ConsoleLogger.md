# ConsoleLogger

A implementation of [ILogger](ILogger.md) that writes to `console.log`.

## Usage

```ts
import { ILogger } from './ILogger';

export class ConsoleLogger implements ILogger {
    public log(...args: any[]): void {
        console.log.apply(console, arguments);
    }
}
```

If your skill is hosted in [AWS Lambda](https://aws.amazon.com/lambda/) then the logs will appear in [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)

## Examples

```ts
//TypeScript
import { ConsoleLogger, ILogger } from "ask-community-interceptors";

const logger: ILogger = new ConsoleLogger();
```

```javascript
//JavaScript
const Interceptors = require('ask-community-interceptors');

const logger = new Interceptors.ConsoleLogger();
```