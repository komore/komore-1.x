import { type HttpClient } from '@komore/http/client';

/**
 * SendGrid API client options
 */
export interface SendGridApiClientOptions {
  /**
   * API key
   */
  readonly apiKey: string;
  /**
   * Endpoint URL
   *
   * @note Defaults to `https://api.sendgrid.com/v3/`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * API requests should be made on behalf of a customer account identifier or a sub-user name
   */
  readonly onBehalfOf?:
    | {
        readonly customerAccountId: string;
      }
    | {
        readonly subUserName: string;
      };
}
