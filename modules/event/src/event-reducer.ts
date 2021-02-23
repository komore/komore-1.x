import type { Event } from './event';
import { EventMetadata } from './event-metadata';

/**
 * Event reducer
 * @param state State
 * @param event Event
 * @param metadata Event metadata
 * @returns Reduced state
 * @template StateType State type
 * @template EventTypes Event types
 */
export interface EventReducer<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]> {
  (state: StateType | undefined, event: EventTypes[number], metadata: EventMetadata): StateType;
}
