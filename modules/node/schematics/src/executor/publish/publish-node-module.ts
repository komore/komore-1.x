import { empty } from '@komore/reactive';
import { type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { type PublishNodeModuleOptions } from './publish-node-module-options';

/**
 * Publishes a Node module
 *
 * @param options Publish Node module options
 */
export function publishNodeModule(options: PublishNodeModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const {} = options;
  console.log('gotta publish');
  return empty;
}
