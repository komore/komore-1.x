import { createCommand } from './create-command';
import { schema } from './command-schema';

/**
 * Create command specification
 */
describe('Create command', () => {
  const commandType = 'test-command-type';

  it('can create a command creator', () => {
    // when: creating a command creator
    const commandCreator = createCommand(commandType);
    // then: an event creator is properly created
    expect(commandCreator).toBeInstanceOf(Function);
    expect(commandCreator.type).toBe(commandType);
  });

  it('can create a command with no properties', () => {
    // given: a command creator
    const commandCreator = createCommand(commandType);
    // when: creating a command
    const event = commandCreator();
    // then: an event is properly created with no properties
    expect(event.type).toBe(commandType);
  });

  it('can create a command with properties', () => {
    // given: an event creator
    const commandCreator = createCommand(commandType, schema<{ stringValue: string, numberValue: number }>());
    // when: creating a command
    const command = commandCreator({ stringValue: 'test', numberValue: 42 });
    // then: an event is properly created with its data
    expect(command.type).toBe(commandType);
    expect(command.stringValue).toBe('test');
    expect(command.numberValue).toBe(42);
  });
});
