import { createLogEvent, createLogGroup, logEventProps, LogEventSeverities } from '@komore/observability/logging';

/**
 * CLI application log group
 */
const cliApplicationLogGroup = createLogGroup('komore/application-cli');

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
