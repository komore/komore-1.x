import { Command, flags } from '@oclif/command';

/**
 * Create command
 */
export default class Create extends Command {
  static readonly description = 'Create a komore-based platform';
  static readonly flags = {
    help: flags.help({
      char: 'h',
      description: 'Print the CLI flags'
    }),
    scope: flags.string({
      char: 's',
      description: 'Scope for the modules'
    }),
    version: flags.version({
      char: 'v',
      description: 'Print the version'
    })
  };

  static readonly args = [
    { name: 'name' }
  ];

  async run(): Promise<void> {
    const { args, flags } = this.parse(Create);
    console.log('args', args);
    console.log('flags', flags);
    //const name = flags.name;
    //const scope = flags.scope ?? `@${flags.name}`;
    //console.log
  }
}
