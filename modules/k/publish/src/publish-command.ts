import { type Observable, tapNext } from '@komore/reactive';
import { type PublishArguments } from './publish-arguments';
import { type PublishFlags } from './publish-flags';

/**
 * Publish command
 * @param $ Arguments and flags
 */
export function publishCommand($: Observable<[args: PublishArguments, flags: PublishFlags]>) {
  return $.pipe(
    tapNext(value => console.log('publish', value))
  );
}
