import { createEventType, eventProperties } from '@komore/event';

import { type CreateTransactionalTemplateVersionResponse } from './api/create-transactional-template-version-response';
import { sendGridDomain } from './sendgrid.domain';

/**
 * SendGrid event
 */
export const sendGridEvent = createEventType(sendGridDomain, {
  /**
   * A transactional template version has been created
   *
   * @param properties Create transactional template version response
   * @see {@link https://sendgrid.api-docs.io/v3.0/transactional-templates-versions/create-a-new-transactional-template-version POST /templates/:templateId/versions}
   */
  transactionalTemplateVersionCreated: eventProperties<CreateTransactionalTemplateVersionResponse>(),
});
