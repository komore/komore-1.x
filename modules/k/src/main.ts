import { runCliApplication } from '@komore/cli/application';

import { createKCommandHandler } from './command/create-k-command-handler';
import { createKRouter } from './create-k-router';
import { firstValueFrom } from '@komore/reactive';

/*
TODO:
const root = Node.create();

root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(JUSTIFY_CENTER);
*/
async function main() {
  const run$ = runCliApplication({
    createCommandHandler: events => createKCommandHandler(events),
    parametersToCommands: createKRouter(),
  });
  console.log('seriously');
  try {
    await firstValueFrom(run$);
  } catch (e) {
    console.log('pdfowpgowepgw', e);
  }
  console.log('dafuq');
}

main();
