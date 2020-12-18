import { Event } from './event';
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
export type EventReducer<StateType, EventTypes extends Event<any, any>[]> = (
  state: StateType | undefined,
  event: EventTypes[number],
  metadata: EventMetadata
) => StateType;
