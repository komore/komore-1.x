import { mock } from 'jest-mock-extended';
import { expectTypeOf } from 'expect-type';
import { fromEvent } from './from-event';
import type { Observable } from '../observable';

describe('From event', () => {
  it('works with a DOM event target', async () => {
    given: 'an event target with addEventListener and removeEventListener methods';
    const eventTarget = mock<EventTarget>();
    when: 'creating an observable from an event';
    const observable = fromEvent(eventTarget, 'test');
    expect: 'the observable to be typed with generic events';
    expectTypeOf(observable).toEqualTypeOf<Observable<Event>>();
  });

  it('works with a DOM event target that has an event map', () => {
    given: 'a DOM event target with addEventListener and removeEventListener methods that use an event map';
    const eventTarget = mock<Window>();
    when: 'creating an observable from an event featured in the event map';
    const observable = fromEvent(eventTarget, 'click');
    expect: 'the observable to be typed based on the emitted event type taken from the event map';
    expectTypeOf(observable).toEqualTypeOf<Observable<MouseEvent>>();
  });

  it('works with a Node event emitter', () => {
    given: 'a Node event emitter with addListener and removeListener methods';
    const eventEmitter = mock<NodeJS.EventEmitter>();
    when: 'creating an observable from an event';
    const observable = fromEvent(eventEmitter, 'test');
    expect: 'the observable to be typed based on the emitted event type';
    expectTypeOf(observable).toEqualTypeOf<Observable<any>>();
  });

  it('works with a Node event emitter that has an event map', () => {
    given: 'a Node event emitter with addListener and removeListener methods that use an event map';
    const eventEmitter = mock<NodeJS.Process>();
    when: 'creating an observable from an event';
    const observable = fromEvent(eventEmitter, 'exit');
    expect: 'the observable to be typed based on the emitted event type taken from the event map';
  });
});
