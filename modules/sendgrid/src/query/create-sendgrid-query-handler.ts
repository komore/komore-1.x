import { matchQuery } from '@komore/query';

import { type SendGridQueryHandler } from './sendgrid-query-handler';
import { type SendGridQueryHandlerOptions } from './sendgrid-query-handler-options';
import { SendGridTemplate } from '..';
import { SendGridApiResponseWithWarning } from '../api/sendgrid-api-response-with-warning';
import { map } from '@komore/reactive';

/**
 * Creates a SendGrid query handler
 *
 * @param handlerOptions SendGrid query handler options
 * @returns SendGrid query handler
 */
export function createSendGridQueryHandler(handlerOptions: SendGridQueryHandlerOptions): SendGridQueryHandler {
  const { apiClient } = handlerOptions;
  return query =>
    matchQuery(query, {
      getTemplate: ({ templateId }) =>
        apiClient<SendGridApiResponseWithWarning<SendGridTemplate>>('GET', `templates/${templateId}`).pipe(
          map(({ warning, ...template }) => ({
            template,
            ...(warning !== undefined ? { warning } : {}),
          }))
        ),
    });
}
