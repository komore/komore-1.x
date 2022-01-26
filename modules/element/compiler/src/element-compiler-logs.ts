import { createLogEvent, createLogGroup, LogEventSeverities } from '@komore/observability/logging';

/**
 * Element compiler log group
 */
const elementCompilerLogGroup = createLogGroup('komore/element/compiler');

/**
 * TODO
 *
 * @cause TODO
 * @solution TODO
 */
export const todo = createLogEvent(
  elementCompilerLogGroup,
  1,
  LogEventSeverities.WARNING,
  'TODO'
);
