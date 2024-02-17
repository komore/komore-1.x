import { createQueryType, queryProperties } from '@komore/query';

import { openTofuDomain } from './opentofu.domain';

/**
 * OpenTofu query
 */
export const openTofuQuery = createQueryType(openTofuDomain, {
  /**
   * Returns the provider requirements of the configuration
   *
   * @see {@link https://opentofu.org/docs/cli/commands/providers tofu providers}
   */
  providers: queryProperties<unknown>(),
  /**
   * Returns details about a state file or a plan file
   *
   * @see {@link https://opentofu.org/docs/cli/commands/show tofu show}
   */
  show: queryProperties<unknown, unknown>(),
  /**
   * Returns the OpenTofu version
   */
  version: queryProperties<string>(),
});
