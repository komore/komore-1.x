import { fromEvent as rxjsFromEvent } from 'rxjs';

export { rxjsFromEvent as fromEvent };

/**
 * Creates an observable that emits events of a specific type from a DOM event target
 * @param eventTarget Event target
 * @param eventTypeName Event type name
 * @template EventMapType Event map type
 * @template EventTypeName Event type name
 * @returns Observable that emits events of the specific type
 */
/*export function fromEvent<
  EventMapType extends ReadonlyRecord<string, unknown>,
  EventTypeName extends keyof EventMapType
>(
  eventTarget: EventTargetLikeWithEventMap<EventMapType>,
  eventTypeName: EventTypeName
): Observable<EventMapType[EventTypeName]>;*/

/**
 * Creates an observable that emits events of a specific type from a DOM event target
 * @param eventTarget Event target
 * @param eventTypeName Event type name
 * @template EventType Event type
 * @returns Observable that emits events of the specific type
 */
/*export function fromEvent<EventType>(
  eventTarget: EventTargetLike<EventType>,
  eventTypeName: string
): Observable<EventType>;*/

/**
 * Creates an observable that emits events of a specific type from a Node event emitter
 * @param eventEmitter Event emitter
 */
/*export function fromEvent<EventTypeName extends string>(
  eventEmitter: EventEmitterLikeWithEventMap<>,
  eventTypeName: EventTypeName
): Observable<EventEmitterLikeWithEventMapType<typeof eventEmitter, EventTypeName>>;
*/
/**
 * Creates an observable that emits events of a specific type from a Node event emitter
 * @param eventEmitter Event emitter
 * @param eventTypeName Event type name
 * @returns Observable that emits events of the specific type
 */
/*export function fromEvent(eventEmitter: EventEmitterLike, eventTypeName: string): Observable<unknown>;

export function fromEvent<T>(
  eventTargetOrEmitter: EventTargetLike<T> | EventEmitterLike<T>,
  eventTypeName: string
): Observable<T> {
  return rxjsFromEvent(eventTargetOrEmitter, eventTypeName);
}*/

/**
 * Signature that matches a DOM event target
 */
/*interface EventTargetLike<T> {
  addEventListener(type: string, listener: (event: T) => void, options?: boolean | AddEventListenerOptions): void;
  removeEventListener(type: string, listener: (event: T) => void, options?: boolean | EventListenerOptions): void;
}

interface AddEventListenerOptionsLike {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}
*/

/**
 * Signature that matches a DOM event target with a typed event map
 * @template EventMapType Event map type
 */
/*interface EventTargetLikeWithEventMap<EventMapType extends ReadonlyRecord<string, unknown>> {
  addEventListener<K extends keyof EventMapType>(
    type: K,
    listener: (event: EventMapType[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof EventMapType>(
    type: K,
    listener: (event: EventMapType[K]) => unknown,
    options?: boolean | EventListenerOptions
  ): void;
}*/

/**
 * Signature that matches a Node event emitter
 * @template ArgumentsType Arguments type
 */
/*interface EventEmitterLike<ArgumentsType> {
  addListener(event: string | symbol, listener: (...args: readonly ArgumentsType[]) => void): this;
  removeListener(event: string | symbol, listener: (...args: readonly ArgumentsType[]) => void): this;
}

type EventEmitterValueType<EventEmitter extends EventEmitterLike<unknown>> = EventEmitter extends EventEmitterLike<
  infer ArgumentsType
>
  ? ArgumentsType
  : never;
*/
/**
 * Signature that matches a Node event emitter with a typed event map
 */
/*interface EventEmitterLikeWithEventMap<EventTypeName extends string> {
  addListener(event: EventTypeName, listener: (...args: unknown[]) => void): this;
  removeListener(event: EventTypeName, listener: (...args: unknown[]) => void): this;
}
*/
