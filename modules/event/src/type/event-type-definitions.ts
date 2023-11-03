import { type GenericDomain } from '@komore/domain';

import { type EventType } from './event-type';
import { type GenericEventType } from './generic-event-type';

/**
 * Event type definitions, given a event type
 *
 * @template T Event type
 * @private
 */
export type EventTypeDefinitions<T extends GenericEventType> = T extends EventType<GenericDomain, infer Definitions>
  ? Definitions
  : never;
