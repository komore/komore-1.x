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

// TODO: move to @komore/schematics

import { buildCommand } from '@komore/cli/build';
import { createCommand } from '@komore/runtime/cli';



/*
import { createCliCommand, createCliArgument as arg, createCliFlag as flag } from '@komore/application-cli';
import { ignoreErrors, ignoreValues, map, mergeMap, tapError, tapNext } from '@komore/reactive';
import { loadWorkspaceConfiguration, projectToTargetsUsingExecutor } from '@komore/schematics';

// TODO: move implementation to an executor via @komore/documentation:api

export const buildCommandDefinition = createCliCommand(
  'build',
  buildCommand,
  {
    aliases: ['b'],
    description: 'Generates the list of functions exported by komore modules',
    args: [
      arg('workspace', {
        description: 'Workspace file path',
        defaultValue: './workspace.json',
        required: false,
        type: 'string',
      }),
    ],
    flags: {
      project: flag({
        description: 'Pattern used to match the projects that must be processed',
        type: 'string',
      }),
      watch: flag({
        defaultValue: false,
        description: 'When set to true, run the generate whenever the workspace file changes',
        type: 'boolean',
      }),
    },
  }
);
*/