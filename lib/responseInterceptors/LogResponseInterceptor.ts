import { HandlerInput } from 'ask-sdk-core';
import { ResponseInterceptor } from 'ask-sdk-runtime';
import { Response } from 'ask-sdk-model';
import { ILogger } from '../logger/ILogger';

export class LogResponseInterceptor implements ResponseInterceptor<HandlerInput, Response> {

    public logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    public process(handlerInput: HandlerInput, response?: Response): Promise<void> | void {
        this.logger.log('******************* RESPONSE **********************');
        if (response) {
            this.logger.log(JSON.stringify(response, null, 2));
        } else {
            this.logger.log('NONE');
        }
    }
}
