import { buildEventReducerMap } from './build-event-reducer-map';
import { type EventReducer } from './event-reducer';
import { type OnEvent } from './on-event';
import { type OnEventType } from './on-event-type';

/**
 * Creates an event reducer
 *
 * @param initialState Initial state
 * @param ons Event handlers
 * @returns Event reducer
 * @template StateType State type
 * @template OnEvents Event reducer on types
 */
export function createEventReducer<StateType, OnEvents extends ReadonlyArray<OnEvent<StateType, any>>>(
  initialState: StateType,
  ...ons: readonly [...OnEvents]
): EventReducer<StateType, OnEventType<OnEvents[number]>> {
  const map = buildEventReducerMap<StateType, OnEvents>(ons);

  return (state = initialState, event, metadata) => {
    const reducers = map.get(event.type);
    return reducers !== undefined ? reducers.reduce((s, reducer) => reducer(s, event, metadata), state) : state;
  };
}
