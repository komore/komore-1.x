import { type GenericEvent } from '@komore/event';

import { type EventMetadata } from '../metadata/event-metadata';

/**
 * Event reducer
 * @param state State
 * @param event Event
 * @param metadata Event metadata
 * @returns Reduced state
 * @template StateType State type
 * @template EventTypes Event types
 */
export interface EventReducer<StateType, EventTypes extends ReadonlyArray<GenericEvent>> {
  (state: StateType | undefined, event: EventTypes[number], metadata: EventMetadata): StateType;
}
