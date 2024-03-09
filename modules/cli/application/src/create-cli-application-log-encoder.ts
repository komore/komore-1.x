import { stringToStyledText } from '@komore/cli';
import { logEventSeverities as severities, type LogEncoder } from '@komore/logging';

/**
 * Creates a CLI application log encoder
 *
 * @returns CLI application log encoder
 */
export function createCliApplicationLogEncoder(): LogEncoder {
  const color = 'black';
  const style = stringToStyledText;
  const blackOn = {
    brightRed: style({ color, background: ['red', 'bright'] }),
    gray: style({ color, background: 'gray' }),
    red: style({ color, background: 'red' }),
    yellow: style({ color, background: 'yellow' }),
  };
  const to = {
    brightRed: style({ color: ['red', 'bright'] }),
    brightYellow: style({ color: ['yellow', 'bright'] }),
    gray: style({ color: 'gray' }),
    red: style({ color: 'red' }),
    white: style({ color: 'white' }),
  };

  return ({ event, message }) => {
    const { severity } = event;
    switch (severity) {
      case severities.trace:
        return blackOn.gray(' TRACE ') + ' ' + to.gray(message);
      case severities.debug:
        return blackOn.gray(' DEBUG ') + ' ' + to.white(message);
      case severities.notice:
        return blackOn.yellow(' NOTICE ') + ' ' + to.brightYellow(message);
      case severities.warning:
        return blackOn.yellow(' WARNING ') + ' ' + to.brightYellow(message);
      case severities.error:
        return blackOn.brightRed(' !ERROR! ') + ' ' + to.brightRed(message);
      case severities.alert:
        return blackOn.brightRed(' ALERT ') + ' ' + to.brightRed(message);
      case severities.critical:
        return blackOn.red(' CRITICAL ') + ' ' + to.red(message);
      case severities.emergency:
        return blackOn.red(' EMERGENCY ') + ' ' + to.red(message);
      default:
        return blackOn.brightRed(` !!${severity}!! `) + ' ' + to.brightRed(message);
    }
  };
}
