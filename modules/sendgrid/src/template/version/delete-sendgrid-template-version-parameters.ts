import { type SendGridTemplateId } from '../id/sendgrid-template-id';
import { type SendGridTemplateVersionId } from './id/sendgrid-template-version-id';

/**
 * Delete SendGrid template version parameters
 */
export interface DeleteSendGridTemplateVersionParameters {
  /**
   * Template identifier
   */
  readonly templateId: SendGridTemplateId;
  /**
   * Version identifier
   */
  readonly versionId: SendGridTemplateVersionId;
}
