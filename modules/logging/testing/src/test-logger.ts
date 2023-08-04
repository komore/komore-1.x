import { type Logger } from '@komore/logging';

/**
 * Test logger
 */
export interface TestLogger extends Logger {
  // TODO: saved log records matchers
  readonly _?: undefined;
}
