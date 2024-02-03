import { callLayerFunction } from '@komore/layer';

import { activeEmailLayer } from './active-email-layer';

/**
 * Deletes an email template
 *
 * @param id Email template identifier
 */
export function deleteEmailTemplate(id: string): Observable<void> {
  return callLayerFunction(activeEmailLayer, 'deleteEmailTemplate', id);
}
