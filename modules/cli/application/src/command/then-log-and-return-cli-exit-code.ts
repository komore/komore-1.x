import { bgRedBright, red, redBright } from 'chalk';

import { cliError } from '@komore/cli';
import { isErrorOfType, isKomoreError } from '@komore/error';
import { objectToEntries, objectToKeys } from '@komore/functional';
import { of } from '@komore/reactive';

export function thenLogAndReturnCliExitCode(console: Console): (error: unknown) => Observable<number> {
  const isCliError = isErrorOfType(cliError);

  return error => {
    if (isKomoreError(error)) {
      if (isCliError(error)) {
        return of(error.context.exitCode);
      }

      const { code, context, domain } = error;

      console.log(bgRedBright(` ${domain.name} `) + ' ' + redBright(code));

      if (context) {
        if (typeof context === 'object') {
          const maxNameLength = objectToKeys(context).reduce((acc, name) => Math.max(acc, name.length), 0);
          for (const [contextName, contextValue] of objectToEntries(context)) {
            console.log('  ' + red(contextName.padStart(maxNameLength, ' ') + ': ' + contextValue));
          }
        } else {
          console.log(`unknown context format`, JSON.stringify(context, undefined, 2));
        }
      }
    } else {
      const message = error instanceof Error ? error.message : (error as string);
      console.log(bgRedBright(' UNHANDLED ERROR ') + ' ' + redBright(message));
    }

    if (error instanceof Error) {
      console.log(error.stack);
    }

    return of(1);
  };
}
