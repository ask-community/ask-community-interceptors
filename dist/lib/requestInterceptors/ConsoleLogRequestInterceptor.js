"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogRequestInterceptor {
    process(handlerInput) {
        console.log(JSON.stringify(handlerInput.requestEnvelope.request, null, '  '));
    }
}
exports.ConsoleLogRequestInterceptor = ConsoleLogRequestInterceptor;
