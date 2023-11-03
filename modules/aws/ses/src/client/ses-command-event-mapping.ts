import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type sesCommand } from '../command/ses.command';
import { type sesEvent } from './ses.event';

/**
 * SES command to event mapping
 *
 * @private
 */
export const sesCommandEventMapping = {
  createEmailTemplate: 'emailTemplateCreated',
  deleteEmailTemplate: 'emailTemplateDeleted',
  sendBulkEmail: 'bulkEmailSent',
  sendEmail: 'emailSent',
} as const satisfies ReadonlyRecord<CommandName<typeof sesCommand>, EventName<typeof sesEvent>>;
