import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive';
import type { GenerateArguments } from './generate-arguments';
import type { GenerateFlags } from './generate-flags';

/**
 * Generate command
 * @param $ Arguments and flags
 */
export function generateCommand($: Observable<[args: GenerateArguments, flags: GenerateFlags]>) {
  return $.pipe(
    tapValue(value => console.log('generate', value))
  );
}
