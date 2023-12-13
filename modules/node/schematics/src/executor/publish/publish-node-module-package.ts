/**
 * Publish command
 */
/*export class Publish extends Command {
  static readonly id = 'publish';
  static readonly title = 'Publish';
  static readonly description = 'Publishes a module';
  static readonly aliases = ['p'];
  static readonly args = [
    {
      name: 'moduleName',
      description: 'Module name',
      required: true
    }
  ];
  static readonly flags = {
    dryDrun: flags.boolean({
      default: false,
      description: 'When set to true, do not perform the final publishing step'
    })
  };

  async run() {
    const { args, flags } = this.parse(Publish);
    console.log('Publish', args, flags);
  }
}*/
export {};
