"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogRequestInterceptor = /** @class */ (function () {
    function LogRequestInterceptor(logger) {
        this.logger = logger;
    }
    LogRequestInterceptor.prototype.process = function (handlerInput) {
        this.logger.log('******************* REQUEST **********************');
        this.logger.log(JSON.stringify(handlerInput.requestEnvelope, null, 2));
    };
    return LogRequestInterceptor;
}());
exports.LogRequestInterceptor = LogRequestInterceptor;
