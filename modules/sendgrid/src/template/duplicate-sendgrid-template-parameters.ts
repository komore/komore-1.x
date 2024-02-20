import { type SendGridTemplateId } from './id/sendgrid-template-id';

/**
 * Duplicate SendGrid template parameters
 */
export interface DuplicateSendGridTemplateParameters {
  /**
   * Duplicated template name
   */
  readonly name: string;
  /**
   * Source template identifier
   */
  readonly templateId: SendGridTemplateId;
}
