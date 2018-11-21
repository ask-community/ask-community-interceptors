"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export interface RequestInterceptor<Input> {
//     process(input: Input): Promise<void> | void;
// }
// export interface ResponseInterceptor<Input, Output> {
//     process(input: Input, output?: Output): Promise<void> | void;
// }
class LocalizationRequestInterceptor {
    process(handlerInput) {
    }
}
exports.LocalizationRequestInterceptor = LocalizationRequestInterceptor;
// const LocalizationInterceptor = {
//     process(handlerInput) {
//       const localizationClient = i18n.use(sprintf).init({
//         lng: handlerInput.requestEnvelope.request.locale,
//         resources: languageStrings,
//       });
//       localizationClient.localize = function localize() {
//         const args = arguments;
//         const values = [];
//         for (let i = 1; i < args.length; i += 1) {
//           values.push(args[i]);
//         }
//         const value = i18n.t(args[0], {
//           returnObjects: true,
//           postProcess: 'sprintf',
//           sprintf: values,
//         });
//         if (Array.isArray(value)) {
//           return value[Math.floor(Math.random() * value.length)];
//         }
//         return value;
//       };
//       const attributes = handlerInput.attributesManager.getRequestAttributes();
//       attributes.t = function translate(...args) {
//         return localizationClient.localize(...args);
//       };
//     },
//   };
