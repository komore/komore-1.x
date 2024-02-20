import { type SendGridApiClient } from '../sendgrid-api-client';
import { type DuplicateSendGridTemplateParameters } from './duplicate-sendgrid-template-parameters';
import { type SendGridTemplate } from './sendgrid-template';

/**
 * Creates a function that duplicates a SendGrid template
 *
 * @param apiClient SendGrid API client
 * @returns Function that duplicates a SendGrid template
 */
export function duplicateSendGridTemplate(
  apiClient: SendGridApiClient
): (parameters: DuplicateSendGridTemplateParameters) => Observable<SendGridTemplate> {
  return ({ name, templateId }) => apiClient<SendGridTemplate>('POST', `templates/${templateId}`, { name });
}
