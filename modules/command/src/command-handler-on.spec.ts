import { createEvent } from '@komore/event';
import { map, mapTo } from '@komore/reactive/operators';
import { on } from './command-handler-on';
import { createCommand } from './create-command';

/**
 * Command handler on specification
 */
describe('Command handler on', () => {
  const commandType = 'test-command-type';
  const eventType = 'test-event-type';
  const commandCreator = createCommand(commandType);
  const eventCreator = createEvent(eventType);

  it('can handle commands that emit no events', () => {
    // when: creating a command handler on
    const o = on(commandCreator, $ => $.pipe(map(() => {})));
    // then: a proper object is created
    expect(o.commandHandler).toBeInstanceOf(Function);
    expect(o.type).toBe(commandType);
  });

  it('can handle commands that emit an event', () => {
    // when: creating a command handler on
    const o = on(commandCreator, $ => $.pipe(mapTo(eventCreator())));
    // then: a proper object is created
    expect(o.commandHandler).toBeInstanceOf(Function);
    expect(o.type).toBe(commandType);
  });
});
