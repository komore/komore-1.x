import { createSESClient, deleteEmailTemplate } from '@komore/integration-amazon/ses';
import type { EmailLayer } from '@komore/layer-email';
import { retractValue } from '@komore/reactive/operators';
import { createEmailTemplateSESLayer } from './create-email-template-ses-layer';

/**
 * Creates an SES email layer
 * @returns Email layer
 */
export function createSESEmailLayer(): EmailLayer {
  const sesClient = createSESClient();

  return {
    createEmailTemplate: createEmailTemplateSESLayer(sesClient),
    deleteEmailTemplate: id => deleteEmailTemplate(sesClient, { TemplateName: id }).pipe(retractValue())
  };
}
