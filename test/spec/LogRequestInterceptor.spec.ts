import { expect } from "chai";
import { verify, anything, spy, capture } from "ts-mockito";
import { HandlerInput } from "ask-sdk-core";
import { IntentRequest, RequestEnvelope } from "ask-sdk-model";

import { LogRequestInterceptor, ConsoleLogger, ILogger } from "../../lib/index";

describe("LogRequestInterceptor", () => {
  describe("intercepting request", () => {
    it("should log request object", () => {
      const handlerInput = <HandlerInput>{
        requestEnvelope: <RequestEnvelope>{
          request: <IntentRequest>{
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

      const logger: ILogger = new ConsoleLogger();
      const spiedLogger = spy(logger);

      const interceptor = new LogRequestInterceptor(logger);
      interceptor.process(handlerInput);

      const firstCallArgs = capture(spiedLogger.log).first();
      const secondCallArgs = capture(spiedLogger.log).second();

      verify(spiedLogger.log(anything())).twice();
      expect(firstCallArgs[0]).to.contain('REQUEST');
      expect(secondCallArgs[0]).to.equal(
        JSON.stringify(handlerInput.requestEnvelope, null, 2)
      );
    });
  });
});
