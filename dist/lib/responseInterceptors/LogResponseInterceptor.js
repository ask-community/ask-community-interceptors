"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogResponseInterceptor {
    constructor(logger) {
        this.logger = logger;
    }
    process(handlerInput, response) {
        this.logger.log('******************* RESPONSE **********************');
        if (response) {
            this.logger.log(JSON.stringify(response, null, 2));
        }
        else {
            this.logger.log("NONE");
        }
    }
}
exports.LogResponseInterceptor = LogResponseInterceptor;
