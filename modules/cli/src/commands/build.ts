/**
 * Build command
 */
/*export class Build extends Command {
  static readonly description = 'Builds a module';
  static readonly aliases = ['b'];
  static readonly args = [
    {
      name: 'moduleName',
      description: 'Module name',
      required: true
    }
  ];
  static readonly flags = {
    'root-only': flags.boolean({
      default: false,
      description: 'When set to true, only build the root module and skip secondary entry points'
    })
  };

  async run() {
    const { args, flags } = this.parse(Build);
    console.log('Build', args, flags);
  }
}*/

import { buildCommand } from '@komore/cli/build';
import { createCommand } from '@komore/runtime/cli';

export default createCommand('build', buildCommand, {
  args: {
  },
  flags: {
  }
});
