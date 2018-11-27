import { HandlerInput } from 'ask-sdk-core';
import { ResponseInterceptor } from 'ask-sdk-runtime';
import { Response } from 'ask-sdk-model';
import { ILogger } from '../logger/ILogger';
export declare class LogResponseInterceptor implements ResponseInterceptor<HandlerInput, Response> {
    logger: ILogger;
    constructor(logger: ILogger);
    process(handlerInput: HandlerInput, response?: Response): Promise<void> | void;
}
