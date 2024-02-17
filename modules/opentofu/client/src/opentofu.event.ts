import { createEventType, eventProperties } from '@komore/event';

import { type GenericOpenTofuLog } from './log/generic-opentofu-log';
import { openTofuDomain } from './opentofu.domain';
import { OpenTofuInitResult } from './init/opentofu-init-result';
import { OpenTofuApplyResult } from './apply/opentofu-apply-result';

/**
 * OpenTofu event
 */
export const openTofuEvent = createEventType(openTofuDomain, {
  /**
   * An execution plan was applied
   *
   * @see {@link https://opentofu.org/docs/cli/commands/apply tofu apply}
   */
  applied: eventProperties<OpenTofuApplyResult>(),
  /**
   * A working directory was initialized
   *
   * @see {@link https://opentofu.org/docs/cli/commands/init tofu init}
   */
  initialized: eventProperties<OpenTofuInitResult>(),
  /**
   * A log message was printed
   */
  logPrinted: eventProperties<GenericOpenTofuLog>(),
});
