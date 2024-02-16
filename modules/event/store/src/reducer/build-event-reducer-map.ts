import { type EventReducer } from './event-reducer';
import { type OnEvent } from './on-event';
import { type OnEventType } from './on-event-type';

/**
 * Builds an event reducer map
 *
 * @param ons On handlers
 * @returns Reducer map
 * @template StateType State type
 * @template OnEvents Event reducer on types
 * @private
 */
export function buildEventReducerMap<StateType, OnEvents extends ReadonlyArray<OnEvent<StateType, any>>>(
  ons: readonly [...OnEvents]
): Map<string, ReadonlyArray<EventReducer<StateType, OnEventType<OnEvents[number]>>>> {
  const map = new Map<string, Array<EventReducer<StateType, OnEventType<OnEvents[number]>>>>();

  for (const on of ons) {
    const reducers = map.get(on.name) ?? [];
    // TODO: proper typing to avoid the cast
    const reducer = on.eventReducer as unknown as EventReducer<StateType, OnEventType<OnEvents[number]>>;

    if (reducers.length === 0) {
      map.set(on.name, reducers);
    }

    reducers.push(reducer);
  }

  return map;
}
