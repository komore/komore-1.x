import { type Event } from '@komore/event';
import { type Observer, Subject } from '@komore/reactive';
import { createWorker } from '@komore/web/worker';
import { type ElementStoreOptions } from './element-store-options';

/**
 * Creates a store
 * @param eventReducer Event reducer or URL for the event reducer when running as a worker
 * @param options
 * @returns Observer used to notify the store of events, and TODO
 * @template
 */
export function createStore<StateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  eventReducer: URL,
  options?: ElementStoreOptions<StateType, EventTypes>
): readonly [observer: Observer<EventTypes[number]>, query: unknown] {
  const localState = new Subject<StateType>();
  const [observer, observable] = createWorker(eventReducer, { terminateOn: 'complete-and-error' });

  function next(value: EventTypes[number]): void {}

  function error(error: unknown): void {}

  return [{ next }, undefined];
}
