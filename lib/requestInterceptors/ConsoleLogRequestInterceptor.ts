import { HandlerInput } from "ask-sdk";
import { RequestInterceptor } from "ask-sdk-runtime"


export class ConsoleLogRequestInterceptor implements RequestInterceptor<HandlerInput> {
    
    process(handlerInput: HandlerInput): Promise<void> | void {
        console.log(JSON.stringify(handlerInput.requestEnvelope.request, null, '  '));
    } 
}
