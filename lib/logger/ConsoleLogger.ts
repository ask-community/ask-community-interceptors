import { ILogger } from "./ILogger"

export class ConsoleLogger implements ILogger {    
    log(...args: any[]): void {
        console.log.apply(console,arguments);
    } 
}