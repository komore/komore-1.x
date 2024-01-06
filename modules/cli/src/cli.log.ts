import { createLogEventType, logEventProperties, logEventSeverities as severities } from '@komore/logging';

import { cliDomain } from './cli.domain';

/**
 * Command-line interface log
 */
export const cliLog = createLogEventType(cliDomain, {
  unknownCliCommand: logEventProperties<{ readonly commandName: string }>(severities.error),
});
