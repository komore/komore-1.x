import { type MarkdownMetadataDefinitionHandler } from './markdown-metadata-definition-handler';
import { type MarkdownUnknownMetadataKindBehavior } from './markdown-unknown-metadata-kind-behavior';

/**
 * Markdown metadata options
 */
export interface MarkdownMetadataOptions {
  /**
   * Additional metadata kind handlers used to process `[//]: #<kind> (value)` metadata definitions
   */
  readonly additionalKinds: Record<string, MarkdownMetadataDefinitionHandler>;
  /**
   * Behavior when encountering an unknown metadata kind (defaults to `WARN`)
   */
  readonly unknownKind: MarkdownUnknownMetadataKindBehavior;
}
