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

import { deployCommand } from '@komore/cli/deploy';
import { createCommand } from '@komore/local/cli';

export default createCommand('deploy', deployCommand, {
  args: {
  },
  flags: {
  }
});
