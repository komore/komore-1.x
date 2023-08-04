import * as chalk from 'chalk';

import { LogEventSeverities, type LogEncoder } from '@komore/logging';

/**
 * Creates a CLI application log encoder
 *
 * @returns CLI application log encoder
 */
export function createCliApplicationLogEncoder(): LogEncoder {
  return ({ logEvent, message }) => {
    const { severity } = logEvent;
    switch (severity) {
      case LogEventSeverities.NOTICE:
        return blackOnYellow(' NOTICE ') + ' ' + chalk.yellowBright(message);
      case LogEventSeverities.WARNING:
        return blackOnYellow(' WARNING ') + ' ' + chalk.yellowBright(message);
      case LogEventSeverities.ERROR:
        return blackOnRed(' ERROR ') + ' ' + chalk.redBright(message);
      case LogEventSeverities.ALERT:
        return blackOnRed(' ALERT ') + ' ' + chalk.redBright(message);
      case LogEventSeverities.CRITICAL:
        return blackOnDarkRed(' CRITICAL ') + ' ' + chalk.red(message);
      case LogEventSeverities.EMERGENCY:
        return blackOnDarkRed(' EMERGENCY ') + ' ' + chalk.red(message);
      default:
        return blackOnRed(` ${severity} `) + ' ' + chalk.redBright(message);
    }
  };
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
