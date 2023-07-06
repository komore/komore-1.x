import { type CreateTransactionalTemplateRequest } from './create-transactional-template-request';
import { type CreateTransactionalTemplateResponse } from './create-transactional-template-response';
import { type SendGridClient } from './sendgrid-client';

/**
 * Creates a transactional template
 * @param sendGridClient SendGrid client
 * @param request Create transactional template request
 * @returns Create transactional template response
 * @note {@link https://sendgrid.api-docs.io/v3.0/transactional-templates/create-a-transactional-template POST /templates}
 */
export function createTransactionalTemplate(
  sendGridClient: SendGridClient,
  request: CreateTransactionalTemplateRequest
) {
  return sendGridClient<CreateTransactionalTemplateResponse>('POST', '/templates', request);
}
