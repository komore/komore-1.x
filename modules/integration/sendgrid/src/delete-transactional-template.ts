import type { SendGridClient } from './sendgrid-client';

/**
 * Deletes a transactional template
 * @param sendGridClient SendGrid client
 * @param templateId Template identifier
 * @note {@link https://sendgrid.api-docs.io/v3.0/transactional-templates/delete-a-template DELETE /templates/:templateId}
 */
export function deleteTransactionalTemplate(
  sendGridClient: SendGridClient,
  templateId: string
) {
  return sendGridClient<void>('DELETE', `/templates/${templateId}`);
}
