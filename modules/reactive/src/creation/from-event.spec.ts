import { expectTypeOf } from 'expect-type';
import { mock } from 'jest-mock-extended';

import { feature } from '@komore/testing';

import { fromEvent } from './from-event';

feature('From event', {
  async 'works with a DOM event target'() {
    given: 'an event target with addEventListener and removeEventListener methods';
    const eventTarget = mock<EventTarget>();

    when: 'creating an observable from an event';
    const observable = fromEvent(eventTarget, 'test');

    expect: 'the observable to be typed with generic events';
    expectTypeOf(observable).toEqualTypeOf<Observable<Event>>();
  },
  'works with a DOM event target that has an event map'() {
    given: 'a DOM event target with addEventListener and removeEventListener methods that use an event map';
    const eventTarget = mock<TestEventTargetWithTypedEvents>() as TestEventTargetWithTypedEvents;

    when: 'creating an observable from an event featured in the event map';
    const observable = fromEvent(eventTarget, 'testNumber');

    expect: 'the observable to be typed based on the emitted event type taken from the event map';
    expectTypeOf(observable).toEqualTypeOf<Observable<MouseEvent>>();
  },
  'works with a Node event emitter'() {
    given: 'a Node event emitter with addListener and removeListener methods';
    const eventEmitter = mock<NodeJS.EventEmitter>();
    when: 'creating an observable from an event';
    const $ = fromEvent(eventEmitter, 'test');
    expect: 'the observable to be typed based on the emitted event type';
    expectTypeOf($).toEqualTypeOf<Observable<unknown>>();
  },

  'works with a Node event emitter that has an event map'() {
    given: 'a Node event emitter with addListener and removeListener methods that use an event map';
    const eventEmitter = mock<NodeJS.Process>();

    when: 'creating an observable from an event';
    const $ = fromEvent(eventEmitter, 'exit');

    expect: 'the observable to be typed based on the emitted event type taken from the event map';
    expectTypeOf($).toEqualTypeOf<Observable<unknown>>();
  },
});

interface TestEventTargetEvents {
  readonly testNumber: number;
  readonly testString: string;
}

interface TestEventTargetWithTypedEvents {
  addEventListener<K extends keyof TestEventTargetEvents>(
    type: K,
    listener: (event: TestEventTargetEvents[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TestEventTargetEvents>(
    type: K,
    listener: (event: TestEventTargetEvents[K]) => unknown,
    options?: boolean | Readonly<EventListenerOptions>
  ): void;
}

// TODO
