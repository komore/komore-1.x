import { type SendGridApiClient } from '../../sendgrid-api-client';
import { type DeleteSendGridTemplateVersionParameters } from './delete-sendgrid-template-version-parameters';

/**
 * Creates a function that deletes a SendGrid template version
 *
 * @param apiClient SendGrid API client
 * @returns Function that deletes a SendGrid template version
 */
export function deleteSendGridTemplateVersion(
  apiClient: SendGridApiClient
): (parameters: DeleteSendGridTemplateVersionParameters) => Observable<void> {
  return ({ templateId, versionId }) => apiClient('DELETE', `templates/${templateId}/versions/${versionId}`);
}
