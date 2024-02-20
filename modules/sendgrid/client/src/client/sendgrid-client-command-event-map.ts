import { createClientCommandEventMap } from '@komore/client';

import { type sendGridCommand } from '../sendgrid.command';
import { type sendGridEvent } from '../sendgrid.event';

/**
 * SendGrid client command-to-event map
 */
export const sendGridClientCommandEventMap = createClientCommandEventMap<
  typeof sendGridCommand,
  typeof sendGridEvent
>()({
  createTemplate: 'templateCreated',
  createTemplateVersion: 'templateVersionCreated',
  deleteTemplate: 'templateDeleted',
  deleteTemplateVersion: 'templateVersionDeleted',
  duplicateTemplate: 'templateDuplicated',
});
