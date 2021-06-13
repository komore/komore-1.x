import { fromEvent } from 'rxjs';
//import type { Observable } from '../observable';

export { fromEvent };

/**
 * Creates an observable that emits events of a specific type from a DOM event target
 * @param eventTarget Event target
 * @param eventTypeName Event type name
 * @template EventType Event type
 * @template EventTypeName Event type name
 * @returns Observable that emits events of the specific type
 */
/*export function fromEvent<EventType, EventTypeName extends string = string>(
  eventTarget: EventTargetLikeWithEventMap<EventTypeName, EventType>,
  eventTypeName: EventTypeName
): Observable<EventType>;*/

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
/*export function fromEvent(
  eventEmitter: EventEmitterLike,
  eventTypeName: string
): Observable<unknown>;

export function fromEvent<T>(
  eventTargetOrEmitter: EventTargetLike<T> | EventEmitterLike,
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
}*/

/**
 * Signature that matches a DOM event target with a typed event map
 * @template EventMapType Event map type
 * @template Event
 */
/*interface EventTargetLikeWithEventMap<EventTypeName extends string, EventType = unknown> {
  addEventListener(
    type: EventTypeName,
    listener: (event: EventType) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: EventTypeName,
    listener: (event: EventType) => unknown,
    options?: boolean | EventListenerOptions
  ): void;
}*/

/**
 * Signature that matches a Node event emitter
 */
/*interface EventEmitterLike {
  addListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
  removeListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
}*/

/**
 * Signature that matches a Node event emitter with a typed event map
 */
/*interface EventEmitterLikeWithEventMap<EventTypeName extends string> {
  addListener(event: EventTypeName, listener: (...args: unknown[]) => void): this;
  removeListener(event: EventTypeName, listener: (...args: unknown[]) => void): this;
}*/
