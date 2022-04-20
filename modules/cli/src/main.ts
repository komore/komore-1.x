import { createCliApplication, executeCliApplication } from '@komore/application-cli';
//import { Node, JUSTIFY_CENTER } from 'yoga-layout';
import { fetchAffectedBaseCommand } from './commands/fetch-affected-base/fetch-affected-base-command';
import { generateCommand } from './commands/generate/generate-command';
import { infoCommand } from './commands/info/info-command';
import { listCommand } from './commands/list/list-command';
import { listExecutorsCommand } from './commands/list/list-executors-command';
import { listProjectsCommand } from './commands/list/list-projects-command';
import { reportCommand } from './commands/report/report-command';
import { runCommand } from './commands/run/run-command';
import { versionCommand } from './commands/version/version-command';

/*const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/

const cli = createCliApplication({
  commands: [
    fetchAffectedBaseCommand,
    generateCommand,
    infoCommand,
    listCommand,
    listExecutorsCommand,
    listProjectsCommand,
    reportCommand,
    runCommand,
    versionCommand,
  ],
});

executeCliApplication(cli, process.argv);
