import { AzureKeyCredential, TextAnalyticsClient } from '@azure/ai-text-analytics';

/**
 * Variables available on AWS Lambda host environments
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
 * Creates a default Text Analytics client
 * @returns Default Text Analytics client
 */
export function createDefaultTextAnalyticsClient(): TextAnalyticsClient {
  return new TextAnalyticsClient(
    process.env.KMR_INTEGRATION_AZURE_TEXTANALYTICS_ENDPOINT,
    new AzureKeyCredential(process.env.KMR_INTEGRATION_AZURE_TEXTANALYTICS_APIKEY)
  );
}
