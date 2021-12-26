import { recordLogEvent } from '@komore/observability/logging';
import { isMarkdownMetadataDefinition } from './is-markdown-metadata-definition';
import { type MarkdownMetadataDefinitionHandler } from './markdown-metadata-definition-handler';
import { unknownMetadataKindError, unknownMetadataKindWarn } from './markdown-metadata-logs';
import { type MarkdownUnknownMetadataKindBehavior } from './markdown-unknown-metadata-kind-behavior';
import { toMarkdownMetadataDefinition } from './to-markdown-metadata-definition';

/**
 * Creates a Markdown metadata definition processor
 * @param definitionHandlers Definition handlers
 * @param unknownKindBehavior Unknown metadata kind behavior
 * @returns Markdown metadata definition processor
 */
export function createMarkdownMetadataDefinitionProcessor(
  definitionHandlers: Map<string, MarkdownMetadataDefinitionHandler>,
  unknownKindBehavior: MarkdownUnknownMetadataKindBehavior
): (definitionString: string) => false {
  return definitionString => {
    if (!isMarkdownMetadataDefinition(definitionString)) {
      return false;
    }

    const { kind, value } = toMarkdownMetadataDefinition(definitionString);
    const metadataHandler = definitionHandlers.get(kind);
    if (metadataHandler !== undefined) {
      metadataHandler(value, kind);
    } else {
      switch (unknownKindBehavior) {
        case 'ERROR':
          recordLogEvent(unknownMetadataKindError({ kind, value }));
          throw new Error(`unknown metadata kind ${kind}`);
        case 'WARN':
          recordLogEvent(unknownMetadataKindWarn({ kind, value }));
          break;
        case 'IGNORE':
        default:
          break;
      }
    }

    return false;
  };
}
