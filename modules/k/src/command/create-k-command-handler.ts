import { CommandHandler, matchCommand } from '@komore/command';
import { mapTo, toArray } from '@komore/reactive';

import { displayKomoreVersion } from './display-komore-version';
import { type KCommandType } from './k.command';

export function createKCommandHandler(): CommandHandler<KCommandType> {
  return command =>
    matchCommand(command, {
      displayVersion: () => displayKomoreVersion(),
      fetchAffectedBase: ({}) => fet,
    }).pipe(toArray(), mapTo(void 0));
}
