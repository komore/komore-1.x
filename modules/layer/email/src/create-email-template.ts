import type { Observable } from 'rxjs';
import type { EmailTemplate } from './email-template';

export function createTemplate(emailTemplate: Omit<EmailTemplate, 'id'>): Observable<EmailTemplate> {
  return withLayer
}
