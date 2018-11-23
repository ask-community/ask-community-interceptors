import { HandlerInput } from "ask-sdk-core";
import { ResponseInterceptor } from "ask-sdk-runtime"
import { ILogger } from '../logger/ILogger'

export class LogResponseInterceptor implements ResponseInterceptor<HandlerInput, Response> {
    
    logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    process(handlerInput: HandlerInput, response?: Response): Promise<void> | void {
        this.logger.log('******************* RESPONSE **********************');
        if (response) {
            this.logger.log(JSON.stringify(response, null, 2));
        }
        else {
            this.logger.log("NONE");
        }      
    } 
}