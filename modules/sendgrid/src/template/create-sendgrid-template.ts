import { type SendGridApiClient } from '../sendgrid-api-client';
import { type SendGridTemplate } from './sendgrid-template';

/**
 * Creates a function that creates a SendGrid template
 *
 * @param apiClient SendGrid API client
 * @returns Function that creates a SendGrid template
 */
export function createSendGridTemplate(
  apiClient: SendGridApiClient
): (template: SendGridTemplate) => Observable<SendGridTemplate> {
  return request => apiClient<SendGridTemplate>('POST', 'templates', request);
}
