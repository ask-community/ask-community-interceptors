"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ts_mockito_1 = require("ts-mockito");
const index_1 = require("../../lib/index");
describe("LogResponseInterceptor", () => {
    describe("intercepting when there is a response object", () => {
        it("should log response object", () => {
            const handlerInput = {
                requestEnvelope: {
                    request: {
                        type: "IntentRequest",
                        requestId: "",
                        timestamp: "",
                        dialogState: {},
                        locale: "",
                        intent: {
                            name: "TestIntent"
                        }
                    }
                }
            };
            const response = {};
            const logger = new index_1.ConsoleLogger();
            const spiedLogger = ts_mockito_1.spy(logger);
            const interceptor = new index_1.LogResponseInterceptor(logger);
            interceptor.process(handlerInput, response);
            const firstCallArgs = ts_mockito_1.capture(spiedLogger.log).first();
            const secondCallArgs = ts_mockito_1.capture(spiedLogger.log).second();
            ts_mockito_1.verify(spiedLogger.log(ts_mockito_1.anything())).twice();
            chai_1.expect(firstCallArgs[0]).to.contain("RESPONSE");
            chai_1.expect(secondCallArgs[0]).to.equal(JSON.stringify(response, null, 2));
        });
    });
    describe("intercepting when there is NO response object", () => {
        it("should log NONE", () => {
            const handlerInput = {
                requestEnvelope: {
                    request: {
                        type: "IntentRequest",
                        requestId: "",
                        timestamp: "",
                        dialogState: {},
                        locale: "",
                        intent: {
                            name: "TestIntent"
                        }
                    }
                }
            };
            const logger = new index_1.ConsoleLogger();
            const spiedLogger = ts_mockito_1.spy(logger);
            const interceptor = new index_1.LogResponseInterceptor(logger);
            interceptor.process(handlerInput);
            const firstCallArgs = ts_mockito_1.capture(spiedLogger.log).first();
            const secondCallArgs = ts_mockito_1.capture(spiedLogger.log).second();
            ts_mockito_1.verify(spiedLogger.log(ts_mockito_1.anything())).twice();
            chai_1.expect(firstCallArgs[0]).to.contain('RESPONSE');
            chai_1.expect(secondCallArgs[0]).to.equal('NONE');
        });
    });
});
