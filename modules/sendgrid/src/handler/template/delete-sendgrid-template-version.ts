import { mapTo } from '@komore/reactive';

import { type SendGridApiClient } from '../../api/sendgrid-api-client';
import { sendGridEvent } from '../../sendgrid.event';
import { type SendGridCommandEventHandler } from '../sendgrid-command-event-handler';

export function deleteSendGridTemplateVersion(
  apiClient: SendGridApiClient
): SendGridCommandEventHandler<'deleteTemplateVersion'> {
  return ({ templateId, versionId }) =>
    apiClient<{}>('DELETE', `templates/${templateId}/versions/${versionId}`).pipe(
      mapTo(sendGridEvent.templateVersionDeleted({ templateId, versionId }))
    );
}
