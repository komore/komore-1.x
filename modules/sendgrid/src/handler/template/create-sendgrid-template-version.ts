import { map } from '@komore/reactive';

import { type SendGridApiClient } from '../../api/sendgrid-api-client';
import { type SendGridApiResponseWithWarning } from '../../api/sendgrid-api-response-with-warning';
import { type SendGridTemplateVersion } from '../../api/templates/sendgrid-template-version';
import { sendGridEvent } from '../../sendgrid.event';
import { type SendGridCommandEventHandler } from '../sendgrid-command-event-handler';

export function createSendGridTemplateVersion(
  apiClient: SendGridApiClient
): SendGridCommandEventHandler<'createTemplateVersion'> {
  return request =>
    apiClient<SendGridApiResponseWithWarning<SendGridTemplateVersion>>(
      'POST',
      `templates/${request.template_id}/versions`,
      request
    ).pipe(
      map(({ warning, ...templateVersion }) =>
        sendGridEvent.templateVersionCreated({
          templateVersion,
          ...(warning !== undefined ? { warning } : {}),
        })
      )
    );
}
