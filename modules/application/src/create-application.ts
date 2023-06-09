import { of } from '@komore/reactive';
import { type Host } from '@komore/runtime';

import { type Application } from './application';
import { type ApplicationOptions } from './application-options';

/**
 * Creates an application
 *
 * @param options Application options
 * @returns Application
 */
export function createApplication<HostType extends Host>(
  _options: ApplicationOptions<HostType>
): Application<unknown, unknown> {
  return () => of(void 0);
}
