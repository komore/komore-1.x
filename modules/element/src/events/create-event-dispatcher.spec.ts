import { mock, MockProxy } from 'jest-mock-extended';
import { createEventDispatcher } from './create-event-dispatcher';

describe('Create event dispatcher', () => {
  let mockEventTarget: MockProxy<EventTarget> & EventTarget;

  beforeEach(() => {
    mockEventTarget = mock<EventTarget>();
    mockEventTarget.dispatchEvent.mockReturnValueOnce(true);
  });

  it('creates a dispatchers that dispatches a custom event with details', () => {
    // given: an event dispatcher with a void detail type
    const eventDispatcher = createEventDispatcher<{ test: number }>(mockEventTarget, 'test-event');
    // when: calling the event dispatcher
    const eventDetail = { test: 42 };
    const result = eventDispatcher(eventDetail);
    // then: the event is dispatched and the cancellable state returned
    expect(mockEventTarget.dispatchEvent).toHaveBeenCalledTimes(1);
    const dispatchEventArg = mockEventTarget.dispatchEvent.mock.calls[0][0] as CustomEvent;
    expect(dispatchEventArg.type).toBe('test-event');
    expect(dispatchEventArg.detail).toBe(eventDetail);
    expect(result).toBe(true);
  });

  it('creates a dispatcher that dispatches a custom event with no details for void detail types', () => {
    // given: an event dispatcher with a void detail type
    const eventDispatcher = createEventDispatcher(mockEventTarget, 'test-event-void');
    // when: calling the event dispatcher
    const result = eventDispatcher();
    // then: the event is dispatched and the cancellable state returned
    expect(mockEventTarget.dispatchEvent).toHaveBeenCalledTimes(1);
    const dispatchEventArg = mockEventTarget.dispatchEvent.mock.calls[0][0] as CustomEvent;
    expect(dispatchEventArg.type).toBe('test-event-void');
    expect(dispatchEventArg.detail).toBeNull();
    expect(result).toBe(true);
  });
});
