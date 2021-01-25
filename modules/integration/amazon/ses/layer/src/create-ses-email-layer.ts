import { createSESClient, deleteEmailTemplate } from '@komore/integration-amazon/ses';
import type { EmailLayer } from '@komore/layer-email';
import { mapToVoid } from '@komore/operators';
import { createEmailTemplateSESLayer } from './create-email-template-ses-layer';

/**
 * Creates an SES email layer
 * @returns Email layer
 */
export function createSESEmailLayer(): EmailLayer {
  const sesClient = createSESClient();

  return {
    createEmailTemplate: createEmailTemplateSESLayer(sesClient),
    deleteEmailTemplate: id => deleteEmailTemplate(sesClient, { TemplateName: id }).pipe(mapToVoid())
  }
}
