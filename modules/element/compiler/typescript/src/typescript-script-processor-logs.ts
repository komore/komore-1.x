import { createLogEvent, createLogGroup, LogEventSeverities } from '@komore/observability/logging';

/**
 * TypeScript script processor log group
 */
const typeScriptScriptProcessorLogGroup = createLogGroup('komore/element/compiler/typescript');

/**
 * Exported anonymous function as element method
 *
 * @cause Exporting an anonymous function from an element source
 * @solution If the function is meant to be exported, it must be given a name
 * @solution If the function is not meant to be exported, the export keyword must be removed
 */
export const exportedAnynomousFunctionAsElementMethod = createLogEvent(
  typeScriptScriptProcessorLogGroup,
  1,
  LogEventSeverities.WARNING,
  'an exported anonymous function cannot be used as an element method'
);
