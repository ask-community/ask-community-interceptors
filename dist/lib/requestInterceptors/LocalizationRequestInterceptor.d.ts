import { HandlerInput } from "ask-sdk";
import { RequestInterceptor } from "ask-sdk-runtime";
export declare class LocalizationRequestInterceptor implements RequestInterceptor<HandlerInput> {
    process(handlerInput: HandlerInput): Promise<void> | void;
}
