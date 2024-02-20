import { map } from '@komore/reactive';

import { type SendGridApiClient } from '../sendgrid-api-client';
import { type SendGridApiResponseWithWarning } from '../api/sendgrid-api-response-with-warning';
import { type SendGridTemplateVersion } from './sendgrid-template-version';

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
