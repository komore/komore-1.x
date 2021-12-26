import { type PageMetadataRecorder } from '@komore/element-ssg';
import { mock } from 'jest-mock-extended';
import { createMarkdownMetadataTokenizer } from './create-markdown-metadata-tokenizer';
import { type MarkdownMetadataContext } from './markdown-metadata-context';
import { type MarkdownMetadataDefinitionHandler } from './markdown-metadata-definition-handler';
import { type MarkdownUnknownMetadataKindBehavior } from './markdown-unknown-metadata-kind-behavior';

describe('Create Markdown metadata tokenizer', () => {
  it('handles title metadata definitions', () => {
    given: 'a markdown metadata context';
    const additionalKinds = new Map<string, MarkdownMetadataDefinitionHandler>();
    const unknownKind: MarkdownUnknownMetadataKindBehavior = 'IGNORE';
    const pageMetadataRecorder = mock<PageMetadataRecorder>();
    const context: MarkdownMetadataContext = { options: { additionalKinds, unknownKind }, pageMetadataRecorder };
    when: 'creating a Markdown metadata tokenizer';
    const tokenizer = createMarkdownMetadataTokenizer({ pageMetadataRecorder });
  })
});
