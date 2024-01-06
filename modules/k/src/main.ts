import { runCliApplication } from '@komore/cli/application';
import { type CliRouter } from '@komore/cli/router';
import { type CommandFromType } from '@komore/command';
import { createNodeHost } from '@komore/node';
import { firstValueFrom } from '@komore/reactive';

import { createKCommandHandler } from './command/create-k-command-handler';
import { createKRouter } from './create-k-router';
import { type kCommand } from './k.command';

/*const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/

async function main() {
  const host = createNodeHost();
  /*  const logger = createLogger({
    appenders: [
      createNodeConsoleLogAppender({
        encoder: createCliApplicationLogEncoder(),
      }),
    ],
  });*/

  // TODO: avoid cast
  const router = createKRouter() as CliRouter<CommandFromType<typeof kCommand>>;
  const k = createCliApplication({
    commandHandler: events => createKCommandHandler(events),
    host,
    parametersToCommand: router,
  });

  const result$ = k(process.argv);
  await firstValueFrom(result$);
}

runCliApplication({
  commandHandler
})
runCli main();
