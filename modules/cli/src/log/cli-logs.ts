import { createLogEvent, createLogGroup, logEventProps, LogEventSeverities } from '@komore/logging';

/**
 * CLI application log group
 */
const cliApplicationLogGroup = createLogGroup('komore/cli');

/**
 * Unknown CLI command
 */
export const unknownCliCommand = createLogEvent(
  cliApplicationLogGroup,
  1,
  LogEventSeverities.ERROR,
  'unknown command "${commandName}"',
  logEventProps<{ commandName: string }>()
);
