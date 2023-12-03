import { FormRecognizerClient as AzureSdkFormRecognizerClient } from '@azure/cognitiveservices-formrecognizer';
import { type ServiceClientCredentials, type ServiceClientOptions } from '@azure/ms-rest-js';

import { type FormRecognizerClient } from './form-recognizer-client';
import { type FormRecognizerClientOptions } from './form-recognizer-client-options';

/**
 * Creates a Form Recognizer client
 *
 * @param clientOptions Form Recognizer client options
 * @returns Form Recognizer client
 */
export function createFormRecognizerClient(clientOptions: FormRecognizerClientOptions): FormRecognizerClient {
  const { endpointUrl } = clientOptions;
  const credentials = void 0 as unknown as ServiceClientCredentials;
  const endpoint = endpointUrl.toString();
  const options = void 0 as unknown as ServiceClientOptions;
  return new AzureSdkFormRecognizerClient(credentials, endpoint, options);
}
