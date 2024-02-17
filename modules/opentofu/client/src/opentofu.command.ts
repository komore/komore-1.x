import { commandProperties, createCommandType } from '@komore/command';
import { openTofuDomain } from '@komore/opentofu';

import { type OpenTofuApplyParameters } from './apply/opentofu-apply-parameters';
import { type OpenTofuDestroyParameters } from './destroy/opentofu-destroy-parameters';
import { type OpenTofuInitParameters } from './init/opentofu-init-parameters';
import { type OpenTofuPlanParameters } from './plan/opentofu-plan-parameters';

/**
 * OpenTofu command
 */
export const openTofuCommand = createCommandType(openTofuDomain, {
  /**
   * Applies an execution plan
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
  initialize: commandProperties<OpenTofuInitParameters>(),
  /**
   * Creates an execution plan
   *
   * @see {@link https://opentofu.org/docs/cli/commands/plan tofu plan}
   */
  plan: commandProperties<OpenTofuPlanParameters>(),
});
