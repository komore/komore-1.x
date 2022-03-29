import { createCliCommand, createCliArgument as arg, createCliFlag as flag } from '@komore/application-cli';
import { objectToValues } from '@komore/functional';
import { ignoreValues, map, mapTo, switchMap, tapNext } from '@komore/reactive';
import { loadWorkspaceConfiguration, projectToTargetsUsingExecutor } from '@komore/schematics';
import { TargetConfiguration } from '@nrwl/devkit';
import { createCompilerHost } from 'typescript';

// TODO: move implementation to an executor via @komore/documentation:api

export const generateApiList = createCliCommand(
  'generate',
  $ =>
    $.pipe(
      mapTo({ workspace: './workspace.json' }),
      map(({ workspace }) => workspace),
      switchMap(loadWorkspaceConfiguration),
      map(({ projects }) =>
        objectToValues(projects)
          .map(projectToTargetsUsingExecutor('@nrwl/node:package'))
          .flat()
          .filter(hasNodePackageTargetConfiguration)
      ),
      tapNext(hm => {
        createCompilerHost({

        });
        console.log('hm hm hm', hm, hm.length);
      }),
      ignoreValues()
    ),
  {
    aliases: ['g'],
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
      watch: flag({
        defaultValue: false,
        description: 'When set to true, run the generate whenever the workspace file changes',
        type: 'boolean',
      }),
    },
  }
);

function hasNodePackageTargetConfiguration(
  targetConfiguration: TargetConfiguration
): targetConfiguration is NodePackageTargetConfiguration {
  const { options } = targetConfiguration as Partial<NodePackageTargetConfiguration>;
  if (options === undefined) {
    return false;
  }

  const { main, packageJson, tsConfig } = options;

  return main !== undefined && packageJson !== undefined && tsConfig !== undefined;
}

/**
 * @nrwl/node:package target configuration
 */
interface NodePackageTargetConfiguration extends TargetConfiguration {
  readonly options: {
    readonly main: string;
    readonly packageJson: string;
    readonly tsConfig: string;
  };
}
