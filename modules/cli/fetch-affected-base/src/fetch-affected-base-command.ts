import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive';
import type { FetchAffectedBaseArguments } from './fetch-affected-base-arguments';
import type { FetchAffectedBaseFlags } from './fetch-affected-base-flags';

/**
 * Generate command
 * @param $ Arguments and flags
 */
export function fetchAffectedBaseCommand($: Observable<[args: FetchAffectedBaseArguments, flags: FetchAffectedBaseFlags]>) {
  return $.pipe(
    tapValue(value => console.log('fetch-affected-base', value))
  )
}

// git fetch --no-tags --depth=1 origin main
