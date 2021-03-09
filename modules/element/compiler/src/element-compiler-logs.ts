import { createLogEvent, createLogGroup, LogEventSeverities } from '@komore/observability/logging';

const elementCompilerLogGroup = createLogGroup('komore/element/compiler');

/**
 * Exported anonymous function as element method
 *
 * @cause Exporting an anonymous function from an element source
 * @solution If the function is meant to be exported, it must be given a name
 * @solution If the function is not meant to be exported, the export keyword must be removed
 */
export const exportedAnynomousFunctionAsElementMethod = createLogEvent(
  elementCompilerLogGroup,
  1,
  LogEventSeverities.WARNING,
  'an exported anonymous function cannot be used as an element method'
);
