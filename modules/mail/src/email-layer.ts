import { type Observable } from '@komore/reactive';
import { type EmailTemplate } from './email-template';

/**
 * Email layer
 */
export interface EmailLayer {
  /**
   * Creates an email template
   * @param emailTemplate Email template
   * @returns Created email template
   */
  createEmailTemplate(emailTemplate: Omit<EmailTemplate, 'id'>): Observable<EmailTemplate>;

  /**
   * Deletes an email template
   * @param id Email identifier
   */
  deleteEmailTemplate(id: string): Observable<void>;
}
