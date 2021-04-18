import { serveCommand } from '@komore/cli/serve';
import { createCommand } from '@komore/local/cli';

/**
 * Serve command
 */
 /*export class Serve extends Command {
  static readonly description = 'Builds and serves a resource, rebuilding when the resource changes';
  static readonly aliases = ['s'];
  static readonly args = [
    {
      name: 'type',
      description: 'Resource type',
      required: true,
      options: [`application`, 'component', 'function', 'stack']
    },
    {
      name: 'name',
      description: 'Resource name',
      required: true
    }
  ];

  async run() {
    const { args, flags } = this.parse(Serve);
    console.log('args', args);
    console.log('flags', flags);
    this.log('serve so this is better');
  }
}*/

export default createCommand('serve', serveCommand, {
  args: {
  },
  flags: {
  }
});
