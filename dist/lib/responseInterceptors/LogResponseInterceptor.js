"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogResponseInterceptor = /** @class */ (function () {
    function LogResponseInterceptor(logger) {
        this.logger = logger;
    }
    LogResponseInterceptor.prototype.process = function (handlerInput, response) {
        this.logger.log('******************* RESPONSE **********************');
        if (response) {
            this.logger.log(JSON.stringify(response, null, 2));
        }
        else {
            this.logger.log('NONE');
        }
    };
    return LogResponseInterceptor;
}());
exports.LogResponseInterceptor = LogResponseInterceptor;
