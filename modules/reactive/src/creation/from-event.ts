import { fromEvent as rxjsFromEvent } from 'rxjs';
import type { Observable } from '../observable';

interface TypedEventTarget<EventMapType extends Record<string, Event>> {
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
}

interface UntypedEventTarget {
  addEventListener(type: string, listener: (event: Event) => void, options?: boolean | AddEventListenerOptions): void;
  removeEventListener(type: string, listener: (event: Event) => void, options?: boolean | EventListenerOptions): void;
}

export function fromEvent<EventMapType extends Record<string, Event>, EventName extends keyof EventMapType>(
  eventTarget: TypedEventTarget<EventMapType>,
  eventName: EventName
): Observable<EventMapType[EventName]>;

export function fromEvent<EventType extends Event = Event>(
  eventTarget: UntypedEventTarget,
  eventName: string
): Observable<EventType>;

// export function fromEvent<EventType>(eventEmitter: NodeJS.EventEmitter, eventName: string): Observable<EventType>;

export function fromEvent(
  eventTargetOrEmitter: UntypedEventTarget,// | NodeJS.EventEmitter,
  eventName: string
): Observable<Event> {
  return rxjsFromEvent(eventTargetOrEmitter, eventName);
}
