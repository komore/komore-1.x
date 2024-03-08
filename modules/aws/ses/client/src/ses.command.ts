import {
  type CreateEmailTemplateCommandInput,
  type DeleteEmailTemplateCommandInput,
  type SendBulkEmailCommandInput,
  type SendEmailCommandInput,
} from '@aws-sdk/client-sesv2';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { sesDomain } from './ses.domain';

/**
 * SES command
 */
export const sesCommand = createAwsCommandType(sesDomain, {
  /**
   * Creates an email template
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html CreateEmailTemplate}
   */
  createEmailTemplate: commandProperties<CreateEmailTemplateCommandInput>(),
  /**
   * Deletes an email template
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html DeleteEmailTemplate}
   */
  deleteEmailTemplate: commandProperties<DeleteEmailTemplateCommandInput>(),
  /**
   * Composes an email message to multiple destinations
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html SendBulkEmail}
   */
  sendBulkEmail: commandProperties<SendBulkEmailCommandInput>(),
  /**
   * Sends an email message
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html SendEmail}
   */
  sendEmail: commandProperties<SendEmailCommandInput>(),
});
