import { type PageMetadataRecorder } from '@komore/element-ssg';
import type * as marked from 'marked';
import { createMarkdownMetadataTokenizer } from './create-markdown-metadata-tokenizer';
import { type MarkdownMetadataContext } from './markdown-metadata-context';
import { type MarkdownMetadataDefinitionHandler } from './markdown-metadata-definition-handler';
import { type MarkdownMetadataOptions } from './markdown-metadata-options';

/**
 * Creates a Markdown metadata extension
 * @returns Markdown metadata extension
 */
export function createMarkdownMetadataExtension(extensionOptions: Partial<MarkdownMetadataOptions>): marked.MarkedExtension {
  const options: MarkdownMetadataOptions = {
    ...extensionOptions,
    additionalKinds: extensionOptions.additionalKinds ?? new Map<string, MarkdownMetadataDefinitionHandler>(),
    unknownKind: extensionOptions.unknownKind ?? 'WARN'
  };
  const pageMetadataRecorder: PageMetadataRecorder;
  const context: MarkdownMetadataContext = {
    options,
    pageMetadataRecorder
  };
  const tokenizer = createMarkdownMetadataTokenizer(context);

  return {
    tokenizer
  };
}
