/**
 * Behavior when encountering an unknown metadata kind
 *
 * - `ERROR`: record an error, stop processing
 * - `IGNORE`: silently ignore, continue processing
 * - `WARN`: record a warning, continue processing
 */
export type MarkdownUnknownMetadataKindBehavior = 'ERROR' | 'IGNORE' | 'WARN';
