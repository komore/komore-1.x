/**
 * Deploy command
 */
/*export class Deploy extends Command {
  static readonly description = 'Builds and deploys a resource';
  static readonly aliases = ['d'];
  static readonly args = [
    {
      name: 'stackName',
      description: 'Stack name',
      required: true
    },
    {
      name: 'resourceId',
      description: 'Resource identifier'
    }
  ];

  async run() {
    const { args, flags } = this.parse(Deploy);
    console.log('I guess deploy', args, flags);
  }
}*/




import { deployCommand } from '@komore/cli/deploy';
import { createCommand } from '@komore/runtime/cli';

export default createCommand('deploy', deployCommand, {
  args: {
  },
  flags: {
  }
});
