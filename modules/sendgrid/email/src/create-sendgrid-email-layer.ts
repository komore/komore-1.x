import { type EmailLayer } from '@komore/email';
import { createSendGridClient, sendGridCommand } from '@komore/sendgrid';

import { type SendGridEmailLayerOptions } from './sendgrid-email-layer-options';

/**
 * Creates a Sendgrid email layer
 *
 * @returns Sendgrid email layer
 */
export function createSendgridEmailLayer(layerOptions: SendGridEmailLayerOptions): EmailLayer {
  const { clientOptions } = layerOptions;
  const sendGridClient = createSendGridClient(clientOptions);
  // TODO: email impl should be EmailClient, taking the layer as an option
  // TODO: mapping emailCommand -> sendGridCommand
  // TODO: mapping sendGridEvent -> emailEvent
  return {
    createEmailTemplate: _emailTemplate => sendGridClient(sendGridCommand.createTemplate({})),
    deleteEmailTemplate: _templateId => sendGridClient(sendGridCommand.deleteTemplate({})),
  };
}
