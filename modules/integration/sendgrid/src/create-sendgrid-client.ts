import { assert } from '@komore/typescript';
import { Client } from '@sendgrid/client';
import { defer } from 'rxjs';
import type { SendGridClient } from './sendgrid-client';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_SENDGRID_APIKEY?: string;
      KMR_INTEGRATION_SENDGRID_ENDPOINTURL?: string;
      SENDGRID_API_KEY?: string;
    }
  }
}

/**
 * Creates a SendGrid client
 * @param apiKey API key
 * @param endpointUrl Endpoint URL
 * @returns SendGrid client
 */
export function createSendGridClient(apiKey?: string, endpointUrl?: string): SendGridClient {
  const sendGridClient = new Client();
  const baseUrl = endpointUrl ?? process.env.KMR_INTEGRATION_SENDGRID_ENDPOINTURL;
  const selectedApiKey = apiKey ?? process.env.KMR_INTEGRATION_SENDGRID_APIKEY ?? process.env.SENDGRID_API_KEY;
  assert(selectedApiKey !== undefined, 'a Sendgrid client cannot be instantiated without an API key');

  sendGridClient.setApiKey(selectedApiKey);

  if (baseUrl !== undefined) {
    sendGridClient.setDefaultRequest('baseUrl', baseUrl);
  }

  return (method, url, body) =>
    defer(async () => {
      const [clientResponse, responseBody] = await sendGridClient.request({
        method,
        url,
        body
      });

      if (clientResponse.statusCode >= 400) {
        const errorInfo = `${clientResponse.statusCode}: ${clientResponse.body ?? '<empty>'})`;
        throw new Error(`request ${method} ${url} failed (${errorInfo})`);
      }

      return responseBody;
    });
}
