import * as chalk from 'chalk';

import { logEventSeverities as severities, type LogEncoder } from '@komore/logging';

/**
 * Creates a CLI application log encoder
 *
 * @returns CLI application log encoder
 */
export function createCliApplicationLogEncoder(): LogEncoder {
  return ({ event, message }) => {
    const { severity } = event;
    switch (severity) {
      case severities.trace:
        return blackOnGray(' TRACE ') + ' ' + chalk.gray(message);
      case severities.debug:
        return blackOnGray(' DEBUG ') + ' ' + chalk.white(message);
      case severities.notice:
        return blackOnYellow(' NOTICE ') + ' ' + chalk.yellowBright(message);
      case severities.warning:
        return blackOnYellow(' WARNING ') + ' ' + chalk.yellowBright(message);
      case severities.error:
        return blackOnRed(' !ERROR! ') + ' ' + chalk.redBright(message);
      case severities.alert:
        return blackOnRed(' ALERT ') + ' ' + chalk.redBright(message);
      case severities.critical:
        return blackOnDarkRed(' CRITICAL ') + ' ' + chalk.red(message);
      case severities.emergency:
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
