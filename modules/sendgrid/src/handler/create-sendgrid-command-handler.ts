import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, mapTo, tapNext } from '@komore/reactive';

import { type SendGridCommandHandler } from './sendgrid-command-handler';
import { type SendGridCommandHandlerOptions } from './sendgrid-command-handler-options';
import { createSendGridTemplate } from './template/create-sendgrid-template';
import { createSendGridTemplateVersion } from './template/create-sendgrid-template-version';
import { deleteSendGridTemplate } from './template/delete-sendgrid-template';
import { deleteSendGridTemplateVersion } from './template/delete-sendgrid-template-version';
import { duplicateSendGridTemplate } from './template/duplicate-sendgrid-template';

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
