import type { Event, EventReducer } from '@komore/event';
import type { ValueObserver } from '@komore/reactive';
import { Subject } from '@komore/reactive';
import type { StoreOptions } from './store-options';

/**
 * Creates a store
 * @param eventReducer Event reducer or URL for the event reducer when running as a worker
 * @param options 
 * @returns Observer used to notify the store of events, and TODO
 * @template
 */
export function createStore<
  StateType,
  EventTypes extends Event<string, Record<string, unknown> | undefined>[]
>(eventReducer: EventReducer<StateType, EventTypes>, options?: StoreOptions): [observer: ValueObserver<EventTypes[number]>, query: unknown] {
  const localState = new Subject<StateType>();
  function next(value: EventTypes[number]): void {

  }

  return [{ next }, undefined];
}
