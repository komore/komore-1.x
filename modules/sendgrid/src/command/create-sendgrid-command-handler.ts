import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, mapTo, tapNext } from '@komore/reactive';

import { createSendGridTemplate } from './operation/create-sendgrid-template';
import { createSendGridTemplateVersion } from './operation/create-sendgrid-template-version';
import { deleteSendGridTemplate } from './operation/delete-sendgrid-template';
import { deleteSendGridTemplateVersion } from './operation/delete-sendgrid-template-version';
import { duplicateSendGridTemplate } from './operation/duplicate-sendgrid-template';
import { type SendGridCommandHandler } from './sendgrid-command-handler';
import { type SendGridCommandHandlerOptions } from './sendgrid-command-handler-options';

/**
 * Creates a Sendgrid command handler
 *
 * @param handlerOptions Sendgrid command handler options
 * @returns Sendgrid command handler
 */
export function createSendGridCommandHandler(handlerOptions: SendGridCommandHandlerOptions): SendGridCommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  const createTemplate = createSendGridTemplate(apiClient);
  const createTemplateVersion = createSendGridTemplateVersion(apiClient);
  const deleteTemplate = deleteSendGridTemplate(apiClient);
  const deleteTemplateVersion = deleteSendGridTemplateVersion(apiClient);
  const duplicateTemplate = duplicateSendGridTemplate(apiClient);

  return command =>
    matchCommand(command, {
      createTemplate,
      createTemplateVersion,
      deleteTemplate,
      deleteTemplateVersion,
      duplicateTemplate,
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), mapTo(void 0));
}
