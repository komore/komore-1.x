import { type SendGridApiClient } from '../api/sendgrid-api-client';

/**
 * SendGrid query handler otpions
 */
export interface SendGridQueryHandlerOptions {
  /**
   * SendGrid API client
   */
  readonly apiClient: SendGridApiClient;
}
