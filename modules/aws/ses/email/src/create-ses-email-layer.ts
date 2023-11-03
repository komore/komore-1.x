import { createSESClient, deleteEmailTemplate } from '@komore/aws/ses';
import { type EmailLayer } from '@komore/email';
import { redactValue } from '@komore/reactive';
import { createEmailTemplateSESLayer } from './create-email-template-ses-layer';

/**
 * Creates an SES email layer
 * @returns Email layer
 */
export function createSESEmailLayer(): EmailLayer {
  const sesClient = createSESClient();

  return {
    createEmailTemplate: createEmailTemplateSESLayer(sesClient),
    deleteEmailTemplate: id => deleteEmailTemplate(sesClient, { TemplateName: id }).pipe(redactValue()),
  };
}
