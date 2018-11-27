import { HandlerInput } from 'ask-sdk-core';
import { RequestInterceptor } from 'ask-sdk-runtime';
import { ILogger } from '../logger/ILogger';
export declare class LogRequestInterceptor implements RequestInterceptor<HandlerInput> {
    logger: ILogger;
    constructor(logger: ILogger);
    process(handlerInput: HandlerInput): Promise<void> | void;
}
