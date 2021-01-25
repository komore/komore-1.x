import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import type { ServiceClientCredentials } from '@azure/core-auth';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_COMPUTERVISION_APIKEY: string;
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_COMPUTERVISION_ENDPOINTURL: string;
    }
  }
}

/**
 * Creates a Computer Vision client
 * @param endpointUrl Endpoint URL
 * @param options Options
 * @returns Computer Vision client
 */
export function createComputerVisionClient(endpointUrl?: string, options?: ServiceClientOptions): ComputerVisionClient {
  return new ComputerVisionClient(
    credentials,
    endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_COGNITIVESERVICES_COMPUTERVISION_ENDPOINTURL,
    options
  );
}
