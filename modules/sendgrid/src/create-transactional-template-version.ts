import { type CreateTransactionalTemplateVersionRequest } from './create-transactional-template-version-request';
import { type CreateTransactionalTemplateVersionResponse } from './create-transactional-template-version-response';
import { type SendGridClient } from './sendgrid-client';

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
