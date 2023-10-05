import { createCliCommand, createCliArgument as arg, createCliFlag as flag } from '@komore/cli';
import { createTypeScriptApiDescription } from '@komore/documentation';
import { objectToValues } from '@komore/functional';
import { ignoreErrors, ignoreValues, map, mergeMap, tapError, tapNext } from '@komore/reactive';
import { loadWorkspaceConfiguration, projectToTargetsUsingExecutor } from '@komore/schematics';

// TODO: move implementation to an executor via @komore/documentation:api

export const generateApiList = createCliCommand(
  'generate',
  $ =>
    $.pipe(
      mergeMap(({ flags: { project } }) =>
        loadWorkspaceConfiguration('./workspace.json').pipe(
          map(({ projects }) => {
            if (project === undefined) {
              return objectToValues(projects);
            }

            const projectConfiguration = projects[project];
            if (projectConfiguration === undefined) {
              throw new Error(`project ${project} not found`);
            }

            return [projectConfiguration];
          }),
          map(projects =>
            projects
              .map(projectToTargetsUsingExecutor('@nrwl/node:package'))
              .flat()
              .filter(hasNodePackageTargetConfiguration)
          )
        )
      ),
      map(projects => projects[0]),
      mergeMap(({ options: { main, packageJson, tsConfig } }) =>
        createTypeScriptApiDescription({
          paths: {
            entryPoint: main,
            packageJson,
            tsConfig,
          },
        })
      ),
      tapNext(({ name, exports }) => {
        console.log(name);
        console.log('  Functions');
        exports.functions.forEach(({ name: functionName, declarations }) => {
          declarations.forEach(({ description }) => {
            const newLineIndex = description.indexOf('\n');
            const firstLine = (newLineIndex !== -1 ? description.substring(0, newLineIndex) : description).trim();
            const shortDesc = firstLine.length > 70 ? firstLine.substring(0, 68) + '...' : firstLine;
            console.log(`    ${functionName}: ${shortDesc}`);
          });
        });
        console.log('  Types');
        console.log('    TODO');
      }),
      tapError(error =>
        error instanceof Error ? console.log(`Error: ${error.message}`) : console.log('Unknown error', error)
      ),
      ignoreErrors(),
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
