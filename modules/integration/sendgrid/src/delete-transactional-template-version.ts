import type { SendGridClient } from './sendgrid-client';

/**
 * Deletes a transactional template version
 * @param sendGridClient SendGrid client
 * @param templateId Template identifier
 * @param versionId Version identifier
 * @note {@link https://sendgrid.api-docs.io/v3.0/transactional-templates-versions/delete-a-transactional-template-version DELETE /templates/:templateId/versions/:versionId}
 */
export function deleteTransactionalTemplateVersion(
  sendGridClient: SendGridClient,
  templateId: string,
  versionId: string
) {
  return sendGridClient<void>('DELETE', `/templates/${templateId}/versions/${versionId}`);
}
