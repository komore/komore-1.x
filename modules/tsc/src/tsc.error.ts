import { createErrorType, errorProperties } from '@komore/error';

import { type TypeScriptTarget } from './target/typescript-target';
import { tscDomain } from './tsc.domain';

/**
 * tsc error
 */
export const tscError = createErrorType(tscDomain, {
  /**
   * Unknown TypeScript target
   */
  unknownTypeScriptTarget: errorProperties<{
    /**
     * Target
     */
    readonly target: TypeScriptTarget;
  }>(),
});
