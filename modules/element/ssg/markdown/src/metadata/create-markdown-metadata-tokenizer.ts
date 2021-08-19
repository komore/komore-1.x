import { PageMetadataKind } from '@komore/element-ssg';
import type * as marked from 'marked';
import { createMarkdownMetadataDefinitionProcessor } from './create-markdown-metadata-definition-processor';
import type { MarkdownMetadataContext } from './markdown-metadata-context';
import type { MarkdownMetadataDefinitionHandler } from './markdown-metadata-definition-handler';

/**
 * Creates a Markdown metadata tokenizer
 * @param context Markdown metadata context
 * @returns Markdown metadata tokenizer
 */
export function createMarkdownMetadataTokenizer(context: MarkdownMetadataContext): Partial<marked.Tokenizer<false>> {
  const {
    options: { additionalKinds, unknownKind },
    pageMetadataRecorder
  } = context;
  const definitionHandlers = new Map<string, MarkdownMetadataDefinitionHandler>([
    [PageMetadataKind.AUTHOR, author => pageMetadataRecorder.setAuthor(author)],
    [PageMetadataKind.DESCRIPTION, description => pageMetadataRecorder.setDescription(description)],
    [PageMetadataKind.LANGUAGE, language => pageMetadataRecorder.setDescription(language)],
    [PageMetadataKind.PATH, path => pageMetadataRecorder.setPath(path)],
    [PageMetadataKind.PATH_ALIAS, pathAlias => pageMetadataRecorder.addPathAlias(pathAlias)],
    [PageMetadataKind.TITLE, title => pageMetadataRecorder.setTitle(title)],
    ...Object.entries(additionalKinds)
  ]);
  const def = createMarkdownMetadataDefinitionProcessor(definitionHandlers, unknownKind);
  return {
    def
  };
}
