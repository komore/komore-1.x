import { createEvent } from './create-event';
import { schema } from './event-schema';

/**
 * Create event specification
 */
describe('Create event', () => {
  it('can create an event creator', () => {
    // given: an event type
    const eventType = 'test-event-type';
    // when: creating an event creator
    const eventCreator = createEvent(eventType); // $ExceptType EventCreator<'test-event-type', void>
    // then: an event creator is properly created
    expect(eventCreator).toBeInstanceOf(Function);
    expect(eventCreator.type).toBe(eventType);
  });

  it('can create an event with no properties', () => {
    // given: an event creator
    const eventCreator = createEvent('test-event-type');
    // when: creating an event
    const event = eventCreator();
    // then: an event is properly created with no properties
    expect(event.type).toBe('test-event-type');
  });

  it('can create an event with properties', () => {
    // given: an event creator
    const eventCreator = createEvent('test-event-type', schema<{ stringValue: string, numberValue: number }>());
    // when: creating an event
    const event = eventCreator({ stringValue: 'test', numberValue: 42 });
    // then: an event is properly created with its data
    expect(event.type).toBe('test-event-type');
    expect(event.stringValue).toBe('test');
    expect(event.numberValue).toBe(42);
  });
});
