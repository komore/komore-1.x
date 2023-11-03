import { testCommand } from '@komore/cli/test';
import { booleanFlag, createCommand } from '@komore/local/cli';

/**
 * Test command
 */
/*export class Test extends Command {
  static readonly description = 'Tests a resource';
  static readonly aliases = ['t'];
  static readonly args = [
    {
      name: 'resourceType',
      description: 'Resource type',
      required: true,
      options: [`application`, 'component', 'function', 'stack']
    },
    {
      name: 'resourceName',
      description: 'Resource name',
      required: true
    }
  ];

  async run() {
    console.log('I guess test');
  }
}
*/

export default createCommand('test', testCommand, {
  args: {
    moduleName: {
      description: 'Module name'
    }
  },
  flags: {
    verbose: booleanFlag({
      description: 'Displays individual test results (cf. https://jestjs.io/docs/en/cli#verbose)'
    })
  }
});
