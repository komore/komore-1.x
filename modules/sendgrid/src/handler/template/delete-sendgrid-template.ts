import { mapTo } from '@komore/reactive';

import { type SendGridApiClient } from '../../api/sendgrid-api-client';
import { sendGridEvent } from '../../sendgrid.event';
import { type SendGridCommandEventHandler } from '../sendgrid-command-event-handler';

export function deleteSendGridTemplate(apiClient: SendGridApiClient): SendGridCommandEventHandler<'deleteTemplate'> {
  return ({ templateId }) =>
    apiClient<{}>('DELETE', `templates/${templateId}`).pipe(mapTo(sendGridEvent.templateDeleted({ templateId })));
}
