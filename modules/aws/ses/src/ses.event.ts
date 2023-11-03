import {
  type CreateEmailTemplateCommandOutput,
  type DeleteEmailTemplateCommandOutput,
  type SendBulkEmailCommandOutput,
  type SendEmailCommandOutput,
} from '@aws-sdk/client-sesv2';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { sesDomain } from './ses.domain';

/**
 * SES event
 */
export const sesEvent = createAwsEventType(sesDomain, {
  /**
   * An email message has been sent to multiple destinations
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html SendBulkEmail}
   */
  bulkEmailSent: eventProperties<SendBulkEmailCommandOutput>(),
  /**
   * An email message has been sent
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html SendEmail}
   */
  emailSent: eventProperties<SendEmailCommandOutput>(),
  /**
   * An email template has been created
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html CreateEmailTemplate}
   */
  emailTemplateCreated: eventProperties<CreateEmailTemplateCommandOutput>(),
  /**
   * An email template has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html DeleteEmailTemplate}
   */
  emailTemplateDeleted: eventProperties<DeleteEmailTemplateCommandOutput>(),
});
