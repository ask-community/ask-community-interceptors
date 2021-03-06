import { HandlerInput } from 'ask-sdk-core';
import { RequestInterceptor } from 'ask-sdk-runtime';
import { ILogger } from '../logger/ILogger';

export class LogRequestInterceptor implements RequestInterceptor<HandlerInput> {

    public logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    public process(handlerInput: HandlerInput): Promise<void> | void {
        this.logger.log('******************* REQUEST **********************');
        this.logger.log(JSON.stringify(handlerInput.requestEnvelope, null, 2));
    }
}
