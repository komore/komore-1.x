import { map } from '@komore/reactive';

import { type SendGridApiClient } from '../../api/sendgrid-api-client';
import { type SendGridApiResponseWithWarning } from '../../api/sendgrid-api-response-with-warning';
import { type SendGridTemplate } from '../../api/templates/sendgrid-template';
import { sendGridEvent } from '../../sendgrid.event';
import { type SendGridCommandEventHandler } from '../sendgrid-command-event-handler';

export function duplicateSendGridTemplate(
  apiClient: SendGridApiClient
): SendGridCommandEventHandler<'duplicateTemplate'> {
  return ({ name, templateId }) =>
    apiClient<SendGridApiResponseWithWarning<SendGridTemplate>>('POST', `templates/${templateId}`, { name }).pipe(
      map(({ warning, ...template }) =>
        sendGridEvent.templateDuplicated({
          originalTemplateId: templateId,
          template,
          ...(warning !== undefined ? { warning } : {}),
        })
      )
    );
}
