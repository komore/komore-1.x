/**
 * Documentation metadata recorder
 */
export interface DocumentationMetadataRecorder {
  addKeyword(keyword: string): void;
  addPathAlias(pathAlias: string): void;
  addSeeAlso(url: string, title?: string): void;
  setDescription(description: string): void;
  setPath(path: string):  void;
  setTitle(title: string): void;
}
