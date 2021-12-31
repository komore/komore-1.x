import { type EmailLayer } from '@komore/email';
import {
  createSendGridClient,
  createTransactionalTemplate,
  deleteTransactionalTemplate
} from '@komore/integration-sendgrid';

/**
 * Creates a Sendgrid email layer
 * @returns Sendgrid email layer
 */
export function createSendgridEmailLayer(): EmailLayer {
  const sendGridClient = createSendGridClient();
  return {
    createEmailTemplate: emailTemplate =>
      of(emailTemplate).pipe(mergeMap(() => createTransactionalTemplate(sendGridclient, request))),
    deleteEmailTemplate: templateId => deleteTransactionalTemplate(sendGridClient, templateId)
  };
}
