import { mapTo } from '@komore/reactive';
import { createCliArgument as arg } from './argument/create-cli-argument';
import { CliCommandOptions } from './cli-command-options';
import { createCliCommand } from './create-cli-command';
import { createCliFlag as flag } from './flag/create-cli-flag';

describe('Create CLI command', () => {
  it('can create a CLI command', () => {
    given: 'a command name';
    const commandName = 'testCommand';
    and: 'a list of aliases';
    const aliases = ['tc'];
    and: 'a description';
    const description = 'Test description';

    when: 'creating a CLI command';
    const cliCommand = createCliCommand(commandName, $ => $.pipe(mapTo(0)), {
      aliases,
      args: [
        arg('testArg1', {
          defaultValue: 'test-default-arg1',
          description: 'Test arg 1 description',
          required: true,
          type: 'string',
        }),
        arg('testArg2', {
          defaultValue: 42,
          description: 'Test arg 2 description',
          type: 'number',
        }),
      ],
      description,
      flags: {
        'test-flag-1': flag({
          defaultValue: 'test-default-flag1',
          description: 'Test flag 1 description',
          type: 'string',
        }),
        'test-flag-2': flag({
          defaultValue: true,
          description: 'Test flag 2 description',
          type: 'boolean',
        }),
      },
    });

    then: 'the command to be callable';
    expect(cliCommand).toBeInstanceOf(Function);
    and: 'the name to be available';
    expect(cliCommand.commandName).toBe(commandName);
    and: 'the description to be available';
    expect(cliCommand.description).toBe(description);
    and: 'the list of aliases to be available';
    expect(cliCommand.aliases).toStrictEqual(aliases);
  });
});
