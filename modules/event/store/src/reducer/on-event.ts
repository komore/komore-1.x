import { type TypeCreator } from '@komore/typescript';
import { type EventCreator, type EventFromCreator } from '@komore/event';

import { type EventStoreMetadata } from '../metadata/event-store-metadata';

/**
 * Specialized event type aware reducer
 *
 * @param state State
 * @param event Event
 * @param metadata Metadata
 * @returns Reduced state
 * @template StateType State type
 * @template EventCreatorType Event creator type
 */
export type OnReducer<StateType, EventCreatorType extends EventCreator<string, TypeCreator<any, any>>> = (
  state: StateType,
  event: EventFromCreator<EventCreatorType>['properties'],
  metadata: EventStoreMetadata
) => StateType;

/**
 * Type returned by the `onEvent` function
 *
 * @template StateType State type
 * @template EventCreatorType Event creator type
 * @private
 */
export interface OnEvent<StateType, EventCreatorType extends EventCreator<string, TypeCreator<any, any>>> {
  readonly eventReducer: OnReducer<StateType, EventCreatorType>;
  readonly name: EventFromCreator<EventCreatorType>['name'];
}

/**
 * Associates events with a state change function
 *
 * The state change function must always be provided as the last parameter.
 *
 * @param eventCreator Event creator
 * @param eventReducer Event reducer
 * @returns Event reducer bound to the event type created by the event creator
 * @template StateType State type
 * @template EventCreatorType Event creator type
 */
export function onEvent<StateType, EventCreatorType extends EventCreator<string, TypeCreator<any, any>>>(
  eventCreator: EventCreatorType,
  eventReducer: OnReducer<StateType, EventCreatorType>
): OnEvent<StateType, EventCreatorType> {
  return {
    eventReducer,
    name: eventCreator.name,
  };
}
