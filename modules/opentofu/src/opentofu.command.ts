import { commandProperties, createCommandType } from '@komore/command';

import { type OpenTofuApplyParameters } from './command/opentofu-apply-parameters';
import { type OpenTofuDestroyParameters } from './command/opentofu-destroy-parameters';
import { type OpenTofuInitParameters } from './command/opentofu-init-parameters';
import { type OpenTofuPlanParameters } from './command/opentofu-plan-parameters';
import { openTofuDomain } from './opentofu.domain';

/**
 * OpenTofu command
 */
export const openTofuCommand = createCommandType(openTofuDomain, {
  /**
   * Executes an execution plan
   *
   * @see {@link https://opentofu.org/docs/cli/commands/apply tofu apply}
   */
  apply: commandProperties<OpenTofuApplyParameters>(),
  /**
   * Destroys objects managed by a configuration
   *
   * @see {@link https://opentofu.org/docs/cli/commands/destroy tofu destroy}
   */
  destroy: commandProperties<OpenTofuDestroyParameters>(),
  /**
   * Initializes a working directory
   *
   * @see {@link https://opentofu.org/docs/cli/commands/init tofu init}
   */
  init: commandProperties<OpenTofuInitParameters>(),
  /**
   * Creates an execution plan
   *
   * @see {@link https://opentofu.org/docs/cli/commands/plan tofu plan}
   */
  plan: commandProperties<OpenTofuPlanParameters>(),
});
