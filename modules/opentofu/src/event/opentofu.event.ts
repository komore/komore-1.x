import { createEventType, eventProperties, type EventFromType } from '@komore/event';

import { type GenericOpenTofuLog } from '../log/generic-opentofu-log';
import { openTofuDomain } from '../opentofu.domain';

/**
 * OpenTofu event
 */
export const openTofuEvent = createEventType(openTofuDomain, {
  /**
   * A log message was printed
   */
  logPrinted: eventProperties<GenericOpenTofuLog>(),
});

/**
 * OpenTofu event type
 */
export type OpenTofuEventType = typeof openTofuEvent;

/**
 * OpenTofu event
 */
export type OpenTofuEvent = EventFromType<OpenTofuEventType>;
