import { type SendGridApiClient } from '../sendgrid-api-client';
import { type SendGridTemplateId } from './id/sendgrid-template-id';

/**
 * Creates a function that deletes a SendGrid template
 *
 * @param apiClient SendGrid API client
 * @returns Function that deletes a SendGrid template
 */
export function deleteSendGridTemplate(
  apiClient: SendGridApiClient
): (templateId: SendGridTemplateId) => Observable<void> {
  return templateId => apiClient('DELETE', `templates/${templateId}`);
}
