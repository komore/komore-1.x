import { createCliApplication, createCliApplicationLogEncoder } from '@komore/cli';
import { cliRoute, createCliRouter } from '@komore/cli/router';
import { createLogger } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/logging/node';
import { firstValueFrom, mergeMap } from '@komore/reactive';

/*import { fetchAffectedBaseCommand } from './commands/fetch-affected-base/fetch-affected-base.command';
import { generateCommand } from './commands/generate/generate-command';
import { infoCommand } from './commands/info/info-command';
import { listCommand } from './commands/list/list-command';
import { listExecutorsCommand } from './commands/list/list-executors-command';
import { listProjectsCommand } from './commands/list/list-projects-command';
import { reportCommand } from './commands/report/report-command';
import { runCommand } from './commands/run/run-command';*/
import { validateCommand } from './command/validate/validate-command';
import { versionCommand } from './command/version/version-command';
import { kCommand } from './command/k.command';

/*const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/

const router = createCliRouter({
  'fetch-affected-base --branch-name=:branchName --depth=:depth --include-tags=:inludeTags': {
    command: ({ branchName, depth, includeTags }) => kCommand.fetchAffectedBase,
    flags: {
      branchName: {
        defaultValue: 'main',
        description: 'Branch name',
        parse: String,
      },
      depth: {
        defaultValue: 1,
        description: 'Fetch depth',
        parse: Number,
      },
      includeTags: {
        defaultValue: false,
        description: 'Whether git tags should be included',
        parse: Boolean,
      },
    },
  },
  validate: {
    command: () => kCommand.validateWorkspace,
  },
  version: {
    command: () => kCommand.displayVersion,
  },
});
router;
const k = createCliApplication({
  events: parameters => router(parameters).pipe(mergeMap(command => createKCommandHandler(command))),
  logger: createLogger({
    appenders: [
      createNodeConsoleLogAppender({
        encoder: createCliApplicationLogEncoder(),
      }),
    ],
  }),
});

const result$ = k(process.argv);
await firstValueFrom(result$);
