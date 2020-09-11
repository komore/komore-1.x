import { Event } from './event';
import { EventMetadata } from './event-metadata';

/**
 * Event reducer
 * @param state State
 * @param event Event
 * @param metadata Event metadata
 * @returns Reduced state
 * @template S State type
 * @template E Event type
 */
export type EventReducer<S, E extends Event<any, any>[]> = (
  state: S | undefined,
  event: E[number],
  metadata: EventMetadata
) => S;
