import { expect } from 'chai';
import { verify, anything, spy, capture } from 'ts-mockito';
import { HandlerInput } from 'ask-sdk-core';
import { IntentRequest, RequestEnvelope, Response } from 'ask-sdk-model';

import { LogResponseInterceptor, ConsoleLogger, ILogger } from './../../index';

describe('LogResponseInterceptor', () => {
  describe('intercepting when there is a response object', () => {
    it('should log response object', () => {
      const handlerInput = {
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
          } as IntentRequest
        } as RequestEnvelope
      } as HandlerInput;

      const response = {} as Response;

      const logger: ILogger = new ConsoleLogger();
      const spiedLogger = spy(logger);

      const interceptor = new LogResponseInterceptor(logger);
      interceptor.process(handlerInput, response);

      const firstCallArgs = capture(spiedLogger.log).first();
      const secondCallArgs = capture(spiedLogger.log).second();

      verify(spiedLogger.log(anything())).twice();
      expect(firstCallArgs[0]).to.contain('RESPONSE');
      expect(secondCallArgs[0]).to.equal(JSON.stringify(response, null, 2));
    });
  });

  describe('intercepting when there is NO response object', () => {
    it('should log NONE', () => {
      const handlerInput = {
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
          } as IntentRequest
        } as RequestEnvelope
      } as HandlerInput;

      const logger: ILogger = new ConsoleLogger();
      const spiedLogger = spy(logger);

      const interceptor = new LogResponseInterceptor(logger);
      interceptor.process(handlerInput);

      const firstCallArgs = capture(spiedLogger.log).first();
      const secondCallArgs = capture(spiedLogger.log).second();

      verify(spiedLogger.log(anything())).twice();
      expect(firstCallArgs[0]).to.contain('RESPONSE');
      expect(secondCallArgs[0]).to.equal('NONE');
    });
  });
});
