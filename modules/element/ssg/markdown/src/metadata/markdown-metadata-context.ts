import type { PageMetadataRecorder } from '@komore/element-ssg';
import type { MarkdownMetadataOptions } from './markdown-metadata-options';

/**
 * Markdown metadata context
 */
export interface MarkdownMetadataContext {
  readonly options: MarkdownMetadataOptions;
  readonly pageMetadataRecorder: PageMetadataRecorder;
}
