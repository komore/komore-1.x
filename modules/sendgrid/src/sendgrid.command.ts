import { commandProperties, createCommandType } from '@komore/command';

import { type CreateTransactionalTemplateVersionRequest } from './api/create-transactional-template-version-request';
import { sendGridDomain } from './sendgrid.domain';

/**
 * SendGrid command
 */
export const sendGridCommand = createCommandType(sendGridDomain, {
  /**
   * Creates a transactional template version
   *
   * @param properties Create transactional template version request
   * @see {@link https://sendgrid.api-docs.io/v3.0/transactional-templates-versions/create-a-new-transactional-template-version POST /templates/:templateId/versions}
   */
  createTransactionalTemplateVersion: commandProperties<CreateTransactionalTemplateVersionRequest>(),
});
