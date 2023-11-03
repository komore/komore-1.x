import { type ReadonlyRecord } from '@komore/typescript';
import { type EventType } from './event';
import { type EventCreator, type EventCreatorEventType } from './event-creator';
import { type EventDomain } from './event-domain';
import { type EventMetadata } from './event-metadata';

/**
 * Specialized event type aware reducer
 * @param state State
 * @param event Event
 * @param metadata Metadata
 * @returns Reduced state
 * @template S State type
 * @template E Event creator type
 */
export type OnReducer<S, EC extends EventCreator<any>> = (
  state: S,
  event: EventCreatorEventType<EC>,
  metadata: EventMetadata
) => S;

/**
 * Type returned by the `on` function
 * @template S State type
 * @template E Event creator type
 */
export type On<S, EC extends EventCreator<any>> = Readonly<{
  eventReducer: OnReducer<S, EC>;
  type: EventType<EventCreatorEventType<EC>>;
}>;

/**
 * Event reducer on state type
 * @template O Event reducer on type
 */
export type OnStateType<O> = O extends On<infer S, any> ? S : never;

/**
 * Event reducer on event type
 * @template O Event reducer on type
 */
export type OnEventType<O> = O extends On<any, infer E> ? E : never;

/**
 * Associates events with a state change function
 *
 * The state change function must always be provided as the last parameter.
 *
 * @param eventCreator Event creator
 * @param eventReducer Event reducer
 * @returns Event reducer bound to the event type created by the event creator
 * @template S State type
 * @template EC Event creator type
 */
export function onEvent<
  S,
  EC extends EventCreator<EventDomain<string>, string, ReadonlyRecord<string, unknown> | undefined>
>(eventCreator: EC, eventReducer: OnReducer<S, EC>): On<S, EC> {
  const x = {
    eventReducer,
    type: eventCreator.type,
  };
  return x;
}
