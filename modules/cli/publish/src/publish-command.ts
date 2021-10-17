import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive';
import type { PublishArguments } from './publish-arguments';
import type { PublishFlags } from './publish-flags';

/**
 * Publish command
 * @param $ Arguments and flags
 */
export function publishCommand($: Observable<[args: PublishArguments, flags: PublishFlags]>) {
  return $.pipe(
    tapValue(value => console.log('publish', value))
  );
}
