import { type HttpClient } from '@komore/http/client';

/**
 * SendGrid client options
 */
export interface SendGridClientOptions {
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
   *
   * @see {@link https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/on-behalf-of On Behalf Of}
   */
  readonly onBehalfOf?:
    | {
        readonly customerAccountId: string;
      }
    | {
        readonly subUserName: string;
      };
}
