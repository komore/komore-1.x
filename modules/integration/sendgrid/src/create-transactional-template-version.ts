import type { CreateTransactionalTemplateVersionRequest } from './create-transactional-template-version-request';
import type { CreateTransactionalTemplateVersionResponse } from './create-transactional-template-version-response';
import type { SendGridClient } from './sendgrid-client';

/**
 * Creates a transactional template
 * @param sendGridClient SendGrid client
 * @param request Create transactional template version request
 * @returns Create transactional template version response
 * @note {@link https://sendgrid.api-docs.io/v3.0/transactional-templates-versions/create-a-new-transactional-template-version POST /templates/:templateId/versions}
 */
export function createTransactionalTemplateVersion(
  sendGridClient: SendGridClient,
  request: CreateTransactionalTemplateVersionRequest
) {
  const templateId = request.template_id;
  return sendGridClient<CreateTransactionalTemplateVersionResponse>(
    'POST',
    `/templates/${templateId}/versions`,
    request
  );
}
