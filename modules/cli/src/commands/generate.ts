/**
 * Generate command
 */
/*export class Generate extends Command {
  static readonly description = 'Runs a generator that creates and/or modifies files';
  static readonly aliases = ['g'];

  static readonly args: Input<GenerateInput> = [
    {
      name: 'resourceType',
      description: 'Resource type',
      required: true,
      parse: value => value as ResourceType,
      options: [...resourceTypes]
    },
    {
      name: 'resourceName',
      description: 'Resource name',
      required: true
    }
  ];
  static readonly flags = {
    
  };

  async run() {
    const { args, flags } = this.parse(Command);
    console.log('I guess run', args, flags);
  }
}*/

import { generateCommand } from '@komore/cli/generate';
import { createCommand } from '@komore/runtime/cli';

export default createCommand('generate', generateCommand, {
  args: {
  },
  flags: {
  }
});
