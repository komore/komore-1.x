import { Command } from '@oclif/command';
import { createCliArgument as arg } from './argument/create-cli-argument';
import { createCliFlag as flag } from './flag/create-cli-flag';
import { createCliCommand } from './create-cli-command';

describe('Create CLI command', () => {
  it('can create an OCLIF compatible class', () => {
    given: 'a CLI command name';
    const cliCommandName = 'testCommand';
    and: 'a list of aliases';
    const aliases = ['tc'];
    and: 'a description';
    const description = 'Test description';

    when: 'creating a CLI command';
    const cliCommandClass = createCliCommand(cliCommandName, $ => $.pipe(), {
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
        },)
      },
    });

    expect: 'the class to inherit from the OCLIF command class';
    expect(cliCommandClass.prototype).toBeInstanceOf(Command);
    and: 'the class to have the aliases as a static property';
    expect(cliCommandClass.aliases).toStrictEqual(aliases);
    and: 'the class to have the description as a static property';
    expect(cliCommandClass.description).toBe(description);
    and: 'the class to have properly built argument definitions';
    expect(cliCommandClass.args).toBeDefined();
    const args = cliCommandClass.args as NonNullable<typeof cliCommandClass.args>;
    expect(args.length).toBe(2);
    const arg0 = args[0];
    expect(arg0).toBeDefined();
    expect(arg0.default).toBe('test-default-arg1');
    expect(arg0.description).toBe('Test arg1 description');
    expect(arg0.name).toBe('testArg1');
    expect(arg0.required).toBe(true);
    const arg1 = args[1];
    expect(arg1).toBeDefined();
    expect(arg1.default).toBe(42);
    expect(arg1.description).toBe('Test arg2 description');
    expect(arg1.name).toBe('testArg2');
    expect(arg1.required).toBe(false);
    and: 'the class to have properly  built flag definitions';
    expect(cliCommandClass.flags).toBeDefined();
    const flags = cliCommandClass.flags as NonNullable<typeof cliCommandClass.flags>;
    const flag1 = flags['test-flag-1'];
    expect(flag1).toBeDefined();
    const flag2 = flags['test-flag-2'];
    expect(flag2).toBeDefined();
  });
});
