"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var ts_mockito_1 = require("ts-mockito");
var index_1 = require("./../../index");
describe('LogResponseInterceptor', function () {
    describe('intercepting when there is a response object', function () {
        it('should log response object', function () {
            var handlerInput = {
                requestEnvelope: {
                    request: {
                        type: 'IntentRequest',
                        requestId: '',
                        timestamp: '',
                        dialogState: {},
                        locale: '',
                        intent: {
                            name: 'TestIntent'
                        }
                    }
                }
            };
            var response = {};
            var logger = new index_1.ConsoleLogger();
            var spiedLogger = ts_mockito_1.spy(logger);
            var interceptor = new index_1.LogResponseInterceptor(logger);
            interceptor.process(handlerInput, response);
            var firstCallArgs = ts_mockito_1.capture(spiedLogger.log).first();
            var secondCallArgs = ts_mockito_1.capture(spiedLogger.log).second();
            ts_mockito_1.verify(spiedLogger.log(ts_mockito_1.anything())).twice();
            chai_1.expect(firstCallArgs[0]).to.contain('RESPONSE');
            chai_1.expect(secondCallArgs[0]).to.equal(JSON.stringify(response, null, 2));
        });
    });
    describe('intercepting when there is NO response object', function () {
        it('should log NONE', function () {
            var handlerInput = {
                requestEnvelope: {
                    request: {
                        type: 'IntentRequest',
                        requestId: '',
                        timestamp: '',
                        dialogState: {},
                        locale: '',
                        intent: {
                            name: 'TestIntent'
                        }
                    }
                }
            };
            var logger = new index_1.ConsoleLogger();
            var spiedLogger = ts_mockito_1.spy(logger);
            var interceptor = new index_1.LogResponseInterceptor(logger);
            interceptor.process(handlerInput);
            var firstCallArgs = ts_mockito_1.capture(spiedLogger.log).first();
            var secondCallArgs = ts_mockito_1.capture(spiedLogger.log).second();
            ts_mockito_1.verify(spiedLogger.log(ts_mockito_1.anything())).twice();
            chai_1.expect(firstCallArgs[0]).to.contain('RESPONSE');
            chai_1.expect(secondCallArgs[0]).to.equal('NONE');
        });
    });
});
