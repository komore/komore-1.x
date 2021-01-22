import type { TextAnalyticsClientOptions } from '@azure/ai-text-analytics';
import { AzureKeyCredential, TextAnalyticsClient } from '@azure/ai-text-analytics';
import type { KeyCredential, TokenCredential } from '@azure/core-auth';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_TEXTANALYTICS_APIKEY: string;
      KMR_INTEGRATION_AZURE_TEXTANALYTICS_ENDPOINT: string;
    }
  }
}

/**
 * Creates a Text Analytics client
 * @param endpointUrl Endpoint URL
 * @param credential Credential
 * @param options Options
 * @returns Text Analytics client
 */
export function createTextAnalyticsClient(
  endpointUrl?: string,
  credential?: TokenCredential | KeyCredential,
  options?: TextAnalyticsClientOptions
): TextAnalyticsClient {
  return new TextAnalyticsClient(
    endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_TEXTANALYTICS_ENDPOINT,
    credential ?? new AzureKeyCredential(process.env.KMR_INTEGRATION_AZURE_TEXTANALYTICS_APIKEY),
    options
  );
}
