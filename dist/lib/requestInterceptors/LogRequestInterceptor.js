"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogRequestInterceptor {
    constructor(logger) {
        this.logger = logger;
    }
    process(handlerInput) {
        this.logger.log('******************* REQUEST **********************');
        this.logger.log(JSON.stringify(handlerInput.requestEnvelope, null, 2));
    }
}
exports.LogRequestInterceptor = LogRequestInterceptor;
