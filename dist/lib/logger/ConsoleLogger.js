"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    log(...args) {
        console.log.apply(console, arguments);
    }
}
exports.ConsoleLogger = ConsoleLogger;
