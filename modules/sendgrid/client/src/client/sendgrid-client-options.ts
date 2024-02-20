import { type SendGridApiClient } from '@komore/sendgrid';

/**
 * SendGrid client options
 */
export interface SendGridClientOptions {
  /**
   * API client
   */
  readonly apiClient: SendGridApiClient;
}
