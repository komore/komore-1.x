import { createCliCommand } from '@komore/application-cli';
import { map, mapTo, mergeMap, mergeMapTo, take, tapNext } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';

/**
 * version command
 */
export const versionCommand = createCliCommand(
  'version',
  $ => {
    return $.pipe(
      mergeMapTo(createWorkspaceContext(process.cwd())),
      mergeMap(({ package: { installed } }) => installed.pipe(take(1))),
      map(packages => packages.filter(({ name }) => name.startsWith('@komore/') || name.startsWith('@cdktf/'))),
      tapNext(packages => {
        console.log('komore v?.?.?', packages);
      }),
      mapTo(0)
    );
  },
  {
    aliases: ['v'],
    description: 'Displays version information',
  }
);
