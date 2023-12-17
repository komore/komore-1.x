import { createQueryType, queryProperties } from '@komore/query';

import { esLintDomain } from './eslint.domain';

/**
 * ESLint query
 */
export const esLintQuery = createQueryType(esLintDomain, {
  /**
   * Returns the ESLint version
   */
  version: queryProperties<string>(),
});
