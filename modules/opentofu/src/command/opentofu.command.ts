import { CommandFromType, commandProperties, createCommandType } from '@komore/command';

import { openTofuDomain } from '../opentofu.domain';
import { type OpenTofuApplyOptions } from './opentofu-apply-options';
import { type OpenTofuDestroyOptions } from './opentofu-destroy-options';
import { type OpenTofuInitOptions } from './opentofu-init-options';
import { type OpenTofuPlanOptions } from './opentofu-plan-options';

/**
 * OpenTofu command
 */
export const openTofuCommand = createCommandType(openTofuDomain, {
  /**
   * Executes an execution plan
   *
   * @see {@link https://opentofu.org/docs/cli/commands/apply tofu apply}
   */
  apply: commandProperties<OpenTofuApplyOptions>(),
  /**
   * Destroys objects managed by a configuration
   *
   * @see {@link https://opentofu.org/docs/cli/commands/destroy tofu destroy}
   */
  destroy: commandProperties<OpenTofuDestroyOptions>(),
  /**
   * Initializes a working directory
   *
   * @see {@link https://opentofu.org/docs/cli/commands/init tofu init}
   */
  init: commandProperties<OpenTofuInitOptions>(),
  /**
   * Creates an execution plan
   *
   * @see {@link https://opentofu.org/docs/cli/commands/plan tofu plan}
   */
  plan: commandProperties<OpenTofuPlanOptions>(),
});

/**
 * OpenTofu command type
 */
export type OpenTofuCommandType = typeof openTofuCommand;

/**
 * OpenTofu command
 */
export type OpenTofuCommand = CommandFromType<OpenTofuCommandType>;
