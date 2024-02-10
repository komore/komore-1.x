import { of } from '@komore/reactive';

import { type ChangeLogGenerator } from './change-log-generator';
import { type ChangeLogGeneratorOptions } from './change-log-generator-options';

/**
 * Creates a change log generator
 *
 * @param generatorOptions Change log generator options
 * @returns Change log generator
 */
export function createChangeLogGenerator(generatorOptions: ChangeLogGeneratorOptions): ChangeLogGenerator {
  return parameters => {
    console.log('ok', parameters);
    return of(void 0);
  };
}
