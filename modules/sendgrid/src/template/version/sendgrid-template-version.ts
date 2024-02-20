import { type UrlString } from '@komore/url';

import { type SendGridTemplateId } from '../id/sendgrid-template-id';
import { type SendGridTemplateVersionId } from './id/sendgrid-template-version-id';

/**
 * SendGrid template version
 */
export interface SendGridTemplateVersion {
  /**
   * Whether the version is the active version of the template
   */
  readonly active: 0 | 1;
  /**
   * Editor used
   */
  readonly editor: 'code' | 'design';
  /**
   * Template version identifier
   */
  readonly id: SendGridTemplateVersionId;
  /**
   * Whether plain text content should be generated
   */
  readonly generate_plain_content: boolean;
  /**
   * HTML content
   */
  readonly html_content: string;
  /**
   * Plain text content
   */
  readonly plain_content: string;
  /**
   * Subject
   */
  readonly subject: string;
  /**
   * Template identifier
   */
  readonly template_id: SendGridTemplateId;
  /**
   * Preview of the template's HTML content
   */
  readonly thumbnail_url: UrlString;
  /**
   * Date and time the template version was updated
   */
  readonly updated_at: string;
}
