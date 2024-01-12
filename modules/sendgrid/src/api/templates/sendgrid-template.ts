import { type SendGridTemplateId } from './id/sendgrid-template-id';
import { type SendGridTemplateGenerationType } from './sendgrid-template-generation-type';
import { type SendGridTemplateVersion } from './sendgrid-template-version';

/**
 * SendGrid template
 */
export interface SendGridTemplate {
  /**
   * Generation type
   */
  readonly generation: SendGridTemplateGenerationType;
  /**
   * Template identifier
   */
  readonly id: SendGridTemplateId;
  /**
   * Template name
   */
  readonly name: string;
  /**
   * List of template versions
   */
  readonly versions?: ReadonlyArray<SendGridTemplateVersion>;
}
