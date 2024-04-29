import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { defaultCliApplicationLogger, runCliApplication } from '@komore/cli/application';
import { setDefaultLogger } from '@komore/logging';
import { firstValueFrom } from '@komore/reactive';

import { createKCommandHandler } from './command/create-k-command-handler';
import { createKRouter } from './create-k-router';

/*
TODO:
const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/
async function main() {
  setDefaultLogger(defaultCliApplicationLogger());

  const run$ = runCliApplication({
    createCommandHandler: events => createKCommandHandler(events),
    parametersToCommands: createKRouter(),
  });

  await firstValueFrom(run$);
}

main();
