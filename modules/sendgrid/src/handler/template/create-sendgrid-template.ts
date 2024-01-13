import { map } from '@komore/reactive';

import { type SendGridApiClient } from '../../api/sendgrid-api-client';
import { type SendGridApiResponseWithWarning } from '../../api/sendgrid-api-response-with-warning';
import { type SendGridTemplate } from '../../api/templates/sendgrid-template';
import { sendGridEvent } from '../../sendgrid.event';
import { type SendGridCommandEventHandler } from '../sendgrid-command-event-handler';

export function createSendGridTemplate(apiClient: SendGridApiClient): SendGridCommandEventHandler<'createTemplate'> {
  return request =>
    apiClient<SendGridApiResponseWithWarning<SendGridTemplate>>('POST', 'templates', request).pipe(
      map(({ warning, ...template }) =>
        sendGridEvent.templateCreated({
          template,
          ...(warning !== undefined ? { warning } : {}),
        })
      )
    );
}
