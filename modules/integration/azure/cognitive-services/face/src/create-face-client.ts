import { FaceClient } from '@azure/cognitiveservices-face';
import type { ServiceClientCredentials } from '@azure/core-auth';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FACE_APIKEY: string;
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FACE_ENDPOINTURL: string;
    }
  }
}

/**
 * Creates a Face client
 * @param endpointUrl Endpoint URL
 * @param options Options
 * @returns Face client
 */
export function createFaceClient(endpointUrl?: string, options?: ServiceClientOptions): FaceClient {
  return new FaceClient(credentials, endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_COGNITIVESERVICES_FACE_ENDPOINTURL, options);
}
