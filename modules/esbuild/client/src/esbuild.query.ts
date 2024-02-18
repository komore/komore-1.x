import { createQueryType, queryProperties } from '@komore/query';

import { esbuildDomain } from './esbuild.domain';

/**
 * esbuild query
 */
export const esbuildQuery = createQueryType(esbuildDomain, {
  /**
   * Returns the esbuild version
   */
  version: queryProperties(),
});
