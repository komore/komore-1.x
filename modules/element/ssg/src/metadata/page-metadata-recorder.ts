import { type PageOpenGraphMetadataKind } from './page-opengraph-metadata-kind';

/**
 * Page metadata recorder
 */
export interface PageMetadataRecorder {
  addKeyword(keyword: string): void;
  addPathAlias(pathAlias: string): void;
  setAuthor(author: string): void;
  setDescription(description: string): void;
  setLanguage(language: string): void;
  setPath(path: string): void;
  setTitle(title: string): void;
  setOpenGraphMetadata(kind: PageOpenGraphMetadataKind, value: string): void;
}
