import { type LogEvent, type LogGroup } from '@komore/logging';

import { type TestLogger } from './test-logger';

/**
 * Creates a test logger
 *
 * @returns Test logger
 */
export function createTestLogger(): TestLogger {
  return <LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>(
    _logEvent: LogEventType
  ) => {
    // TODO: record for test assertions
  };
}
