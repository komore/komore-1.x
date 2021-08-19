import { createLogEvent, createLogGroup, LogEventSeverities, props } from '@komore/observability/logging';

/**
 * Markdown metadata log group
 */
const markdownMetadataLogGroup = createLogGroup('komore/element-ssg/markdown');

/**
 * Unknown metadata kind (warning)
 *
 * @cause Definiting an unknown metadata kind using the `[//]: #<kind> (value)` syntax
 * @solution If the metadata kind is a default supported kind, verify the syntax
 * @solution If the metadata kind is supported via an extension, verify that the extension is properly loaded
 */
export const unknownMetadataKindWarn = createLogEvent(
  markdownMetadataLogGroup,
  1,
  LogEventSeverities.WARNING,
  'an unknown metadata kind was specified in a Markdown metadata definition line',
  props<{ kind: string, value: string }>()
);

/**
 * Unknown metadata kind (error)
 *
 * @cause Definiting an unknown metadata kind using the `[//]: #<kind> (value)` syntax
 * @solution If the metadata kind is a default supported kind, verify the syntax
 * @solution If the metadata kind is supported via an extension, verify that the extension is properly loaded
 */
 export const unknownMetadataKindError = createLogEvent(
  markdownMetadataLogGroup,
  1,
  LogEventSeverities.CRITICAL,
  'an unknown metadata kind was specified in a Markdown metadata definition line',
  props<{ kind: string, value: string }>()
);
