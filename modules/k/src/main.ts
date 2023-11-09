import { createCliApplication, createCliApplicationLogEncoder } from '@komore/cli';
import { createLogger } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/logging/node';
import { createNodeHost } from '@komore/node';
import { firstValueFrom } from '@komore/reactive';

import { createKCommandHandler } from './command/create-k-command-handler';
import { createKRouter } from './create-k-router';

/*const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/

async function main() {
  const host = createNodeHost();
  const logger = createLogger({
    appenders: [
      createNodeConsoleLogAppender({
        encoder: createCliApplicationLogEncoder(),
      }),
    ],
  });

  const k = createCliApplication({
    // TODO: pass logger
    commandHandler: events => createKCommandHandler(events),
    logger,
    host,
    parametersToCommand: createKRouter({ logger }),
  });

  const result$ = k(process.argv);
  await firstValueFrom(result$);
}

main();
