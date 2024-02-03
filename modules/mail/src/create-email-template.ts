import { callLayerFunction } from '@komore/layer';

import { activeEmailLayer } from './active-email-layer';
import { type EmailTemplate } from './email-template';

/**
 * Creates an email template
 *
 * @param emailTemplate Email template
 * @returns Created email template
 */
export function createEmailTemplate(emailTemplate: Omit<EmailTemplate, 'id'>): Observable<EmailTemplate> {
  return callLayerFunction(activeEmailLayer, 'createEmailTemplate', emailTemplate);
}
