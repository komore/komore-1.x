import * as chalk from 'chalk';

import { defaultLogEventSeverities as severities, type LogEncoder } from '@komore/logging';

/**
 * Creates a CLI application log encoder
 *
 * @returns CLI application log encoder
 */
export function createCliApplicationLogEncoder(): LogEncoder {
  return ({ event, message }) => {
    const { severity } = event;
    switch (severity) {
      case severities.TRACE:
        return blackOnGray(' TRACE ') + ' ' + chalk.gray(message);
      case severities.DEBUG:
        return blackOnGray(' DEBUG ') + ' ' + chalk.white(message);
      case severities.NOTICE:
        return blackOnYellow(' NOTICE ') + ' ' + chalk.yellowBright(message);
      case severities.WARNING:
        return blackOnYellow(' WARNING ') + ' ' + chalk.yellowBright(message);
      case severities.ERROR:
        return blackOnRed(' !ERROR! ') + ' ' + chalk.redBright(message);
      case severities.ALERT:
        return blackOnRed(' ALERT ') + ' ' + chalk.redBright(message);
      case severities.CRITICAL:
        return blackOnDarkRed(' CRITICAL ') + ' ' + chalk.red(message);
      case severities.EMERGENCY:
        return blackOnDarkRed(' EMERGENCY ') + ' ' + chalk.red(message);
      default:
        return blackOnRed(` !!${severity}!! `) + ' ' + chalk.redBright(message);
    }
  };
}

function blackOnGray(message: string): string {
  return chalk.bgGray(chalk.black(message));
}

function blackOnYellow(message: string): string {
  return chalk.bgYellowBright(chalk.black(message));
}

function blackOnDarkRed(message: string): string {
  return chalk.bgRed(chalk.black(message));
}

function blackOnRed(message: string): string {
  return chalk.bgRedBright(chalk.black(message));
}
