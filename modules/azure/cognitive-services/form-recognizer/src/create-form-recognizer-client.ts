import { FormRecognizerClient } from '@azure/cognitiveservices-formrecognizer';
import { type ServiceClientCredentials } from '@azure/core-auth';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FORMRECOGNIZER_APIKEY: string;
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FORMRECOGNIZER_ENDPOINTURL: string;
    }
  }
}

/**
 * Creates a Form Recognizer client
 * @param endpointUrl Endpoint URL
 * @param options Options
 * @returns Form Recognizer client
 */
export function createFormRecognizerClient(endpointUrl?: string, options?: ServiceClientOptions): FormRecognizerClient {
  return new FormRecognizerClient(
    credentials,
    endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FORMRECOGNIZER_ENDPOINTURL,
    options
  );
}
